"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMobileNavigationStore = void 0;
exports.useIsInsideMobileNavigation = useIsInsideMobileNavigation;
exports.MobileNavigation = MobileNavigation;
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const react_2 = require("@headlessui/react");
const framer_motion_1 = require("framer-motion");
const zustand_1 = require("zustand");
const Header_1 = require("@/components/Header");
const Navigation_1 = require("@/components/Navigation");
function MenuIcon(props) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M.5 1h9M.5 8h9M.5 4.5h9" />
    </svg>
  );
}
function XIcon(props) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m1.5 1 7 7M8.5 1l-7 7" />
    </svg>
  );
}
const IsInsideMobileNavigationContext = (0, react_1.createContext)(false);
function MobileNavigationDialog({ isOpen, close }) {
  let pathname = (0, navigation_1.usePathname)();
  let searchParams = (0, navigation_1.useSearchParams)();
  let initialPathname = (0, react_1.useRef)(pathname).current;
  let initialSearchParams = (0, react_1.useRef)(searchParams).current;
  (0, react_1.useEffect)(() => {
    if (pathname !== initialPathname || searchParams !== initialSearchParams) {
      close();
    }
  }, [pathname, searchParams, close, initialPathname, initialSearchParams]);
  function onClickDialog(event) {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    let link = event.target.closest("a");
    if (
      link &&
      link.pathname + link.search + link.hash ===
        window.location.pathname + window.location.search + window.location.hash
    ) {
      close();
    }
  }
  return (
    <react_2.Transition show={isOpen}>
      <react_2.Dialog
        onClickCapture={onClickDialog}
        onClose={close}
        className="fixed inset-0 z-50 lg:hidden"
      >
        <react_2.TransitionChild
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm dark:bg-black/40" />
        </react_2.TransitionChild>

        <react_2.DialogPanel>
          <react_2.TransitionChild
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Header_1.Header />
          </react_2.TransitionChild>

          <react_2.TransitionChild
            enter="duration-500 ease-in-out"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="duration-500 ease-in-out"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <framer_motion_1.motion.div
              layoutScroll
              className="ring-zinc-900/7.5 fixed bottom-0 left-0 top-14 w-full overflow-y-auto bg-white px-4 pb-4 pt-6 shadow-lg shadow-zinc-900/10 ring-1 dark:bg-zinc-900 dark:ring-zinc-800 min-[416px]:max-w-sm sm:px-6 sm:pb-10"
            >
              <Navigation_1.Navigation />
            </framer_motion_1.motion.div>
          </react_2.TransitionChild>
        </react_2.DialogPanel>
      </react_2.Dialog>
    </react_2.Transition>
  );
}
function useIsInsideMobileNavigation() {
  return (0, react_1.useContext)(IsInsideMobileNavigationContext);
}
exports.useMobileNavigationStore = (0, zustand_1.create)()((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
function MobileNavigation() {
  let isInsideMobileNavigation = useIsInsideMobileNavigation();
  let { isOpen, toggle, close } = (0, exports.useMobileNavigationStore)();
  let ToggleIcon = isOpen ? XIcon : MenuIcon;
  return (
    <IsInsideMobileNavigationContext.Provider value={true}>
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <ToggleIcon className="w-2.5 stroke-zinc-900 dark:stroke-white" />
      </button>
      {!isInsideMobileNavigation && (
        <react_1.Suspense fallback={null}>
          <MobileNavigationDialog isOpen={isOpen} close={close} />
        </react_1.Suspense>
      )}
    </IsInsideMobileNavigationContext.Provider>
  );
}
