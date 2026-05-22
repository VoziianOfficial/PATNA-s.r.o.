"use strict";

/*
  PATNA Homepage Script
  Handles homepage-only dynamic rendering and interactions.
*/

(function () {
    const CONFIG = window.PATNA_CONFIG || window.SITE_CONFIG;

    if (!CONFIG) {
        console.error("PATNA_CONFIG is missing on homepage.");
        return;
    }

    const qs = (selector, scope = document) => scope.querySelector(selector);
    const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

    function setHeroBackground() {
        const hero = qs("[data-home-hero]");
        if (!hero) return;

        hero.style.setProperty("--hero-image", `url("${CONFIG.home.hero.image}")`);
    }

    function renderHeroContent() {
        const hero = qs("[data-home-hero-content]");
        if (!hero) return;

        hero.innerHTML = `
            <div class="home-hero__eyebrow" data-aos="fade-up">
                ${CONFIG.home.hero.eyebrow}
            </div>

            <h1 class="hero-title" data-aos="fade-up" data-aos-delay="80">
                ${CONFIG.home.hero.title}
            </h1>

            <p class="hero-text" data-aos="fade-up" data-aos-delay="160">
                ${CONFIG.home.hero.text}
            </p>

            <div class="btn-row" data-aos="fade-up" data-aos-delay="240">
                <a class="btn btn--primary" href="#contact">
                    <span>${CONFIG.cta.primary}</span>
                    <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                </a>

                <a class="btn btn--secondary" href="#services">
                    <span>${CONFIG.cta.secondary}</span>
                    <i data-lucide="layers-3" aria-hidden="true"></i>
                </a>
            </div>

            <div class="home-hero__badges" data-aos="fade-up" data-aos-delay="320">
                <ul class="badge-list" aria-label="PATNA key services">
                    ${CONFIG.home.hero.badges.map((badge) => `
                        <li>${badge}</li>
                    `).join("")}
                </ul>
            </div>
        `;
    }

    function renderHeroPanel() {
        const panel = qs("[data-home-hero-panel]");
        if (!panel) return;

        panel.innerHTML = `
            <div class="hero-panel__top">
                <span>Growth System</span>
                <i data-lucide="sparkles" aria-hidden="true"></i>
            </div>

            <div class="hero-panel__metric">
                <strong>6</strong>
                <span>Focused marketing services connected into one strategic system.</span>
            </div>

            <ul class="hero-panel__list">
                <li>Strategy-led campaign planning</li>
                <li>Search, social, web, and local visibility</li>
                <li>Transparent reporting and refinement</li>
            </ul>
        `;
    }

    function renderServicesPreview() {
        const container = qs("[data-home-services]");
        if (!container) return;

        container.innerHTML = CONFIG.services.map((service, index) => `
            <article class="service-card" data-aos="fade-up" data-aos-delay="${index * 70}">
                <div class="service-card__media" aria-hidden="true">
                    <img src="${service.image}" alt="" loading="lazy">
                </div>

                <div class="service-card__content">
                    <div class="service-card__top">
                        <span class="service-card__icon">
                            <i data-lucide="${service.icon}" aria-hidden="true"></i>
                        </span>
                        <span class="service-card__kicker">${service.kicker}</span>
                    </div>

                    <div>
                        <h3>${service.title}</h3>
                        <p>${service.cardText}</p>
                    </div>

                    <ul class="service-card__bullets">
                        ${service.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                    </ul>

                    <a class="service-card__link" href="${service.href}">
                        <span>Learn More</span>
                        <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                    </a>
                </div>
            </article>
        `).join("");
    }

    function renderTrustStrip() {
        const container = qs("[data-home-stats]");
        if (!container) return;

        container.innerHTML = CONFIG.home.stats.map((item, index) => `
            <article class="trust-item" data-aos="fade-up" data-aos-delay="${index * 70}">
                <strong>${item.value}</strong>
                <span>${item.label}</span>
                <p>${item.text}</p>
            </article>
        `).join("");
    }

    function renderAboutSection() {
        const media = qs("[data-home-about-media]");
        const content = qs("[data-home-about-content]");

        if (media) {
            media.innerHTML = `
                <img src="${CONFIG.home.about.image}" alt="Marketing team reviewing campaign strategy" loading="lazy">
                <div class="about-floating-card">
                    <strong>${CONFIG.companyName}</strong>
                    <p>${CONFIG.contact.address.full}</p>
                </div>
            `;
        }

        if (content) {
            content.innerHTML = `
                <div class="section-heading">
                    <p class="eyebrow">${CONFIG.home.about.eyebrow}</p>
                    <h2>${CONFIG.home.about.title}</h2>
                </div>

                <div class="about-copy">
                    ${CONFIG.home.about.paragraphs.map((paragraph) => `
                        <p>${paragraph}</p>
                    `).join("")}
                </div>

                <ul class="about-highlights">
                    ${CONFIG.home.about.highlights.map((highlight) => `
                        <li>${highlight}</li>
                    `).join("")}
                </ul>

                <div class="about-contact-row">
                    <a href="${CONFIG.contact.emailHref}">
                        <i data-lucide="mail" aria-hidden="true"></i>
                        <span>${CONFIG.contact.email}</span>
                    </a>

                    <a href="${CONFIG.contact.address.mapHref}" target="_blank" rel="noopener noreferrer">
                        <i data-lucide="map-pin" aria-hidden="true"></i>
                        <span>${CONFIG.contact.address.full}</span>
                    </a>
                </div>
            `;
        }
    }

    function renderBenefits() {
        const container = qs("[data-home-benefits]");
        if (!container) return;

        container.innerHTML = CONFIG.home.benefits.map((benefit, index) => `
            <article class="benefit-card glass-card" data-aos="fade-up" data-aos-delay="${index * 70}">
                <span class="icon-bubble">
                    <i data-lucide="${benefit.icon}" aria-hidden="true"></i>
                </span>

                <h3>${benefit.title}</h3>
                <p>${benefit.text}</p>
            </article>
        `).join("");
    }

    function renderProcess() {
        const container = qs("[data-home-process]");
        if (!container) return;

        container.innerHTML = CONFIG.home.process.map((step, index) => `
            <article class="process-card light-card" data-aos="fade-up" data-aos-delay="${index * 80}">
                <div class="process-card__number">
                    <strong>${step.step}</strong>
                    <span class="icon-bubble icon-bubble--light">
                        <i data-lucide="${step.icon}" aria-hidden="true"></i>
                    </span>
                </div>

                <h3>${step.title}</h3>
                <p>${step.text}</p>
            </article>
        `).join("");
    }

    function renderApproach() {
        const container = qs("[data-home-approach]");
        if (!container) return;

        container.innerHTML = CONFIG.home.approach.map((item, index) => `
            <article class="approach-card" data-aos="fade-left" data-aos-delay="${index * 60}">
                <span class="icon-bubble">
                    <i data-lucide="${item.icon}" aria-hidden="true"></i>
                </span>

                <div>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            </article>
        `).join("");
    }

    function renderGrowthSystem() {
        const shell = qs("[data-home-growth-system]");
        const content = qs("[data-home-growth-content]");
        const steps = qs("[data-home-growth-steps]");

        if (shell) {
            shell.style.setProperty("--growth-image", `url("${CONFIG.home.growthSystem.image}")`);
        }

        if (content) {
            content.innerHTML = `
                <p class="eyebrow">${CONFIG.home.growthSystem.eyebrow}</p>
                <h2>${CONFIG.home.growthSystem.title}</h2>
                <p>${CONFIG.home.growthSystem.text}</p>
            `;
        }

        if (steps) {
            steps.innerHTML = CONFIG.home.growthSystem.items.map((item, index) => `
                <article class="growth-step" data-aos="fade-left" data-aos-delay="${index * 70}">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <p>${item}</p>
                </article>
            `).join("");
        }
    }

    function renderFaq() {
        const faqList = qs("[data-home-faq]");
        if (!faqList || !window.PATNA || typeof window.PATNA.renderFaqList !== "function") return;

        window.PATNA.renderFaqList(faqList, CONFIG.home.faq);
    }

    function renderContactPanel() {
        const panel = qs("[data-home-contact-panel]");
        if (!panel) return;

        panel.innerHTML = `
            <h3>Start with a practical conversation.</h3>
            <p>Tell PATNA what you want to improve, which channels you use today, and what kind of growth support you need.</p>

            <div class="contact-mini-panel__links">
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

    function enhanceServiceCardsPointer() {
        qsa(".service-card").forEach((card) => {
            card.addEventListener("pointermove", (event) => {
                const rect = card.getBoundingClientRect();
                const x = ((event.clientX - rect.left) / rect.width) * 100;
                const y = ((event.clientY - rect.top) / rect.height) * 100;

                card.style.setProperty("--card-x", `${x}%`);
                card.style.setProperty("--card-y", `${y}%`);
            });
        });
    }

    function bootHome() {
        if (!document.body.classList.contains("home-page")) return;

        setHeroBackground();
        renderHeroContent();
        renderHeroPanel();
        renderServicesPreview();
        renderTrustStrip();
        renderAboutSection();
        renderBenefits();
        renderProcess();
        renderApproach();
        renderGrowthSystem();
        renderFaq();
        renderContactPanel();
        enhanceServiceCardsPointer();

        if (window.PATNA) {
            window.PATNA.initForms();
            window.PATNA.refreshIcons();
        }

        if (window.AOS && typeof window.AOS.refreshHard === "function") {
            window.AOS.refreshHard();
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bootHome);
    } else {
        bootHome();
    }
})();