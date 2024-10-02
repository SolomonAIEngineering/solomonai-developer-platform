"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigation = void 0;
exports.Navigation = Navigation;
const clsx_1 = __importDefault(require("clsx"));
const framer_motion_1 = require("framer-motion");
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const Button_1 = require("@/components/Button");
const MobileNavigation_1 = require("@/components/MobileNavigation");
const SectionProvider_1 = require("@/components/SectionProvider");
const Tag_1 = require("@/components/Tag");
const remToPx_1 = require("@/lib/remToPx");
function useInitialValue(value, condition = true) {
    let initialValue = (0, react_1.useRef)(value).current;
    return condition ? initialValue : value;
}
function TopLevelNavItem({ href, children, }) {
    return (<li className="md:hidden">
      <link_1.default href={href} className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
        {children}
      </link_1.default>
    </li>);
}
function NavLink({ href, children, tag, active = false, isAnchorLink = false, }) {
    return (<link_1.default href={href} aria-current={active ? "page" : undefined} className={(0, clsx_1.default)("flex justify-between gap-2 py-1 pr-3 text-sm transition", isAnchorLink ? "pl-7" : "pl-4", active
            ? "text-zinc-900 dark:text-white"
            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white")}>
      <span className="truncate">{children}</span>
      {tag && (<Tag_1.Tag variant="small" color="zinc">
          {tag}
        </Tag_1.Tag>)}
    </link_1.default>);
}
function VisibleSectionHighlight({ group, pathname, }) {
    let [sections, visibleSections] = useInitialValue([
        (0, SectionProvider_1.useSectionStore)((s) => s.sections),
        (0, SectionProvider_1.useSectionStore)((s) => s.visibleSections),
    ], (0, MobileNavigation_1.useIsInsideMobileNavigation)());
    let isPresent = (0, framer_motion_1.useIsPresent)();
    let firstVisibleSectionIndex = Math.max(0, [{ id: "_top" }, ...sections].findIndex((section) => section.id === visibleSections[0]));
    let itemHeight = (0, remToPx_1.remToPx)(2);
    let height = isPresent
        ? Math.max(1, visibleSections.length) * itemHeight
        : itemHeight;
    let top = group.links.findIndex((link) => link.href === pathname) * itemHeight +
        firstVisibleSectionIndex * itemHeight;
    return (<framer_motion_1.motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }} exit={{ opacity: 0 }} className="bg-zinc-800/2.5 dark:bg-white/2.5 absolute inset-x-0 top-0 will-change-transform" style={{ borderRadius: 8, height, top }}/>);
}
function ActivePageMarker({ group, pathname, }) {
    let itemHeight = (0, remToPx_1.remToPx)(2);
    let offset = (0, remToPx_1.remToPx)(0.25);
    let activePageIndex = group.links.findIndex((link) => link.href === pathname);
    let top = offset + activePageIndex * itemHeight;
    return (<framer_motion_1.motion.div layout className="absolute left-2 h-6 w-px bg-blue-500" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }} exit={{ opacity: 0 }} style={{ top }}/>);
}
function NavigationGroup({ group, className, }) {
    // If this is the mobile navigation then we always render the initial
    // state, so that the state does not change during the close animation.
    // The state will still update when we re-open (re-render) the navigation.
    let isInsideMobileNavigation = (0, MobileNavigation_1.useIsInsideMobileNavigation)();
    let [pathname, sections] = useInitialValue([(0, navigation_1.usePathname)(), (0, SectionProvider_1.useSectionStore)((s) => s.sections)], isInsideMobileNavigation);
    let isActiveGroup = group.links.findIndex((link) => link.href === pathname) !== -1;
    return (<li className={(0, clsx_1.default)("relative mt-6", className)}>
      <framer_motion_1.motion.h2 layout="position" className="text-xs font-semibold text-zinc-900 dark:text-white">
        {group.title}
      </framer_motion_1.motion.h2>
      <div className="relative mt-3 pl-2">
        <framer_motion_1.AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (<VisibleSectionHighlight group={group} pathname={pathname}/>)}
        </framer_motion_1.AnimatePresence>
        <framer_motion_1.motion.div layout className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"/>
        <framer_motion_1.AnimatePresence initial={false}>
          {isActiveGroup && (<ActivePageMarker group={group} pathname={pathname}/>)}
        </framer_motion_1.AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link) => (<framer_motion_1.motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={link.href === pathname}>
                {link.title}
              </NavLink>
              <framer_motion_1.AnimatePresence mode="popLayout" initial={false}>
                {link.href === pathname && sections.length > 0 && (<framer_motion_1.motion.ul role="list" initial={{ opacity: 0 }} animate={{
                    opacity: 1,
                    transition: { delay: 0.1 },
                }} exit={{
                    opacity: 0,
                    transition: { duration: 0.15 },
                }}>
                    {sections.map((section) => (<li key={section.id}>
                        <NavLink href={`${link.href}#${section.id}`} tag={section.tag} isAnchorLink>
                          {section.title}
                        </NavLink>
                      </li>))}
                  </framer_motion_1.motion.ul>)}
              </framer_motion_1.AnimatePresence>
            </framer_motion_1.motion.li>))}
        </ul>
      </div>
    </li>);
}
exports.navigation = [
    {
        title: "Guides",
        links: [
            { title: "Introduction", href: "/" },
            { title: "Quickstart", href: "/quickstart" },
            { title: "SDKs", href: "/sdks" },
            { title: "Authentication", href: "/authentication" },
            { title: "Pagination", href: "/pagination" },
            { title: "Errors", href: "/errors" },
            { title: "Webhooks", href: "/webhooks" },
            { title: "Use Cases", href: "/use-cases/medical-practices" },
        ],
    },
    {
        title: "Resources",
        links: [
            { title: "Contacts", href: "/contacts" },
            { title: "Conversations", href: "/conversations" },
            { title: "Messages", href: "/messages" },
            { title: "Groups", href: "/groups" },
            { title: "Attachments", href: "/attachments" },
        ],
    },
];
function Navigation(props) {
    return (<nav {...props}>
      <ul role="list">
        <TopLevelNavItem href="/">API</TopLevelNavItem>
        <TopLevelNavItem href="#">Documentation</TopLevelNavItem>
        <TopLevelNavItem href="#">Support</TopLevelNavItem>
        {exports.navigation.map((group, groupIndex) => (<NavigationGroup key={group.title} group={group} className={groupIndex === 0 ? "md:mt-0" : ""}/>))}
        <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button_1.Button href="https://app-business.solomon-ai.app" variant="filled" className="w-full">
            Sign in
          </Button_1.Button>
        </li>
      </ul>
    </nav>);
}
