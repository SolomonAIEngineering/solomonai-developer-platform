"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = cn;
exports.absoluteUrl = absoluteUrl;
exports.constructMetadata = constructMetadata;
exports.formatDate = formatDate;
const config_1 = require("@/lib/config");
const clsx_1 = require("clsx");
const tailwind_merge_1 = require("tailwind-merge");
function cn(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
function absoluteUrl(path) {
    return `${process.env.NEXT_PUBLIC_APP_URL || config_1.siteConfig.url}${path}`;
}
function constructMetadata({ title = config_1.siteConfig.name, description = config_1.siteConfig.description, image = absoluteUrl("/og"), ...props }) {
    return {
        title: {
            template: "%s | " + config_1.siteConfig.name,
            default: config_1.siteConfig.name,
        },
        description: description || config_1.siteConfig.description,
        keywords: config_1.siteConfig.keywords,
        openGraph: {
            title,
            description,
            url: config_1.siteConfig.url,
            siteName: config_1.siteConfig.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: "website",
            locale: "en_US",
        },
        icons: "/favicon.ico",
        metadataBase: new URL(config_1.siteConfig.url),
        authors: [
            {
                name: config_1.siteConfig.name,
                url: config_1.siteConfig.url,
            },
        ],
        ...props,
    };
}
function formatDate(date) {
    let currentDate = new Date().getTime();
    if (!date.includes("T")) {
        date = `${date}T00:00:00`;
    }
    let targetDate = new Date(date).getTime();
    let timeDifference = Math.abs(currentDate - targetDate);
    let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let fullDate = new Date(date).toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
    if (daysAgo < 1) {
        return "Today";
    }
    else if (daysAgo < 7) {
        return `${fullDate} (${daysAgo}d ago)`;
    }
    else if (daysAgo < 30) {
        const weeksAgo = Math.floor(daysAgo / 7);
        return `${fullDate} (${weeksAgo}w ago)`;
    }
    else if (daysAgo < 365) {
        const monthsAgo = Math.floor(daysAgo / 30);
        return `${fullDate} (${monthsAgo}mo ago)`;
    }
    else {
        const yearsAgo = Math.floor(daysAgo / 365);
        return `${fullDate} (${yearsAgo}y ago)`;
    }
}
