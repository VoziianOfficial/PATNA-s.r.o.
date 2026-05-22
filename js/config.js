"use strict";

/*
  PATNA Website Global Configuration
  Change core business data, navigation, services, page meta,
  CTA labels, footer text, and reusable content from this file.
*/

(function () {
    const addressText = "Kukučínova 22, 974 01 Banská Bystrica, Slovakia";
    const mapQuery = encodeURIComponent(addressText);

    const CONFIG = {
        companyName: "PATNA s.r.o.",
        brandName: "PATNA",
        descriptor: "Growth Marketing Agency",
        language: "en",

        contact: {
            email: "support@patnagrowth.com",
            emailHref: "mailto:support@patnagrowth.com",
            phone: {
                number: "",
                label: "Phone to be added",
                href: "",
                isAvailable: false
            },
            address: {
                full: addressText,
                mapHref: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
                target: "_blank",
                rel: "noopener noreferrer"
            }
        },

        assets: {
            faviconSvg: "./assets/icons/favicon.svg",
            images: {
                heroMain: "../assets/images/hero-main.jpg",
                heroGoogleAds: "../assets/images/hero-google-ads.jpg",
                heroSeo: "../assets/images/hero-seo.jpg",
                heroSocialMedia: "../assets/images/hero-social-media.jpg",
                heroWebDesign: "../assets/images/hero-web-design.jpg",
                heroConversion: "../assets/images/hero-conversion.jpg",
                heroLocalSeo: "../assets/images/hero-local-seo.jpg",
                aboutAgency: "../assets/images/about-agency.jpg",
                processTeam: "../assets/images/process-team.jpg",
                ctaBg: "../assets/images/cta-bg.jpg"
            }
        },

        logo: {
            label: "PATNA Growth Marketing Agency",
            /*
              Marketing Prism Mark.
              Not letter-based, not placed inside a circle or square.
              main.js injects this SVG into header/footer/mobile logo slots.
            */
            svgMarkup: `
                <svg class="logo-mark" viewBox="3 2 154 116" role="img" aria-label="PATNA marketing prism mark" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="patnaHornMetal" x1="20" y1="20" x2="125" y2="92" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#ffffff"/>
                            <stop offset="0.18" stop-color="#d7dce5"/>
                            <stop offset="0.45" stop-color="#535b68"/>
                            <stop offset="0.72" stop-color="#171a20"/>
                            <stop offset="1" stop-color="#07090d"/>
                        </linearGradient>

                        <linearGradient id="patnaDarkBody" x1="18" y1="16" x2="106" y2="102" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#333946"/>
                            <stop offset="0.42" stop-color="#151922"/>
                            <stop offset="1" stop-color="#07090d"/>
                        </linearGradient>

                        <linearGradient id="patnaBlueGlow" x1="70" y1="20" x2="132" y2="80" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#7ea3ff"/>
                            <stop offset="0.35" stop-color="#245fff"/>
                            <stop offset="1" stop-color="#0a236d"/>
                        </linearGradient>

                        <linearGradient id="patnaHandle" x1="34" y1="64" x2="70" y2="110" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#e7ebf2"/>
                            <stop offset="0.25" stop-color="#7b8492"/>
                            <stop offset="0.68" stop-color="#20242c"/>
                            <stop offset="1" stop-color="#080a0e"/>
                        </linearGradient>

                        <filter id="patnaGlow" x="-60%" y="-60%" width="220%" height="220%">
                            <feGaussianBlur stdDeviation="5" result="blur"/>
                            <feColorMatrix
                                in="blur"
                                type="matrix"
                                values="0 0 0 0 0.12
                                        0 0 0 0 0.36
                                        0 0 0 0 1
                                        0 0 0 0.82 0"
                                result="blueGlow"
                            />
                            <feMerge>
                                <feMergeNode in="blueGlow"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    <g class="brand-logo__mark">
                        <path
                            class="brand-logo__light"
                            d="M104 39 L142 24 L142 90 L104 74 Z"
                            fill="url(#patnaBlueGlow)"
                            opacity="0.72"
                            filter="url(#patnaGlow)"
                        />

                        <path
                            d="M44 40 C60 35 78 29 106 17 C111 15 116 18 116 24 L116 88 C116 94 111 97 106 95 C78 83 60 77 44 72 Z"
                            fill="url(#patnaHornMetal)"
                        />

                        <path
                            d="M48 45 C63 41 78 36 102 26 C105 25 108 27 108 30 L108 82 C108 85 105 87 102 86 C78 76 63 71 48 67 Z"
                            fill="url(#patnaDarkBody)"
                            opacity="0.86"
                        />

                        <ellipse
                            cx="106"
                            cy="56"
                            rx="13"
                            ry="31"
                            fill="url(#patnaBlueGlow)"
                            opacity="0.95"
                            filter="url(#patnaGlow)"
                        />

                        <ellipse
                            cx="102"
                            cy="56"
                            rx="7"
                            ry="22"
                            fill="#071126"
                            opacity="0.86"
                        />

                        <path
                            d="M28 43 H51 C56 43 60 47 60 52 V61 C60 66 56 70 51 70 H28 C22 70 18 66 18 60 V53 C18 47 22 43 28 43 Z"
                            fill="url(#patnaDarkBody)"
                        />

                        <path
                            d="M42 66 H64 L58 106 C57 111 53 114 48 114 H38 C33 114 30 109 32 104 Z"
                            fill="url(#patnaHandle)"
                        />

                        <path
                            d="M37 73 H53"
                            fill="none"
                            stroke="#ffffff"
                            stroke-opacity="0.28"
                            stroke-width="2"
                            stroke-linecap="round"
                        />

                        <path
                            d="M33 49 H54"
                            fill="none"
                            stroke="#ffffff"
                            stroke-opacity="0.38"
                            stroke-width="2.2"
                            stroke-linecap="round"
                        />

                        <path
                            d="M89 31 C96 28 101 26 106 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-opacity="0.42"
                            stroke-width="2.4"
                            stroke-linecap="round"
                        />

                        <path
                            d="M88 80 C96 83 101 85 106 87"
                            fill="none"
                            stroke="#ffffff"
                            stroke-opacity="0.18"
                            stroke-width="2.4"
                            stroke-linecap="round"
                        />

                        <circle cx="113" cy="37" r="2.2" fill="#ffffff" opacity="0.86"/>
                        <circle cx="119" cy="76" r="1.8" fill="#7ea3ff" opacity="0.85"/>
                    </g>
                </svg>
            `
        },

        navigation: [
            { label: "Home", href: "./index.html", section: "home" },
            { label: "About", href: "./index.html#about", section: "about" },
            { label: "Services", href: "./index.html#services", section: "services", hasDropdown: true },
            { label: "Process", href: "./index.html#process", section: "process" },
            { label: "Our Approach", href: "./index.html#approach", section: "approach" },
            { label: "Contact", href: "./index.html#contact", section: "contact" }
        ],

        cta: {
            primary: "Start Growth Plan",
            secondary: "View Services",
            proposal: "Get Consultation",
            contact: "Contact PATNA",
            service: "Discuss This Service"
        },

        services: [
            {
                id: "google-ads",
                title: "Google Ads",
                shortTitle: "Google Ads",
                href: "./google-ads.html",
                icon: "badge-dollar-sign",
                image: "./assets/images/hero-google-ads.jpg",
                heroImage: "./assets/images/hero-google-ads.jpg",
                kicker: "Paid Search & Campaign Management",
                pageTitle: "Google Ads Management for High-Intent Growth",
                summary: "Search, display, remarketing, and Performance Max campaign support built around budget control, conversion tracking, and ongoing optimization.",
                cardText: "Build paid campaigns with cleaner structure, stronger intent matching, and more useful performance reporting.",
                bullets: ["Search campaign structure", "Conversion tracking review", "Budget and bid optimization"],
                focusAreas: ["Search campaigns", "Display campaigns", "Performance Max", "Remarketing", "Keyword planning", "Conversion tracking"],
                related: ["seo-optimization", "conversion-boost", "web-design"]
            },
            {
                id: "seo-optimization",
                title: "SEO Optimization",
                shortTitle: "SEO",
                href: "./seo-optimization.html",
                icon: "search-check",
                image: "./assets/images/hero-seo.jpg",
                heroImage: "./assets/images/hero-seo.jpg",
                kicker: "Organic Visibility & Technical Search",
                pageTitle: "SEO Optimization for Long-Term Search Visibility",
                summary: "Technical audits, keyword research, metadata, on-page structure, internal linking, and search performance monitoring.",
                cardText: "Improve organic visibility with a practical SEO system focused on structure, relevance, and measurable search signals.",
                bullets: ["Technical SEO review", "Keyword and content planning", "On-page optimization"],
                focusAreas: ["Technical audits", "Keyword research", "Metadata", "Internal linking", "Content planning", "Organic monitoring"],
                related: ["local-seo", "web-design", "conversion-boost"]
            },
            {
                id: "social-media-marketing",
                title: "Social Media Marketing",
                shortTitle: "Social Media",
                href: "./social-media-marketing.html",
                icon: "messages-square",
                image: "./assets/images/hero-social-media.jpg",
                heroImage: "./assets/images/hero-social-media.jpg",
                kicker: "Audience, Creative & Paid Social",
                pageTitle: "Social Media Marketing That Builds Attention and Trust",
                summary: "Social strategy, content planning, Meta advertising, LinkedIn direction, creative testing, retargeting, and audience research.",
                cardText: "Shape a more consistent social presence with campaigns and content paths that support attention, trust, and remarketing.",
                bullets: ["Content planning", "Creative testing", "Audience and retargeting logic"],
                focusAreas: ["Meta advertising", "Instagram campaigns", "LinkedIn marketing", "Creative testing", "Audience research", "Retargeting"],
                related: ["google-ads", "conversion-boost", "web-design"]
            },
            {
                id: "web-design",
                title: "Web Design",
                shortTitle: "Web Design",
                href: "./web-design.html",
                icon: "layout-dashboard",
                image: "./assets/images/hero-web-design.jpg",
                heroImage: "./assets/images/hero-web-design.jpg",
                kicker: "Responsive Websites & Landing Pages",
                pageTitle: "Web Design Built for Trust, Clarity, and Conversion",
                summary: "Modern responsive websites, landing pages, UI/UX clarity, conversion paths, form usability, and performance-aware structure.",
                cardText: "Create a polished website experience that explains the offer clearly and helps visitors take the next step.",
                bullets: ["Responsive page design", "Landing page structure", "Form and CTA clarity"],
                focusAreas: ["Custom website design", "Landing pages", "Responsive layouts", "UI/UX clarity", "Speed awareness", "Conversion paths"],
                related: ["conversion-boost", "seo-optimization", "google-ads"]
            },
            {
                id: "conversion-boost",
                title: "Conversion Boost",
                shortTitle: "Conversion",
                href: "./conversion-boost.html",
                icon: "mouse-pointer-click",
                image: "./assets/images/hero-conversion.jpg",
                heroImage: "./assets/images/hero-conversion.jpg",
                kicker: "UX, Funnel & Lead Quality Improvement",
                pageTitle: "Conversion Boost for Better Lead Quality",
                summary: "Landing page analysis, CTA refinement, UX review, funnel mapping, form optimization, A/B testing direction, and tracking review.",
                cardText: "Refine the steps between traffic and inquiry with clearer messaging, stronger CTAs, and cleaner form experiences.",
                bullets: ["Landing page review", "CTA and form refinement", "Tracking and funnel checks"],
                focusAreas: ["Landing page analysis", "CTA refinement", "UX review", "Funnel mapping", "Form optimization", "A/B testing direction"],
                related: ["web-design", "google-ads", "seo-optimization"]
            },
            {
                id: "local-seo",
                title: "Local SEO",
                shortTitle: "Local SEO",
                href: "./local-seo.html",
                icon: "map-pin-check",
                image: "./assets/images/hero-local-seo.jpg",
                heroImage: "./assets/images/hero-local-seo.jpg",
                kicker: "Local Visibility & Map Search Support",
                pageTitle: "Local SEO for Businesses That Need Nearby Customers",
                summary: "Google Business Profile optimization, local keyword planning, citations, location pages, review strategy, and local search tracking.",
                cardText: "Support nearby customer discovery with stronger local relevance, better profile structure, and clearer location signals.",
                bullets: ["Google Business Profile direction", "Local keyword planning", "Citation and location signals"],
                focusAreas: ["Google Business Profile", "Local keywords", "Map visibility", "Citations", "Local landing pages", "Review strategy"],
                related: ["seo-optimization", "google-ads", "web-design"]
            }
        ],

        pageMeta: {
            "index.html": {
                title: "PATNA | Growth Marketing Agency in Slovakia",
                description: "PATNA s.r.o. is a digital marketing agency focused on Google Ads, SEO, social media marketing, web design, conversion support, and local visibility."
            },
            "google-ads.html": {
                title: "Google Ads Management | PATNA",
                description: "Google Ads campaign management for search, display, Performance Max, remarketing, tracking, budget control, and optimization."
            },
            "seo-optimization.html": {
                title: "SEO Optimization | PATNA",
                description: "SEO optimization for technical search health, keyword planning, on-page structure, metadata, internal links, and organic visibility."
            },
            "social-media-marketing.html": {
                title: "Social Media Marketing | PATNA",
                description: "Social media marketing support for content planning, paid social, audience research, creative testing, and retargeting."
            },
            "web-design.html": {
                title: "Web Design | PATNA",
                description: "Responsive web design and landing page structure built for clarity, trust, usability, and conversion-focused marketing."
            },
            "conversion-boost.html": {
                title: "Conversion Boost | PATNA",
                description: "Conversion-focused support for landing pages, CTAs, forms, funnel clarity, UX review, and performance tracking."
            },
            "local-seo.html": {
                title: "Local SEO | PATNA",
                description: "Local SEO support for Google Business Profile optimization, local keywords, citations, map visibility, and location relevance."
            },
            "privacy-policy.html": {
                title: "Privacy Policy | PATNA",
                description: "Privacy Policy for PATNA s.r.o., including information collection, contact forms, cookies, analytics, retention, and user rights."
            },
            "terms-of-service.html": {
                title: "Terms of Service | PATNA",
                description: "Terms of Service for PATNA s.r.o., including service scope, client responsibilities, no guarantee of results, and limitations."
            },
            "cookie-policy.html": {
                title: "Cookie Policy | PATNA",
                description: "Cookie Policy for PATNA s.r.o., including essential, analytics, marketing, third-party cookies, and cookie management."
            }
        },

        home: {
            hero: {
                eyebrow: "Digital Marketing & Advertising Agency",
                title: "Strategy-led marketing for clearer visibility and smarter growth.",
                text: "PATNA s.r.o. helps businesses improve visibility, attract qualified leads, and turn marketing activity into measurable growth through Google Ads, SEO, social media, web design, and conversion-focused strategy.",
                image: "../assets/images/hero-main.jpg",
                badges: ["Google Ads", "SEO", "Web Design", "Conversion Strategy"]
            },
            stats: [
                { value: "6", label: "Core Services", text: "A focused service system across ads, search, web, social, local visibility, and conversion support." },
                { value: "Strategy", label: "Before Spending", text: "Campaign direction is shaped around goals, audience, budget, and conversion paths." },
                { value: "Reports", label: "Transparent Review", text: "Performance discussions are built around useful data, not vague marketing language." },
                { value: "Optimize", label: "Continuous Refinement", text: "Marketing activity is reviewed and adjusted as patterns become clearer." }
            ],
            about: {
                eyebrow: "About PATNA",
                title: "A focused growth marketing agency with a practical, measurable approach.",
                image: "./assets/images/about-agency.jpg",
                paragraphs: [
                    "PATNA s.r.o. is a digital marketing agency supporting companies with paid advertising, organic search, social media strategy, web design, local visibility, and conversion-focused improvements.",
                    "The agency approach is built around understanding the offer, selecting the right channels, improving the user journey, and reviewing performance through transparent reporting."
                ],
                highlights: [
                    "Campaign planning and channel selection",
                    "Search visibility and conversion structure",
                    "Professional reporting and optimization"
                ]
            },
            benefits: [
                {
                    icon: "route",
                    title: "Strategy Before Spending",
                    text: "Marketing activity should start with a clear offer, defined audience, and realistic channel plan before budget is committed."
                },
                {
                    icon: "bar-chart-3",
                    title: "Transparent Reporting",
                    text: "Reports focus on what is happening, what changed, and which actions may improve the next cycle."
                },
                {
                    icon: "database-zap",
                    title: "Data-Informed Decisions",
                    text: "Campaign decisions are supported by performance signals, search behavior, tracking quality, and conversion context."
                },
                {
                    icon: "refresh-cw",
                    title: "Continuous Optimization",
                    text: "Marketing performance is refined over time through testing, monitoring, creative updates, and page improvements."
                }
            ],
            process: [
                {
                    step: "01",
                    icon: "search-check",
                    title: "Discovery",
                    text: "We review the business model, audience, goals, and current marketing situation.",
                    image: "./assets/images/process-discovery-1.jpg"
                },
                {
                    step: "02",
                    icon: "layout-dashboard",
                    title: "Strategy Setup",
                    text: "We define channels, landing experience, tracking needs, and campaign structure.",
                    image: "./assets/images/process-strategy-2.jpg"
                },
                {
                    step: "03",
                    icon: "rocket",
                    title: "Launch",
                    text: "We prepare campaigns, pages, messaging, and measurement before going live.",
                    image: "./assets/images/process-launch-3.jpg"
                },
                {
                    step: "04",
                    icon: "bar-chart-3",
                    title: "Reporting",
                    text: "We review performance signals and refine the system based on real data.",
                    image: "./assets/images/process-reporting-4.jpg"
                }
            ],
            approach: [
                { icon: "users", title: "Audience Research", text: "Understand who needs the offer and what messages can support trust." },
                { icon: "network", title: "Channel Planning", text: "Choose marketing channels based on intent, budget, and conversion path." },
                { icon: "target", title: "Conversion", text: "Review tracking quality so performance can be interpreted more clearly." },
                { icon: "layout-template", title: "Landing Page ", text: "Improve page clarity, structure, forms, and calls-to-action." },
                { icon: "search", title: "Search Visibility", text: "Support stronger organic and paid visibility around relevant search intent." },
                { icon: "map", title: "Local Strategy", text: "Help location-based businesses show stronger relevance in nearby searches." },
                {
                    icon: "scan-search",
                    title: "Signal Review",
                    text: "We look at campaign signals, visitor behavior, and tracking quality to understand where attention turns into useful action."
                },
                {
                    icon: "refresh-cw",
                    title: "Refinement Loop",
                    text: "We use reporting, performance patterns, and conversion feedback to keep improving the marketing path over time."
                }
            ],
            growthSystem: {
                eyebrow: "Growth System",
                title: "A clear, practical, and measurable approach.",
                image: "./assets/images/process-team.jpg",
                text: "PATNA connects the offer, audience, channel plan, landing experience, tracking setup, and reporting rhythm so marketing work becomes easier to understand and improve.",
                items: [
                    "Define the offer and customer intent",
                    "Map acquisition channels and search demand",
                    "Build conversion paths with clear CTAs",
                    "Measure performance and refine the next cycle"
                ]
            },
            faq: [
                {
                    question: "What services does PATNA provide?",
                    answer: "PATNA provides Google Ads, SEO optimization, social media marketing, web design, conversion-focused improvements, and local SEO support."
                },
                {
                    question: "Do you guarantee results?",
                    answer: "No. Marketing outcomes depend on budget, market conditions, competition, tracking setup, offer quality, and campaign history. PATNA focuses on strategy, execution, reporting, and optimization without guaranteeing specific revenue, rankings, or lead volume."
                },
                {
                    question: "How do you report performance?",
                    answer: "Reporting is structured around useful performance signals such as traffic quality, campaign activity, search visibility, conversions, landing page behavior, and practical next steps."
                },
                {
                    question: "Can you help with local visibility?",
                    answer: "Yes. PATNA supports local SEO, Google Business Profile improvements, local keywords, citations, location pages, and local search tracking."
                },
                {
                    question: "Do you handle website improvements as well?",
                    answer: "Yes. PATNA can support web design, landing page structure, UX clarity, CTA refinement, form usability, and conversion path improvements."
                }
            ]
        },

        servicePageDefaults: {
            overviewTitle: "A focused service system built around clarity, tracking, and ongoing improvement.",
            includesTitle: "What this service includes",
            mattersTitle: "Why this service matters",
            strategyTitle: "Strategy and method",
            processTitle: "How PATNA approaches the work",
            focusTitle: "Tools and focus areas",
            relatedTitle: "Related services",
            faqTitle: "Service FAQ",
            ctaTitle: "Ready to discuss this service?",
            ctaText: "Share your current marketing situation and PATNA will respond with a practical next-step direction."
        },

        servicePages: {
            "google-ads": {
                overview: "Google Ads work requires more than launching keywords and setting a daily budget. PATNA approaches paid search with campaign structure, intent mapping, conversion tracking, budget control, and consistent performance review.",
                includes: [
                    "Search campaign planning and structure",
                    "Display and remarketing direction",
                    "Performance Max setup considerations",
                    "Keyword planning and negative keyword refinement",
                    "Conversion tracking review",
                    "Budget, bid, and reporting optimization"
                ],
                matters: "Paid campaigns can create useful visibility quickly, but only when budget, targeting, search intent, landing page quality, and tracking are aligned. PATNA helps make that system clearer and easier to optimize.",
                strategy: "The method begins with business goals and offer clarity, then moves into campaign architecture, keyword intent, audience signals, landing page review, tracking quality, and reporting rhythm.",
                process: ["Audit current setup", "Map search intent", "Build or refine campaigns", "Review data and optimize"],
                faq: [
                    {
                        question: "Can PATNA manage search campaigns?",
                        answer: "Yes. PATNA can support search campaign structure, keyword planning, ad direction, tracking review, and ongoing optimization."
                    },
                    {
                        question: "Do you work with Performance Max?",
                        answer: "Yes. Performance Max can be reviewed or included where it fits the account structure and business goals."
                    },
                    {
                        question: "Can you guarantee lower ad costs?",
                        answer: "No. Costs depend on market competition, quality signals, landing pages, budget, and campaign history. PATNA focuses on improving structure and decision-making."
                    }
                ]
            },
            "seo-optimization": {
                overview: "SEO requires a strong technical base, useful content structure, clear metadata, internal linking, and ongoing performance monitoring. PATNA focuses on practical improvements that support long-term organic visibility.",
                includes: [
                    "Technical SEO audit",
                    "Keyword research and mapping",
                    "On-page optimization",
                    "Metadata review and improvement",
                    "Internal linking direction",
                    "Search performance monitoring"
                ],
                matters: "Organic visibility can support sustainable discovery, but it depends on technical health, relevance, content quality, and competition. PATNA helps identify the changes that matter most.",
                strategy: "The method combines technical review, keyword intent, content structure, metadata clarity, page hierarchy, internal linking, and search performance analysis.",
                process: ["Audit technical health", "Research keywords", "Improve page structure", "Monitor search signals"],
                faq: [
                    {
                        question: "Do you guarantee first-page rankings?",
                        answer: "No. Rankings depend on many external factors. PATNA does not guarantee rankings, but focuses on improving technical quality, relevance, and visibility signals."
                    },
                    {
                        question: "Can you help with content planning?",
                        answer: "Yes. PATNA can support keyword-based content planning and page structure direction."
                    },
                    {
                        question: "Do you review technical SEO?",
                        answer: "Yes. Technical audits are part of SEO optimization and can include indexation, metadata, internal links, structure, and performance-related checks."
                    }
                ]
            },
            "social-media-marketing": {
                overview: "Social media marketing works best when content, audience, creative testing, and paid distribution support a consistent brand presence. PATNA helps shape social activity with structure and purpose.",
                includes: [
                    "Content planning direction",
                    "Meta advertising support",
                    "Instagram and Facebook campaign planning",
                    "LinkedIn marketing where appropriate",
                    "Creative testing structure",
                    "Retargeting and audience logic"
                ],
                matters: "Social platforms can support awareness, trust, and remarketing, but inconsistent creative and unclear audience planning can waste effort. PATNA helps connect social work to business context.",
                strategy: "The method starts with audience research, message direction, content themes, creative variations, paid social structure, retargeting logic, and performance review.",
                process: ["Define audience segments", "Plan content themes", "Launch creative tests", "Refine based on engagement"],
                faq: [
                    {
                        question: "Do you work with Meta campaigns?",
                        answer: "Yes. PATNA can support Facebook and Instagram campaign planning, creative testing, audience logic, and performance review."
                    },
                    {
                        question: "Can social media create direct leads?",
                        answer: "It can support lead generation in some cases, but results depend on offer, targeting, creative, budget, and funnel quality."
                    },
                    {
                        question: "Do you create content calendars?",
                        answer: "PATNA can support planning direction, content themes, and campaign structure for more consistent social communication."
                    }
                ]
            },
            "web-design": {
                overview: "A website should make the offer easy to understand, build trust quickly, and guide visitors toward action. PATNA designs responsive websites and landing pages with clarity, usability, and conversion paths in mind.",
                includes: [
                    "Custom website design direction",
                    "Responsive page layouts",
                    "Landing page structure",
                    "UI/UX clarity review",
                    "CTA and form usability",
                    "Performance-aware structure"
                ],
                matters: "Marketing traffic needs a strong destination. A confusing website can reduce trust and lead quality, even when advertising or SEO brings the right visitors.",
                strategy: "The method focuses on content hierarchy, layout rhythm, visual trust, service clarity, responsive behavior, form usability, and conversion path quality.",
                process: ["Clarify page goals", "Design responsive structure", "Refine CTAs and forms", "Prepare for optimization"],
                faq: [
                    {
                        question: "Can PATNA design landing pages?",
                        answer: "Yes. PATNA can design landing pages structured around clarity, trust, and conversion-focused actions."
                    },
                    {
                        question: "Will the website be responsive?",
                        answer: "Yes. Responsive structure is a core part of the web design approach."
                    },
                    {
                        question: "Do you focus on conversion?",
                        answer: "Yes. Website design is approached with attention to CTA placement, forms, page flow, and user clarity."
                    }
                ]
            },
            "conversion-boost": {
                overview: "Conversion improvement focuses on the points where visitors decide whether to take action. PATNA reviews landing pages, CTAs, forms, funnel flow, and tracking quality to identify practical improvements.",
                includes: [
                    "Landing page analysis",
                    "CTA refinement",
                    "UX review",
                    "Funnel mapping",
                    "Form optimization",
                    "Tracking review and A/B testing direction"
                ],
                matters: "More traffic does not automatically create better leads. Conversion-focused improvements can help existing traffic understand the offer faster and take action with less friction.",
                strategy: "The method studies visitor intent, message clarity, CTA strength, page flow, form usability, trust signals, and measurement quality.",
                process: ["Review current funnel", "Find friction points", "Refine page actions", "Measure and iterate"],
                faq: [
                    {
                        question: "Can PATNA improve existing landing pages?",
                        answer: "Yes. PATNA can review and refine landing page messaging, CTAs, forms, and conversion paths."
                    },
                    {
                        question: "Do you run A/B tests?",
                        answer: "PATNA can provide A/B testing direction and structure where traffic volume and tracking quality make testing useful."
                    },
                    {
                        question: "Do you guarantee more leads?",
                        answer: "No. Lead volume depends on traffic quality, offer, market, budget, competition, and tracking. PATNA focuses on improving conversion conditions."
                    }
                ]
            },
            "local-seo": {
                overview: "Local SEO helps businesses improve visibility for nearby customer intent. PATNA focuses on Google Business Profile direction, local keywords, citations, location pages, reviews, and local search monitoring.",
                includes: [
                    "Google Business Profile optimization direction",
                    "Local keyword planning",
                    "Map visibility support",
                    "Citation consistency review",
                    "Local landing page direction",
                    "Review strategy and local tracking"
                ],
                matters: "For location-based businesses, local search visibility can influence discovery and trust. Strong local signals help search engines and customers better understand relevance.",
                strategy: "The method looks at local intent, location relevance, profile quality, service-area clarity, citations, reviews, landing pages, and ongoing visibility signals.",
                process: ["Review local presence", "Map local keywords", "Improve profile signals", "Track local visibility"],
                faq: [
                    {
                        question: "Can PATNA help with Google Business Profile?",
                        answer: "Yes. PATNA can support profile optimization direction, local relevance, service information, and visibility review."
                    },
                    {
                        question: "Do reviews matter for local SEO?",
                        answer: "Reviews can influence trust and local presence. PATNA can help shape a practical review strategy without making unrealistic claims."
                    },
                    {
                        question: "Can you create local landing pages?",
                        answer: "Yes. Local landing page direction can be part of a local SEO strategy when it fits the business and search intent."
                    }
                ]
            }
        },

        legalLinks: [
            { label: "Privacy Policy", href: "./privacy-policy.html" },
            { label: "Terms of Service", href: "./terms-of-service.html" },
            { label: "Cookie Policy", href: "./cookie-policy.html" }
        ],

        footer: {
            description: "PATNA s.r.o. is a digital marketing agency focused on paid advertising, SEO, social media, web design, local visibility, and conversion-focused growth strategies.",
            disclaimer: "Marketing results may vary depending on business model, market conditions, budget, competition, tracking setup, and campaign history. PATNA s.r.o. does not guarantee specific revenue, rankings, lead volume, or advertising outcomes.",
            copyright: `© ${new Date().getFullYear()} PATNA s.r.o. All rights reserved.`
        },

        cookieBanner: {
            storageKey: "patna_cookie_consent",
            title: "Cookie preferences",
            text: "We use essential cookies to keep this website working and may use analytics or marketing cookies to understand site performance. You can accept or decline non-essential cookies.",
            acceptLabel: "Accept",
            declineLabel: "Decline",
            links: [
                { label: "Privacy Policy", href: "./privacy-policy.html" },
                { label: "Cookie Policy", href: "./cookie-policy.html" },
                { label: "Terms of Service", href: "./terms-of-service.html" }
            ]
        },

        form: {
            serviceOptions: [
                "Google Ads",
                "SEO Optimization",
                "Social Media Marketing",
                "Web Design",
                "Conversion Boost",
                "Local SEO",
                "General Consultation"
            ],
            labels: {
                fullName: "Full Name",
                email: "Email",
                phone: "Phone",
                service: "Selected Service",
                message: "Message"
            },
            placeholders: {
                fullName: "Your name",
                email: "you@example.com",
                phone: "Optional phone number",
                service: "Choose a service",
                message: "Tell us what you would like to improve"
            },
            consentText: "I agree to the Privacy Policy and Terms of Service.",
            submitLabel: "Send Request",
            successMessage: "Thank you. Your request has been prepared successfully. PATNA will review your message and respond using the contact details provided.",
            errorMessage: "Please complete the required fields and accept the policy consent before sending."
        }
    };

    window.PATNA_CONFIG = CONFIG;
    window.SITE_CONFIG = CONFIG;
})();
