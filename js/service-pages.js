"use strict";

/*
  PATNA Service Pages Script
  Shared across:
  - google-ads.html
  - seo-optimization.html
  - social-media-marketing.html
  - web-design.html
  - conversion-boost.html
  - local-seo.html
*/

(function () {
    const CONFIG = window.PATNA_CONFIG || window.SITE_CONFIG;

    if (!CONFIG) {
        console.error("PATNA_CONFIG is missing on service page.");
        return;
    }

    const qs = (selector, scope = document) => scope.querySelector(selector);

    const pageToServiceId = {
        "google-ads.html": "google-ads",
        "seo-optimization.html": "seo-optimization",
        "social-media-marketing.html": "social-media-marketing",
        "web-design.html": "web-design",
        "conversion-boost.html": "conversion-boost",
        "local-seo.html": "local-seo"
    };

    function getCurrentFileName() {
        const path = window.location.pathname;
        const file = path.substring(path.lastIndexOf("/") + 1);
        return file || "index.html";
    }

    function getCurrentService() {
        const fileName = getCurrentFileName();
        const serviceId = pageToServiceId[fileName];

        if (!serviceId) return null;

        return CONFIG.services.find((service) => service.id === serviceId) || null;
    }

    function getCurrentServiceDetails(serviceId) {
        return CONFIG.servicePages[serviceId] || null;
    }

    function getRelatedServices(service) {
        if (!service || !Array.isArray(service.related)) return [];

        return service.related
            .map((id) => CONFIG.services.find((item) => item.id === id))
            .filter(Boolean)
            .slice(0, 3);
    }

    function setHeroBackground(service) {
        const hero = qs("[data-service-hero]");
        if (!hero || !service) return;

        hero.style.setProperty("--service-hero-image", `url("${service.heroImage}")`);
    }

    function renderServiceHero(service, details) {
        const content = qs("[data-service-hero-content]");
        const panel = qs("[data-service-hero-panel]");

        if (content) {
            content.innerHTML = `
                <div class="service-hero__kicker" data-aos="fade-up">
                    ${service.kicker}
                </div>

                <h1 class="service-title" data-aos="fade-up" data-aos-delay="80">
                    ${service.pageTitle}
                </h1>

                <p class="service-hero__text" data-aos="fade-up" data-aos-delay="160">
                    ${service.summary}
                </p>

                <div class="service-hero__actions" data-aos="fade-up" data-aos-delay="240">
                    <a class="btn btn--primary" href="#service-contact">
                        <span>${CONFIG.cta.service}</span>
                        <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                    </a>

                    <a class="btn btn--secondary" href="./index.html#services">
                        <span>View All Services</span>
                        <i data-lucide="layers-3" aria-hidden="true"></i>
                    </a>
                </div>

                <ul class="badge-list" data-aos="fade-up" data-aos-delay="320">
                    ${service.focusAreas.slice(0, 4).map((item) => `<li>${item}</li>`).join("")}
                </ul>
            `;
        }

        if (panel) {
            panel.innerHTML = `
                <span class="service-hero__panel-icon">
                    <i data-lucide="${service.icon}" aria-hidden="true"></i>
                </span>

                <h2>Focused ${service.shortTitle} support</h2>
                <p>${details.overview}</p>

                <ul class="service-hero__panel-list">
                    ${service.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                </ul>
            `;
        }
    }

    function renderOverview(service, details) {
        const intro = qs("[data-service-overview-intro]");
        const metrics = qs("[data-service-metrics]");

        if (intro) {
            intro.innerHTML = `
            <p class="service-flow__eyebrow">${service.shortTitle} overview</p>

            <h2 id="service-overview-title">
                ${CONFIG.servicePageDefaults.overviewTitle}
            </h2>

            <p>${details.overview}</p>
        `;
        }

        if (metrics) {
            const metricItems = [
                {
                    icon: "target",
                    title: "Clear objective",
                    text: "The work starts with a practical goal and a clear view of the current marketing setup."
                },
                {
                    icon: "radar",
                    title: "Intent mapping",
                    text: "Channel decisions are shaped by audience behavior, search demand, and conversion context."
                },
                {
                    icon: "sliders-horizontal",
                    title: "Controlled execution",
                    text: "Campaigns, pages, or optimization tasks are structured so performance can be reviewed."
                },
                {
                    icon: "line-chart",
                    title: "Refinement cycle",
                    text: "Performance signals are used to guide the next improvements instead of relying on guesswork."
                }
            ];

            metrics.innerHTML = metricItems.map((item, index) => `
            <article class="service-flow__item" data-aos="fade-up" data-aos-delay="${index * 60}">
                <span class="service-flow__number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="service-flow__icon">
                    <i data-lucide="${item.icon}" aria-hidden="true"></i>
                </span>

                <span class="service-flow__copy">
                    <strong>${item.title}</strong>
                    <span>${item.text}</span>
                </span>
            </article>
        `).join("");
        }
    }

    function renderIncludes(details) {
        const container = qs("[data-service-includes]");
        if (!container) return;

        container.innerHTML = details.includes.map((item, index) => `
        <div class="service-scope__item" data-aos="fade-up" data-aos-delay="${index * 55}">
            <span>${String(index + 1).padStart(2, "0")}</span>

            <div>
                <strong>${item}</strong>
                <p>${buildIncludeDescription(item)}</p>
            </div>
        </div>
    `).join("");
    }

    function buildIncludeDescription(title) {
        const descriptions = {
            "Search campaign planning and structure": "Campaign architecture is organized around intent, budget logic, ad groups, and measurable action paths.",
            "Display and remarketing direction": "Audience re-engagement and display visibility are considered where they support the broader campaign journey.",
            "Performance Max setup considerations": "Performance Max can be reviewed with attention to assets, signals, conversion goals, and account context.",
            "Keyword planning and negative keyword refinement": "Keyword direction is shaped to improve relevance and reduce unnecessary spend where possible.",
            "Conversion tracking review": "Tracking quality is reviewed so campaign performance can be interpreted with more confidence.",
            "Budget, bid, and reporting optimization": "Budget and bid decisions are reviewed in relation to goals, competition, and conversion data.",

            "Technical SEO audit": "Technical checks help identify indexation, crawl, structure, metadata, and performance issues that may limit visibility.",
            "Keyword research and mapping": "Keyword planning connects search demand with page intent, content priorities, and business relevance.",
            "On-page optimization": "Page titles, headings, copy structure, internal links, and clarity are refined for stronger relevance.",
            "Metadata review and improvement": "Metadata is reviewed so pages communicate relevance clearly in search environments.",
            "Internal linking direction": "Internal links help connect related pages and support a more understandable website structure.",
            "Search performance monitoring": "Search signals are reviewed to identify changes, opportunities, and practical next steps.",

            "Content planning direction": "Content themes are shaped around audience needs, brand positioning, and channel fit.",
            "Meta advertising support": "Paid social direction can include audience setup, creative testing, placements, and performance review.",
            "Instagram and Facebook campaign planning": "Campaign structure is planned around creative, audience intent, and funnel context.",
            "LinkedIn marketing where appropriate": "LinkedIn direction can support B2B positioning when the audience and offer fit the platform.",
            "Creative testing structure": "Creative ideas are organized so messaging, formats, and hooks can be compared more clearly.",
            "Retargeting and audience logic": "Audience paths can be structured to re-engage visitors and support stronger brand recall.",

            "Custom website design direction": "Design direction focuses on clarity, credibility, responsive layouts, and easier visitor decisions.",
            "Responsive page layouts": "Layouts are planned to remain polished across desktop, laptop, tablet, and mobile screens.",
            "Landing page structure": "Landing pages are shaped around message hierarchy, CTA flow, trust signals, and form usability.",
            "UI/UX clarity review": "Interface decisions are reviewed for readability, navigation comfort, and conversion path clarity.",
            "CTA and form usability": "Calls-to-action and forms are refined to reduce friction and help visitors act confidently.",
            "Performance-aware structure": "Page structure considers loading behavior, asset use, and clean front-end organization.",

            "Landing page analysis": "Existing pages are reviewed for clarity, relevance, friction, and decision-making flow.",
            "CTA refinement": "Calls-to-action are checked for visibility, wording, placement, and alignment with user intent.",
            "UX review": "User experience is reviewed for layout clarity, mobile behavior, readability, and navigation comfort.",
            "Funnel mapping": "The path from traffic source to inquiry is mapped so weak points can be identified.",
            "Form optimization": "Forms are reviewed for field count, usability, visual quality, consent clarity, and completion friction.",
            "Tracking review and A/B testing direction": "Measurement setup and testing direction are considered before making performance conclusions.",

            "Google Business Profile optimization direction": "Profile structure, service details, categories, location relevance, and visibility signals are reviewed.",
            "Local keyword planning": "Local keyword direction connects service intent with city, area, and nearby customer behavior.",
            "Map visibility support": "Map presence is supported through relevance, profile quality, location signals, and consistency.",
            "Citation consistency review": "Business information consistency across relevant listings can support trust and local clarity.",
            "Local landing page direction": "Location-focused page direction can help connect nearby intent with relevant service information.",
            "Review strategy and local tracking": "Review generation direction and local visibility tracking help monitor local search progress."
        };

        return descriptions[title] || "This focus area supports clearer execution, better review cycles, and more practical marketing decisions.";
    }

    function renderMatters(details) {
        const content = qs("[data-service-matters-content]");
        const note = qs("[data-service-matters-note]");
        const section = qs(".matters-section");

        if (section) {
            const mattersImage = CONFIG.assets?.images?.mattersBg || "../assets/images/matters-bg.jpg";
            section.style.setProperty("--matters-image", `url("${mattersImage}")`);
        }

        if (content) {
            content.innerHTML = `
                <h2>${CONFIG.servicePageDefaults.mattersTitle}</h2>
                <p>${details.matters}</p>
            `;
        }

        if (note) {
            note.innerHTML = `
                <i data-lucide="activity" aria-hidden="true"></i>
                <strong>Honest performance context</strong>
                <span>Outcomes may vary depending on budget, competition, market conditions, tracking setup, offer quality, and prior campaign history.</span>
            `;
        }
    }

    function renderMethod(details) {
        const panel = qs("[data-service-method-panel]");
        const list = qs("[data-service-method-list]");

        if (panel) {
            panel.innerHTML = `
                <h2>${CONFIG.servicePageDefaults.strategyTitle}</h2>
                <p>${details.strategy}</p>
            `;
        }

        if (list) {
            const methodItems = [
                {
                    title: "Understand the offer",
                    text: "Clarify what is being promoted, who it is for, and what action should happen next."
                },
                {
                    title: "Map the channel logic",
                    text: "Connect the service to search intent, audience behavior, page quality, and campaign goals."
                },
                {
                    title: "Build the execution path",
                    text: "Structure the work so campaigns, pages, content, or tracking can be reviewed properly."
                },
                {
                    title: "Refine with evidence",
                    text: "Use useful performance signals to guide the next round of adjustments."
                }
            ];

            list.innerHTML = methodItems.map((item, index) => `
                <article class="method-item" data-aos="fade-left" data-aos-delay="${index * 70}">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <div>
                        <h3>${item.title}</h3>
                        <p>${item.text}</p>
                    </div>
                </article>
            `).join("");
        }
    }

    function renderProcess(details) {
        const container = qs("[data-service-process]");
        if (!container) return;

        container.innerHTML = details.process.map((item, index) => `
        <article class="service-road__step" data-aos="fade-up" data-aos-delay="${index * 75}">
            <span class="service-road__step-index">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <div class="service-road__step-copy">
                <h3>${item}</h3>
                <p>${buildProcessDescription(item)}</p>
            </div>
        </article>
    `).join("");
    }

    function buildProcessDescription(title) {
        const descriptions = {
            "Audit current setup": "Review campaigns, tracking, account structure, landing pages, and existing performance signals.",
            "Map search intent": "Connect keywords, audiences, offers, and conversion goals into a practical paid search direction.",
            "Build or refine campaigns": "Create or improve campaign structure with budget, targeting, and measurement in mind.",
            "Review data and optimize": "Use performance signals to refine keywords, ads, budget, and landing page direction.",

            "Audit technical health": "Review technical signals that may affect search access, clarity, and crawlability.",
            "Research keywords": "Identify search themes and page opportunities connected to the business offer.",
            "Improve page structure": "Refine on-page hierarchy, metadata, internal linking, and content relevance.",
            "Monitor search signals": "Track visibility changes and identify practical next steps for continued improvement.",

            "Define audience segments": "Clarify which audiences should see the content or campaign message.",
            "Plan content themes": "Create social direction around trust, attention, education, and offer clarity.",
            "Launch creative tests": "Compare creative angles, messages, formats, and audience responses.",
            "Refine based on engagement": "Use engagement and campaign signals to improve future social activity.",

            "Clarify page goals": "Define the purpose of each page and the action visitors should take.",
            "Design responsive structure": "Create layouts that stay polished across desktop, tablet, and mobile screens.",
            "Refine CTAs and forms": "Improve action points so the visitor journey feels clear and comfortable.",
            "Prepare for optimization": "Structure pages so future marketing and conversion review is easier.",

            "Review current funnel": "Map the journey from traffic source to inquiry and identify unclear or weak steps.",
            "Find friction points": "Look for confusing copy, weak CTAs, heavy forms, layout issues, or trust gaps.",
            "Refine page actions": "Adjust page flow, call-to-action placement, and form presentation to improve user experience.",
            "Measure and iterate": "Review changes through tracking signals and refine based on what becomes clearer.",

            "Review local presence": "Check local profile quality, location information, citations, and search relevance.",
            "Map local keywords": "Connect services with nearby search terms and location-based intent.",
            "Improve profile signals": "Strengthen local profile details, service information, and consistency.",
            "Track local visibility": "Monitor local search signals and adjust the strategy over time."
        };

        return descriptions[title] || "This step keeps the work structured, measurable, and easier to improve over time.";
    }
    function renderFocusAreas(service) {
        const container = qs("[data-service-focus]");
        if (!container) return;

        container.innerHTML = service.focusAreas.map((area, index) => `
        <span class="marketing-signals__signal" data-aos="fade-up" data-aos-delay="${index * 45}">
            ${area}
        </span>
    `).join("");
    }

    function renderRelatedServices(service) {
        const container = qs("[data-related-services]");
        if (!container) return;

        const relatedServices = getRelatedServices(service);

        container.innerHTML = relatedServices.map((related, index) => `
            <article class="related-card glass-card" data-aos="fade-up" data-aos-delay="${index * 80}">
                <div class="related-card__top">
                    <span class="icon-bubble">
                        <i data-lucide="${related.icon}" aria-hidden="true"></i>
                    </span>
                    <span class="badge">${related.shortTitle}</span>
                </div>

                <div>
                    <h3>${related.title}</h3>
                    <p>${related.cardText}</p>
                </div>

                <a href="${related.href}">
                    <span>Explore Service</span>
                    <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                </a>
            </article>
        `).join("");
    }

    function renderFaq(details) {
        const faqList = qs("[data-service-faq]");
        if (!faqList || !window.PATNA || typeof window.PATNA.renderFaqList !== "function") return;

        window.PATNA.renderFaqList(faqList, details.faq);
    }

    function renderCtaCard(service) {
        const card = qs("[data-service-cta-card]");
        if (!card) return;

        card.style.setProperty("--cta-image", `url("${CONFIG.assets.images.ctaBg}")`);

        card.innerHTML = `
            <h2>${CONFIG.servicePageDefaults.ctaTitle}</h2>
            <p>${CONFIG.servicePageDefaults.ctaText}</p>

            <a class="btn btn--primary" href="./index.html#contact">
                <span>${CONFIG.cta.proposal}</span>
                <i data-lucide="arrow-up-right" aria-hidden="true"></i>
            </a>

            <div class="service-cta-card__links">
                <a href="${CONFIG.contact.emailHref}">
                    <i data-lucide="mail" aria-hidden="true"></i>
                    <span>${CONFIG.contact.email}</span>
                </a>

                ${CONFIG.contact.phone.isAvailable ? `
                    <a href="${CONFIG.contact.phone.href}">
                        <i data-lucide="phone" aria-hidden="true"></i>
                        <span>${CONFIG.contact.phone.label || CONFIG.contact.phone.number}</span>
                    </a>
                ` : `
                    <span>
                        <i data-lucide="phone" aria-hidden="true"></i>
                        <span>Phone can be added later</span>
                    </span>
                `}

                <a href="${CONFIG.contact.address.mapHref}" target="_blank" rel="noopener noreferrer">
                    <i data-lucide="map-pin" aria-hidden="true"></i>
                    <span>${CONFIG.contact.address.full}</span>
                </a>
            </div>
        `;
    }

    function updateStaticHeadings(service) {
        const mappings = [
            ["[data-service-name]", service.title],
            ["[data-service-short-name]", service.shortTitle],
            ["[data-service-includes-title]", CONFIG.servicePageDefaults.includesTitle],
            ["[data-service-process-title]", CONFIG.servicePageDefaults.processTitle],
            ["[data-service-focus-title]", CONFIG.servicePageDefaults.focusTitle],
            ["[data-related-services-title]", CONFIG.servicePageDefaults.relatedTitle],
            ["[data-service-faq-title]", CONFIG.servicePageDefaults.faqTitle]
        ];

        mappings.forEach(([selector, value]) => {
            document.querySelectorAll(selector).forEach((element) => {
                element.textContent = value;
            });
        });
    }

    function bootServicePage() {
        if (!document.body.classList.contains("service-page")) return;

        const service = getCurrentService();

        if (!service) {
            console.warn("No service configuration found for this page.");
            return;
        }

        const details = getCurrentServiceDetails(service.id);

        if (!details) {
            console.warn(`No service details found for ${service.id}.`);
            return;
        }

        setHeroBackground(service);
        updateStaticHeadings(service);
        renderServiceHero(service, details);
        renderOverview(service, details);
        renderIncludes(details);
        renderMatters(details);
        renderMethod(details);
        renderProcess(details);
        renderFocusAreas(service);
        renderRelatedServices(service);
        renderFaq(details);
        renderCtaCard(service);

        if (window.PATNA) {
            window.PATNA.refreshIcons();
        }

        if (window.AOS && typeof window.AOS.refreshHard === "function") {
            window.AOS.refreshHard();
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bootServicePage);
    } else {
        bootServicePage();
    }
})();
