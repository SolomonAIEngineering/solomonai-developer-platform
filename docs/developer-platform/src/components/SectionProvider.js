"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionProvider = SectionProvider;
exports.useSectionStore = useSectionStore;
const react_1 = require("react");
const zustand_1 = require("zustand");
const remToPx_1 = require("@/lib/remToPx");
function createSectionStore(sections) {
    return (0, zustand_1.createStore)()((set) => ({
        sections,
        visibleSections: [],
        setVisibleSections: (visibleSections) => set((state) => state.visibleSections.join() === visibleSections.join()
            ? {}
            : { visibleSections }),
        registerHeading: ({ id, ref, offsetRem }) => set((state) => {
            return {
                sections: state.sections.map((section) => {
                    if (section.id === id) {
                        return {
                            ...section,
                            headingRef: ref,
                            offsetRem,
                        };
                    }
                    return section;
                }),
            };
        }),
    }));
}
function useVisibleSections(sectionStore) {
    let setVisibleSections = (0, zustand_1.useStore)(sectionStore, (s) => s.setVisibleSections);
    let sections = (0, zustand_1.useStore)(sectionStore, (s) => s.sections);
    (0, react_1.useEffect)(() => {
        function checkVisibleSections() {
            let { innerHeight, scrollY } = window;
            let newVisibleSections = [];
            for (let sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
                let { id, headingRef, offsetRem = 0 } = sections[sectionIndex];
                if (!headingRef?.current) {
                    continue;
                }
                let offset = (0, remToPx_1.remToPx)(offsetRem);
                let top = headingRef.current.getBoundingClientRect().top + scrollY;
                if (sectionIndex === 0 && top - offset > scrollY) {
                    newVisibleSections.push("_top");
                }
                let nextSection = sections[sectionIndex + 1];
                let bottom = (nextSection?.headingRef?.current?.getBoundingClientRect().top ??
                    Infinity) +
                    scrollY -
                    (0, remToPx_1.remToPx)(nextSection?.offsetRem ?? 0);
                if ((top > scrollY && top < scrollY + innerHeight) ||
                    (bottom > scrollY && bottom < scrollY + innerHeight) ||
                    (top <= scrollY && bottom >= scrollY + innerHeight)) {
                    newVisibleSections.push(id);
                }
            }
            setVisibleSections(newVisibleSections);
        }
        let raf = window.requestAnimationFrame(() => checkVisibleSections());
        window.addEventListener("scroll", checkVisibleSections, { passive: true });
        window.addEventListener("resize", checkVisibleSections);
        return () => {
            window.cancelAnimationFrame(raf);
            window.removeEventListener("scroll", checkVisibleSections);
            window.removeEventListener("resize", checkVisibleSections);
        };
    }, [setVisibleSections, sections]);
}
const SectionStoreContext = (0, react_1.createContext)(null);
const useIsomorphicLayoutEffect = typeof window === "undefined" ? react_1.useEffect : react_1.useLayoutEffect;
function SectionProvider({ sections, children, }) {
    let [sectionStore] = (0, react_1.useState)(() => createSectionStore(sections));
    useVisibleSections(sectionStore);
    useIsomorphicLayoutEffect(() => {
        sectionStore.setState({ sections });
    }, [sectionStore, sections]);
    return (<SectionStoreContext.Provider value={sectionStore}>
      {children}
    </SectionStoreContext.Provider>);
}
function useSectionStore(selector) {
    let store = (0, react_1.useContext)(SectionStoreContext);
    return (0, zustand_1.useStore)(store, selector);
}
