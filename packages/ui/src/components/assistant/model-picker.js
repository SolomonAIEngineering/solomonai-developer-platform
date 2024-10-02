"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelPicker = void 0;
require("@radix-ui/react-select");
const image_1 = __importDefault(require("next/image"));
const anthropic_svg_1 = __importDefault(require("../../assets/providers/anthropic.svg"));
const fireworks_svg_1 = __importDefault(require("../../assets/providers/fireworks.svg"));
const google_svg_1 = __importDefault(require("../../assets/providers/google.svg"));
const huggingface_svg_1 = __importDefault(require("../../assets/providers/huggingface.svg"));
const meta_svg_1 = __importDefault(require("../../assets/providers/meta.svg"));
const mistral_svg_1 = __importDefault(require("../../assets/providers/mistral.svg"));
const openai_svg_1 = __importDefault(require("../../assets/providers/openai.svg"));
const select_1 = require("../select");
const models = [
    {
        name: "GPT 3.5 Turbo",
        value: "gpt-3.5-turbo",
        icon: openai_svg_1.default,
    },
    {
        name: "Gemini 1.5 Pro",
        value: "gemini-1.5-pro",
        icon: google_svg_1.default,
    },
    {
        name: "Gemma 7b",
        value: "gemma-7b",
        icon: google_svg_1.default,
    },
    {
        name: "Claude 3 Haiku",
        value: "claude-3-haiku",
        icon: anthropic_svg_1.default,
    },
    {
        name: "Llama 3 8b",
        value: "llama-3-8b",
        icon: meta_svg_1.default,
    },
    {
        name: "Llama 3 70b",
        value: "llama-3-70b",
        icon: meta_svg_1.default,
    },
    {
        name: "Codellama 70b",
        value: "codellama-70b",
        icon: meta_svg_1.default,
    },
    {
        name: "Mistral 7b",
        value: "mistral-7b",
        icon: mistral_svg_1.default,
    },
    {
        name: "Mixtral 8x7b",
        value: "mixtral-8x7b",
        icon: mistral_svg_1.default,
    },
    {
        name: "DBRX",
        value: "dbrx",
        icon: fireworks_svg_1.default,
    },
    {
        name: "Firefunction V1",
        value: "firefunction-v1",
        icon: fireworks_svg_1.default,
    },
    {
        name: "Firellava 13b",
        value: "firellava-13b",
        icon: fireworks_svg_1.default,
    },
    {
        name: "Hermes 2 Pro",
        value: "hermes-2-pro",
        icon: huggingface_svg_1.default,
    },
    {
        name: "Neural Hermes",
        value: "neuralhermes",
        icon: huggingface_svg_1.default,
    },
];
const ModelPicker = () => {
    return (<select_1.Select defaultValue={models[0]?.value ?? ""}>
      <select_1.SelectTrigger className="max-w-[300px]">
        <select_1.SelectValue />
      </select_1.SelectTrigger>
      <select_1.SelectContent className="">
        {models.map((model) => (<select_1.SelectItem key={model.value} value={model.value}>
            <span className="flex items-center gap-2">
              <image_1.default src={model.icon} alt={model.name} className="inline size-4"/>
              <span>{model.name}</span>
            </span>
          </select_1.SelectItem>))}
      </select_1.SelectContent>
    </select_1.Select>);
};
exports.ModelPicker = ModelPicker;
