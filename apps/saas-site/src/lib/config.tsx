import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Solomon AI",
  description: "The Open Source Financial Workspace for Cyclical Businesses",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Financial Platform",
    "Cyclical Business",
    "SMB Finance",
    "Business Intelligence",
    "AI Finance",
    "Open Source Finance"
  ],
  links: {
    email: "engineering@solomon-ai.co",
    twitter: "https://twitter.com/solomonai",
    discord: "https://discord.gg/87p2vpsat5",
    github: "github.com/SolomonAIEngineering/solomonai-developer-platform/apps/saas-site",
    instagram: "https://instagram.com/solomonai/",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.logo className="w-6 h-6" />,
          title: "Smart Financial Management",
          description: "AI-powered tools designed for seasonal business cycles.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Seasonal Forecasting",
            description: "Predict and prepare for business cycle fluctuations.",
          },
          {
            href: "#",
            title: "Cash Flow Optimization",
            description: "Manage cash flow through peak and off-peak seasons.",
          },
          {
            href: "#",
            title: "Intelligent Inventory",
            description: "Optimize stock levels based on seasonal demand.",
          },
        ],
      },
    },
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            title: "Retail & Hospitality",
            href: "#",
            description: "Tailored solutions for seasonal retail operations.",
          },
          {
            title: "Tourism & Events",
            href: "#",
            description: "Financial tools for tourism-dependent businesses.",
          },
          {
            title: "Restaurants & F&B",
            href: "#",
            description: "Specialized solutions for food service businesses.",
          },
          {
            title: "Construction",
            href: "#",
            description: "Financial planning for weather-dependent projects.",
          },
          {
            title: "Agriculture",
            href: "#",
            description: "Tools for managing seasonal agricultural finances.",
          },
          {
            title: "Service Industries",
            href: "#",
            description: "Solutions for cyclical service businesses.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
  pricing: [
    {
      name: "STARTER",
      href: "#",
      price: "$29",
      period: "month",
      yearlyPrice: "$24",
      features: [
        "Single Location",
        "Basic Seasonal Analytics",
        "Cash Flow Monitoring",
        "Standard Support",
        "Basic Inventory Management",
      ],
      description: "Perfect for small seasonal businesses",
      buttonText: "Get Started",
      isPopular: false,
    },
    {
      name: "GROWTH",
      href: "#",
      price: "$79",
      period: "month",
      yearlyPrice: "$65",
      features: [
        "Up to 3 Locations",
        "Advanced Seasonal Forecasting",
        "Inventory Optimization",
        "Priority Support",
        "Full Financial Analytics",
      ],
      description: "Ideal for growing seasonal operations",
      buttonText: "Scale Up",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "#",
      price: "Custom",
      period: "month",
      yearlyPrice: "Custom",
      features: [
        "Unlimited Locations",
        "AI-Powered Predictions",
        "Custom Integrations",
        "24/7 Premium Support",
        "Advanced Business Intelligence",
      ],
      description: "For large-scale seasonal businesses",
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What makes Solomon AI different from other financial platforms?",
      answer: (
        <span>
          Solomon AI is specifically designed for businesses with seasonal cycles. Our platform uses AI to help you predict and prepare for peak seasons, manage cash flow during off-peak periods, and optimize operations year-round. We're also open source, giving you full transparency and customization options.
        </span>
      ),
    },
    {
      question: "How can Solomon AI help my seasonal business?",
      answer: (
        <span>
          Our platform provides tools for seasonal forecasting, inventory management, cash flow optimization, and financial planning. We help you anticipate busy periods, manage resources efficiently, and maintain financial stability throughout your business cycles.
        </span>
      ),
    },
    {
      question: "What types of businesses does Solomon AI work best for?",
      answer: (
        <span>
          Solomon AI is ideal for businesses with cyclical patterns, including retail stores, restaurants, tourism businesses, construction companies, agricultural operations, and seasonal service providers. Our tools adapt to your specific industry's patterns and needs.
        </span>
      ),
    },
    {
      question: "Is Solomon AI suitable for multiple business locations?",
      answer: (
        <span>
          Yes, Solomon AI scales seamlessly from single locations to multi-site operations. Our platform helps you manage and coordinate finances across all your locations while maintaining insight into individual site performance and seasonal variations.
        </span>
      ),
    },
    {
      question: "What kind of support and resources does Solomon AI provide?",
      answer: (
        <span>
          We offer comprehensive support including detailed documentation, community forums, video tutorials, and dedicated customer service. Our open-source nature also means you can access and customize the platform to your specific needs, with support from our active developer community.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Platform",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "Documentation", icon: null },
        { href: "#", text: "Developer API", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Open Source", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Community", icon: null },
        { href: "#", text: "Success Stories", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "System Status", icon: null },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;