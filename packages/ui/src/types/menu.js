"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuList = getMenuList;
const lucide_react_1 = require("lucide-react");
function getMenuList(pathname) {
    return [
        {
            groupLabel: "",
            menus: [
                {
                    href: "/dashboard",
                    label: "Dashboard",
                    active: pathname.includes("/dashboard"),
                    icon: lucide_react_1.LayoutGrid,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "Contents",
            menus: [
                {
                    href: "",
                    label: "Posts",
                    active: pathname.includes("/posts"),
                    icon: lucide_react_1.SquarePen,
                    submenus: [
                        {
                            href: "/posts",
                            label: "All Posts",
                            active: pathname === "/posts",
                        },
                        {
                            href: "/posts/new",
                            label: "New Post",
                            active: pathname === "/posts/new",
                        },
                    ],
                },
                {
                    href: "/categories",
                    label: "Categories",
                    active: pathname.includes("/categories"),
                    icon: lucide_react_1.Bookmark,
                    submenus: [],
                },
                {
                    href: "/tags",
                    label: "Tags",
                    active: pathname.includes("/tags"),
                    icon: lucide_react_1.Tag,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "Settings",
            menus: [
                {
                    href: "/users",
                    label: "Users",
                    active: pathname.includes("/users"),
                    icon: lucide_react_1.Users,
                    submenus: [],
                },
                {
                    href: "/account",
                    label: "Account",
                    active: pathname.includes("/account"),
                    icon: lucide_react_1.Settings,
                    submenus: [],
                },
            ],
        },
    ];
}
