"use strict";

/*
  PATNA Legal Pages Script
  Shared across:
  - privacy-policy.html
  - terms-of-service.html
  - cookie-policy.html
*/

(function () {
    const CONFIG = window.PATNA_CONFIG || window.SITE_CONFIG;

    if (!CONFIG) {
        console.error("PATNA_CONFIG is missing on legal page.");
        return;
    }

    const qs = (selector, scope = document) => scope.querySelector(selector);
    const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

    const legalPageData = {
        "privacy-policy.html": {
            eyebrow: "Privacy Policy",
            title: "Privacy Policy",
            intro: "This Privacy Policy explains how PATNA s.r.o. may collect, use, retain, and protect information submitted through this website and related business communication.",
            sections: [
                {
                    id: "information-we-collect",
                    title: "Information We Collect",
                    body: [
                        "PATNA s.r.o. may collect information that you voluntarily provide when you contact the agency, submit a form, request information, or communicate by email.",
                        "This may include your name, email address, phone number if provided, selected service, message content, company details, and other information you choose to share."
                    ]
                },
                {
                    id: "how-we-use-information",
                    title: "How We Use Information",
                    body: [
                        "Information may be used to respond to inquiries, understand service needs, prepare communication, improve website usability, maintain records, and support legitimate business operations.",
                        "PATNA s.r.o. does not use submitted contact information to guarantee marketing results, rankings, lead volume, or advertising outcomes."
                    ]
                },
                {
                    id: "contact-forms",
                    title: "Contact Forms",
                    body: [
                        "When you submit a contact form, the information you provide is used to review your request and respond using the contact details supplied.",
                        "Please avoid submitting sensitive personal information through website forms unless specifically requested for a legitimate business reason."
                    ]
                },
                {
                    id: "cookies-and-analytics",
                    title: "Cookies and Analytics",
                    body: [
                        "This website may use essential cookies required for basic functionality and may use analytics or marketing cookies to understand website performance and improve the visitor experience.",
                        "Cookie choices may be stored in localStorage so the banner does not reappear after a selection is made."
                    ]
                },
                {
                    id: "data-retention",
                    title: "Data Retention",
                    body: [
                        "PATNA s.r.o. retains information only for as long as reasonably necessary for communication, business records, legal obligations, dispute resolution, and legitimate operational purposes.",
                        "Retention periods may vary depending on the nature of the inquiry, service relationship, and applicable requirements."
                    ]
                },
                {
                    id: "data-security",
                    title: "Data Security",
                    body: [
                        "Reasonable administrative, technical, and organizational measures are used to protect information from unauthorized access, loss, misuse, or disclosure.",
                        "No website or electronic communication method can be guaranteed completely secure, and users should consider this when submitting information online."
                    ]
                },
                {
                    id: "user-rights",
                    title: "User Rights",
                    body: [
                        "Depending on applicable law, you may have rights to request access, correction, deletion, restriction, or objection regarding certain personal information.",
                        `To make a privacy-related request, contact PATNA s.r.o. at ${CONFIG.contact.email}.`
                    ]
                },
                {
                    id: "third-party-services",
                    title: "Third-Party Services",
                    body: [
                        "This website may link to third-party websites or use third-party tools for analytics, fonts, icons, or website functionality.",
                        "PATNA s.r.o. is not responsible for the privacy practices, content, or policies of third-party websites or services."
                    ]
                },
                {
                    id: "contact-information",
                    title: "Contact Information",
                    body: [
                        "For privacy questions or requests, contact PATNA s.r.o. using the details below."
                    ],
                    companyBox: true
                },
                {
                    id: "changes-to-this-policy",
                    title: "Changes to This Policy",
                    body: [
                        "This Privacy Policy may be updated from time to time to reflect operational, legal, or website changes.",
                        "The latest version will be posted on this page."
                    ]
                }
            ]
        },

        "terms-of-service.html": {
            eyebrow: "Terms of Service",
            title: "Terms of Service",
            intro: "These Terms of Service describe the general conditions for using this website and communicating with PATNA s.r.o. about digital marketing and advertising services.",
            sections: [
                {
                    id: "acceptance-of-terms",
                    title: "Acceptance of Terms",
                    body: [
                        "By using this website, submitting a form, or contacting PATNA s.r.o. through this website, you agree to these Terms of Service.",
                        "If you do not agree with these terms, you should not use this website."
                    ]
                },
                {
                    id: "description-of-services",
                    title: "Description of Services",
                    body: [
                        "PATNA s.r.o. provides digital marketing and advertising services, including Google Ads support, SEO optimization, social media marketing, web design, conversion-focused improvements, and local SEO.",
                        "Specific service scope, timelines, deliverables, responsibilities, and pricing should be confirmed in direct communication or a separate written agreement."
                    ]
                },
                {
                    id: "no-guarantee-of-results",
                    title: "No Guarantee of Results",
                    body: [
                        "PATNA s.r.o. does not guarantee specific revenue, rankings, lead volume, advertising outcomes, conversion rates, return on ad spend, or business results.",
                        "Marketing results may vary depending on business model, market conditions, competition, budget, tracking setup, offer quality, website quality, campaign history, and other factors outside the agency’s control."
                    ]
                },
                {
                    id: "client-responsibilities",
                    title: "Client Responsibilities",
                    body: [
                        "Clients and prospective clients are responsible for providing accurate information, timely feedback, appropriate access where needed, and lawful materials for marketing use.",
                        "Clients are also responsible for reviewing advertising claims, legal requirements, product or service accuracy, and industry-specific compliance obligations."
                    ]
                },
                {
                    id: "website-information",
                    title: "Website Information",
                    body: [
                        "Website content is provided for general informational purposes and does not create a binding service agreement by itself.",
                        "PATNA s.r.o. may update website content, service descriptions, or availability at any time."
                    ]
                },
                {
                    id: "intellectual-property",
                    title: "Intellectual Property",
                    body: [
                        "Website design, text, visual elements, logo assets, and other original materials on this website are owned by or licensed to PATNA s.r.o. unless otherwise stated.",
                        "You may not copy, reproduce, distribute, or reuse website materials without permission, except where allowed by applicable law."
                    ]
                },
                {
                    id: "limitation-of-liability",
                    title: "Limitation of Liability",
                    body: [
                        "To the maximum extent permitted by applicable law, PATNA s.r.o. is not liable for indirect, incidental, consequential, special, or punitive damages related to website use or reliance on website information.",
                        "Nothing in these terms limits liability where such limitation is not allowed by applicable law."
                    ]
                },
                {
                    id: "third-party-links",
                    title: "Third-Party Links",
                    body: [
                        "This website may contain links to third-party websites or services. These links are provided for convenience and informational purposes.",
                        "PATNA s.r.o. is not responsible for third-party content, policies, availability, or practices."
                    ]
                },
                {
                    id: "governing-law",
                    title: "Governing Law",
                    body: [
                        "These Terms of Service are intended to be interpreted in accordance with applicable laws relevant to PATNA s.r.o. and its business operations in Slovakia.",
                        "Any disputes should first be addressed through direct communication where reasonably possible."
                    ]
                },
                {
                    id: "contact-information",
                    title: "Contact Information",
                    body: [
                        "For questions about these Terms of Service, contact PATNA s.r.o. using the details below."
                    ],
                    companyBox: true
                }
            ]
        },

        "cookie-policy.html": {
            eyebrow: "Cookie Policy",
            title: "Cookie Policy",
            intro: "This Cookie Policy explains how this website may use cookies, localStorage, and similar technologies to provide essential functionality and improve website performance.",
            sections: [
                {
                    id: "what-cookies-are",
                    title: "What Cookies Are",
                    body: [
                        "Cookies are small text files that may be stored on your device when you visit a website. Similar technologies, such as localStorage, may also store website preferences.",
                        "These technologies can help websites function, remember choices, and understand how visitors interact with pages."
                    ]
                },
                {
                    id: "types-of-cookies-we-use",
                    title: "Types of Cookies We Use",
                    body: [
                        "This website may use essential cookies, analytics cookies, marketing cookies, and third-party technologies where appropriate.",
                        "Cookie use may vary depending on website configuration and the tools active at the time of your visit."
                    ]
                },
                {
                    id: "essential-cookies",
                    title: "Essential Cookies",
                    body: [
                        "Essential cookies or localStorage entries may be used to make the website function correctly, remember cookie consent choices, support navigation, and maintain basic usability.",
                        "These technologies are generally necessary for normal website operation."
                    ]
                },
                {
                    id: "analytics-cookies",
                    title: "Analytics Cookies",
                    body: [
                        "Analytics cookies may be used to understand website traffic, page performance, user behavior, and general visitor interaction patterns.",
                        "This information helps improve website structure, content clarity, and usability."
                    ]
                },
                {
                    id: "marketing-cookies",
                    title: "Marketing Cookies",
                    body: [
                        "Marketing cookies may be used to support advertising, remarketing, campaign measurement, or audience-related insights if such tools are enabled.",
                        "Where required, non-essential cookies should depend on the user’s consent choice."
                    ]
                },
                {
                    id: "third-party-cookies",
                    title: "Third-Party Cookies",
                    body: [
                        "Some cookies or similar technologies may be placed by third-party services used for analytics, fonts, icons, embedded tools, advertising platforms, or website functionality.",
                        "Third-party services may process data according to their own policies."
                    ]
                },
                {
                    id: "managing-cookies",
                    title: "Managing Cookies",
                    body: [
                        "You can manage cookies through your browser settings. Most browsers allow you to block, delete, or limit cookies.",
                        "You may also accept or decline non-essential cookies through this website’s cookie banner when it appears."
                    ]
                },
                {
                    id: "updates-to-this-policy",
                    title: "Updates to This Policy",
                    body: [
                        "This Cookie Policy may be updated from time to time to reflect changes in website functionality, technology, or legal requirements.",
                        "The latest version will be posted on this page."
                    ]
                },
                {
                    id: "contact-information",
                    title: "Contact Information",
                    body: [
                        "For questions about this Cookie Policy, contact PATNA s.r.o. using the details below."
                    ],
                    companyBox: true
                }
            ]
        }
    };

    function getCurrentFileName() {
        const path = window.location.pathname;
        const file = path.substring(path.lastIndexOf("/") + 1);
        return file || "index.html";
    }

    function renderHero(data) {
        const hero = qs("[data-legal-hero]");
        if (!hero || !data) return;

        hero.innerHTML = `
            <div class="container">
                <div class="legal-hero__inner">
                    <div class="legal-hero__eyebrow" data-aos="fade-up">
                        ${data.eyebrow}
                    </div>

                    <h1 class="legal-title" data-aos="fade-up" data-aos-delay="80">
                        ${data.title}
                    </h1>

                    <p class="legal-hero__text" data-aos="fade-up" data-aos-delay="160">
                        ${data.intro}
                    </p>

                    <div class="legal-hero__meta" data-aos="fade-up" data-aos-delay="240">
                        <span>
                            <i data-lucide="building-2" aria-hidden="true"></i>
                            ${CONFIG.companyName}
                        </span>

                        <a href="${CONFIG.contact.emailHref}">
                            <i data-lucide="mail" aria-hidden="true"></i>
                            ${CONFIG.contact.email}
                        </a>

                        <a href="${CONFIG.contact.address.mapHref}" target="_blank" rel="noopener noreferrer">
                            <i data-lucide="map-pin" aria-hidden="true"></i>
                            ${CONFIG.contact.address.full}
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    function renderSidebar(data) {
        const sidebar = qs("[data-legal-sidebar]");
        if (!sidebar || !data) return;

        sidebar.innerHTML = `
            <h2>On this page</h2>
            <nav aria-label="${data.title} sections">
                ${data.sections.map((section) => `
                    <a href="#${section.id}" data-legal-nav-link>
                        <span>${section.title}</span>
                        <i data-lucide="arrow-right" aria-hidden="true"></i>
                    </a>
                `).join("")}
            </nav>
        `;
    }

    function renderCompanyBox() {
        return `
            <div class="legal-company-box">
                <strong>${CONFIG.companyName}</strong>

                <a href="${CONFIG.contact.emailHref}">
                    <i data-lucide="mail" aria-hidden="true"></i>
                    <span>${CONFIG.contact.email}</span>
                </a>

                <a href="${CONFIG.contact.address.mapHref}" target="_blank" rel="noopener noreferrer">
                    <i data-lucide="map-pin" aria-hidden="true"></i>
                    <span>${CONFIG.contact.address.full}</span>
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
            </div>
        `;
    }

    function renderLegalContent(data) {
        const content = qs("[data-legal-content]");
        if (!content || !data) return;

        content.innerHTML = data.sections.map((section, index) => `
            <section class="legal-card" id="${section.id}" data-aos="fade-up" data-aos-delay="${index * 40}">
                <h2>${section.title}</h2>

                ${section.body.map((paragraph) => `
                    <p>${paragraph}</p>
                `).join("")}

                ${section.list ? `
                    <ul>
                        ${section.list.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                ` : ""}

                ${section.companyBox ? renderCompanyBox() : ""}
            </section>
        `).join("");
    }

    function renderContactCard(data) {
        const card = qs("[data-legal-contact-card]");
        if (!card) return;

        card.innerHTML = `
            <div>
                <h2>Questions about this ${data.title.toLowerCase()}?</h2>
                <p>Contact PATNA s.r.o. directly using the official email or address details below.</p>
            </div>

            <div class="legal-contact-card__links">
                <a href="${CONFIG.contact.emailHref}">
                    <i data-lucide="mail" aria-hidden="true"></i>
                    <span>${CONFIG.contact.email}</span>
                </a>

                <a href="${CONFIG.contact.address.mapHref}" target="_blank" rel="noopener noreferrer">
                    <i data-lucide="map-pin" aria-hidden="true"></i>
                    <span>Open address</span>
                </a>
            </div>
        `;
    }

    function initLegalNavigation() {
        const links = qsa("[data-legal-nav-link]");
        const sections = qsa(".legal-card[id]");

        if (!links.length || !sections.length) return;

        function setActive(id) {
            links.forEach((link) => {
                const href = link.getAttribute("href") || "";
                link.classList.toggle("is-active", href === `#${id}`);
            });
        }

        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (visible) {
                setActive(visible.target.id);
            }
        }, {
            rootMargin: "-20% 0px -65% 0px",
            threshold: [0.1, 0.2, 0.4, 0.6]
        });

        sections.forEach((section) => observer.observe(section));

        links.forEach((link) => {
            link.addEventListener("click", (event) => {
                const href = link.getAttribute("href");
                const target = href ? qs(href) : null;

                if (!target) return;

                event.preventDefault();

                const header = qs("[data-header]");
                const headerHeight = header ? header.offsetHeight + 26 : 110;
                const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top,
                    behavior: "smooth"
                });

                history.pushState(null, "", href);
            });
        });
    }

    function bootLegalPage() {
        if (!document.body.classList.contains("legal-page")) return;

        const fileName = getCurrentFileName();
        const data = legalPageData[fileName];

        if (!data) {
            console.warn(`No legal page data found for ${fileName}`);
            return;
        }

        renderHero(data);
        renderSidebar(data);
        renderLegalContent(data);
        renderContactCard(data);
        initLegalNavigation();

        if (window.PATNA) {
            window.PATNA.refreshIcons();
        }

        if (window.AOS && typeof window.AOS.refreshHard === "function") {
            window.AOS.refreshHard();
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bootLegalPage);
    } else {
        bootLegalPage();
    }
})();