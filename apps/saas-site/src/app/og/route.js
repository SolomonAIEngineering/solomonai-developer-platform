"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
exports.GET = GET;
const icons_1 = require("@/components/icons");
const config_1 = require("@/lib/config");
const og_1 = require("next/og");
exports.runtime = "edge";
async function GET(req) {
    const { searchParams } = req.nextUrl;
    const postTitle = searchParams.get("title") || config_1.siteConfig.description;
    const font = fetch(new URL("../../assets/fonts/Inter-SemiBold.ttf", import.meta.url)).then((res) => res.arrayBuffer());
    const fontData = await font;
    return new og_1.ImageResponse(<div style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            // set background image if needed
            backgroundImage: `url(${config_1.siteConfig.url}/og.png)`,
            fontSize: 32,
            fontWeight: 600,
        }}>
      <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            top: "125px",
        }}>
        <icons_1.Icons.logo style={{
            width: "64px",
            height: "64px",
        }}/>

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "64px",
            fontWeight: "600",
            marginTop: "24px",
            textAlign: "center",
            width: "80%",
            letterSpacing: "-0.05em", // Added tighter tracking
        }}>
          {postTitle}
        </div>
        <div style={{
            display: "flex",
            fontSize: "16px",
            fontWeight: "500",
            marginTop: "16px",
            color: "#808080",
        }}>
          {config_1.siteConfig.name}
        </div>
      </div>

      <img src={`${config_1.siteConfig.url}/dashboard.png`} width={900} style={{
            position: "relative",
            bottom: -160,
            aspectRatio: "auto",
            border: "4px solid lightgray",
            background: "lightgray",
            borderRadius: 20,
            zIndex: 1,
        }}/>
    </div>, {
        width: 1200,
        height: 630,
        fonts: [
            {
                name: "Inter",
                data: fontData,
                style: "normal",
            },
        ],
    });
}
