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
                heroMain: "./assets/images/hero-main.jpg",
                heroGoogleAds: "./assets/images/hero-google-ads.jpg",
                heroSeo: "./assets/images/hero-seo.jpg",
                heroSocialMedia: "./assets/images/hero-social-media.jpg",
                heroWebDesign: "./assets/images/hero-web-design.jpg",
                heroConversion: "./assets/images/hero-conversion.jpg",
                heroLocalSeo: "./assets/images/hero-local-seo.jpg",
                aboutAgency: "./assets/images/about-agency.jpg",
                processTeam: "./assets/images/process-team.jpg",
                ctaBg: "./assets/images/cta-bg.jpg"
            }
        },

        logo: {
            label: "PATNA Growth Marketing Agency",
            /*
              Abstract Growth Stream Emblem.
              Not letter-based, not placed inside a circle or square.
              main.js will inject this SVG into header/footer logo slots.
            */
            svgMarkup: `
                <svg class="logo-mark" viewBox="0 0 96 76" role="img" aria-label="PATNA abstract growth stream emblem" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="patnaStreamA" x1="8" y1="62" x2="86" y2="12" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#F4F6F8"/>
                            <stop offset="0.42" stop-color="#8FA6FF"/>
                            <stop offset="1" stop-color="#1F5FFF"/>
                        </linearGradient>
                        <linearGradient id="patnaStreamB" x1="10" y1="20" x2="91" y2="66" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#FFFFFF"/>
                            <stop offset="0.48" stop-color="#D8DDE5"/>
                            <stop offset="1" stop-color="#123BB8"/>
                        </linearGradient>
                        <linearGradient id="patnaStreamC" x1="18" y1="70" x2="78" y2="6" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#20242C"/>
                            <stop offset="0.45" stop-color="#5E7DFF"/>
                            <stop offset="1" stop-color="#FFFFFF"/>
                        </linearGradient>
                        <filter id="patnaGlow" x="-20%" y="-30%" width="140%" height="160%">
                            <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#1F5FFF" flood-opacity="0.32"/>
                        </filter>
                    </defs>
                    <path filter="url(#patnaGlow)" d="M10.7 53.9C23.4 41.1 35.1 35.2 47.8 36.2C60.8 37.2 68.9 30.6 83.7 14.3C87.4 10.2 94.1 14.6 91.1 19.4C79.1 38.4 63.9 51.4 45.2 49.5C33.8 48.4 25.2 53.9 16.7 62.2C11.9 66.9 6.1 58.6 10.7 53.9Z" fill="url(#patnaStreamA)"/>
                    <path d="M7.8 22.9C19.7 17.1 31.4 16.8 42.9 22.2C53.4 27.1 64.6 26.7 82.8 15.4C88.3 12 92.9 19.9 87.5 23.7C68.6 37.1 51.5 40.4 36.1 31.6C27.7 26.8 19.8 27.2 12.3 30.7C6.4 33.4 1.9 25.8 7.8 22.9Z" fill="url(#patnaStreamB)" opacity="0.92"/>
                    <path d="M20.2 68.5C31.1 56.6 42.9 51.2 55.7 52.3C66.7 53.2 75.5 47.3 85.8 36.9C90.3 32.3 96.3 39.2 91.8 44.2C79.2 58.4 65.9 66.4 51.2 64.3C42.5 63.1 34.4 67.1 26.9 74.1C22.2 78.4 15.7 73.4 20.2 68.5Z" fill="url(#patnaStreamC)" opacity="0.9"/>
                    <path d="M35.7 9.7C44.7 10.1 52.2 13.1 58.2 18.7" fill="none" stroke="#FFFFFF" stroke-width="3.4" stroke-linecap="round" opacity="0.72"/>
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
                image: "./assets/images/hero-main.jpg",
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
                    "Professional reporting and optimization rhythm"
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
                    icon: "scan-search",
                    title: "Discovery & Goals",
                    text: "Clarify the business model, target audience, offer, current marketing setup, and realistic growth priorities."
                },
                {
                    step: "02",
                    icon: "workflow",
                    title: "Research & Strategy",
                    text: "Map channels, keywords, local intent, creative direction, landing page needs, and tracking requirements."
                },
                {
                    step: "03",
                    icon: "rocket",
                    title: "Launch & Optimize",
                    text: "Build campaigns, pages, or content systems with careful structure, monitoring, and refinement."
                },
                {
                    step: "04",
                    icon: "line-chart",
                    title: "Report & Refine",
                    text: "Review results, identify useful patterns, and adjust strategy based on data and business context."
                }
            ],
            approach: [
                { icon: "users", title: "Audience Research", text: "Understand who needs the offer and what messages can support trust." },
                { icon: "network", title: "Channel Planning", text: "Choose marketing channels based on intent, budget, and conversion path." },
                { icon: "target", title: "Conversion Tracking", text: "Review tracking quality so performance can be interpreted more clearly." },
                { icon: "layout-template", title: "Landing Page Quality", text: "Improve page clarity, structure, forms, and calls-to-action." },
                { icon: "search", title: "Search Visibility", text: "Support stronger organic and paid visibility around relevant search intent." },
                { icon: "map", title: "Local Intent Strategy", text: "Help location-based businesses show stronger relevance in nearby searches." }
            ],
            growthSystem: {
                eyebrow: "Growth System",
                title: "A connected marketing system, not isolated campaign activity.",
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