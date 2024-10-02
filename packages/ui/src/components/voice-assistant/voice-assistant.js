"use client";
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceAssistantForm = void 0;
const react_1 = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const vad_react_1 = require("@ricky0123/vad-react");
const analytics_1 = require("@vercel/analytics");
const clsx_1 = __importDefault(require("clsx"));
const lucide_react_1 = require("lucide-react");
const sonner_1 = require("sonner");
const use_player_1 = require("../../lib/players/use-player");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const assistant_button_1 = __importDefault(require("../button/assistant-button"));
const VoiceAssistantForm = ({ className, mode, }) => {
    const [input, setInput] = (0, react_1.useState)("");
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [isPending, setIsPending] = (0, react_1.useState)(false);
    const inputRef = (0, react_1.useRef)(null);
    const player = (0, use_player_1.usePlayer)();
    const vad = (0, vad_react_1.useMicVAD)({
        startOnLoad: true,
        onSpeechEnd: (audio) => {
            player.stop();
            const wav = vad_react_1.utils.encodeWAV(audio);
            const blob = new Blob([wav], { type: "audio/wav" });
            submit(blob);
            const isFirefox = navigator.userAgent.includes("Firefox");
            console.log("isFirefox", isFirefox);
            if (isFirefox)
                vad.pause();
        },
        workletURL: "/vad.worklet.bundle.min.js",
        modelURL: "/silero_vad.onnx",
        positiveSpeechThreshold: 0.6,
        minSpeechFrames: 4,
        ortConfig(ort) {
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            ort.env.wasm = {
                wasmPaths: {
                    "ort-wasm-simd-threaded.wasm": "/ort-wasm-simd-threaded.wasm",
                    "ort-wasm-simd.wasm": "/ort-wasm-simd.wasm",
                    "ort-wasm.wasm": "/ort-wasm.wasm",
                    "ort-wasm-threaded.wasm": "/ort-wasm-threaded.wasm",
                },
                numThreads: isSafari ? 1 : 4,
            };
        },
    });
    (0, react_1.useEffect)(() => {
        function keyDown(e) {
            if (e.key === "Enter")
                return inputRef.current?.focus();
            if (e.key === "Escape")
                return setInput("");
        }
        window.addEventListener("keydown", keyDown);
        return () => window.removeEventListener("keydown", keyDown);
    }, []);
    const submit = (0, react_1.useCallback)(async (data) => {
        setIsPending(true);
        const formData = new FormData();
        if (typeof data === "string") {
            formData.append("input", data);
            (0, analytics_1.track)("Text input");
        }
        else {
            formData.append("input", data, "audio.wav");
            (0, analytics_1.track)("Speech input");
        }
        for (const message of messages) {
            formData.append("message", JSON.stringify(message));
        }
        const submittedAt = Date.now();
        try {
            const response = await fetch("/api", {
                method: "POST",
                body: formData,
            });
            const transcript = decodeURIComponent(response.headers.get("X-Transcript") || "");
            const text = decodeURIComponent(response.headers.get("X-Response") || "");
            if (!response.ok || !transcript || !text || !response.body) {
                if (response.status === 429) {
                    sonner_1.toast.error("Too many requests. Please try again later.");
                }
                else {
                    sonner_1.toast.error((await response.text()) || "An error occurred.");
                }
                return;
            }
            const latency = Date.now() - submittedAt;
            player.play(response.body, () => {
                const isFirefox = navigator.userAgent.includes("Firefox");
                if (isFirefox)
                    vad.start();
            });
            setInput(transcript);
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: "user", content: transcript },
                { role: "assistant", content: text, latency },
            ]);
        }
        catch (error) {
            console.error(error);
            sonner_1.toast.error("An error occurred.");
        }
        finally {
            setIsPending(false);
        }
    }, [messages, player, vad]);
    function handleFormSubmit(e) {
        e.preventDefault();
        submit(input);
    }
    return (<>
      {mode === "voice" && <assistant_button_1.default />}
      <div className={(0, cn_1.cn)(mode === "voice" ? "hidden" : "")}>
        <div className="min-h-28 pb-4"/>
        {/** hide the below form if voice mode is enabled */}
        <form className={(0, cn_1.cn)("flex w-full max-w-3xl items-center rounded-full border border-transparent bg-neutral-200/80 focus-within:border-neutral-400 hover:border-neutral-300 hover:focus-within:border-neutral-400 dark:bg-neutral-800/80 dark:focus-within:border-neutral-600 dark:hover:border-neutral-700 dark:hover:focus-within:border-neutral-600")} onSubmit={handleFormSubmit}>
          <input type="text" className={(0, cn_1.cn)("w-full bg-transparent p-4 placeholder:text-neutral-600 focus:outline-none dark:placeholder:text-neutral-400")} required placeholder="Ask me anything" value={input} onChange={(e) => setInput(e.target.value)} ref={inputRef}/>

          <button_1.Button type="submit" className="p-4 text-neutral-700 hover:text-background dark:text-neutral-300 dark:hover:text-foreground" disabled={isPending} aria-label="Submit" variant={"ghost"}>
            {isPending ? <lucide_react_1.LoaderPinwheel /> : <react_icons_1.EnterIcon />}
          </button_1.Button>
        </form>

        <div className="min-h-28 max-w-xl space-y-4 text-balance pt-4 text-center text-neutral-400 dark:text-neutral-600">
          {messages.length > 0 && (<p>
              {messages[messages.length - 1]?.content}
              <span className="font-mono text-xs text-neutral-300 dark:text-neutral-700">
                {" "}
                ({messages[messages.length - 1]?.latency}ms)
              </span>
            </p>)}

          {messages.length === 0 && (<>
              <p>{mode === "voice" ? "Start speaking" : "Start typing"}</p>

              {vad.loading ? (<p>Loading speech detection...</p>) : vad.errored ? (<p>Failed to load speech detection.</p>) : (<p>Start talking to chat.</p>)}
            </>)}
        </div>

        <div className={(0, clsx_1.default)("absolute -z-50 size-36 rounded-full bg-gradient-to-b from-red-200 to-red-400 blur-3xl transition ease-in-out dark:from-red-600 dark:to-red-800", {
            "opacity-0": vad.loading || vad.errored,
            "opacity-30": !vad.loading && !vad.errored && !vad.userSpeaking,
            "scale-110 opacity-100": vad.userSpeaking,
        })}/>
      </div>
    </>);
};
exports.VoiceAssistantForm = VoiceAssistantForm;
function A(props) {
    return (<a {...props} className="font-medium text-neutral-500 hover:underline dark:text-neutral-500"/>);
}
exports.default = exports.VoiceAssistantForm;
