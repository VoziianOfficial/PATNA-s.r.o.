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
        <h1 class="hero-title" data-aos="fade-up">
            We Drive Growth
            <span>Through Smart</span>
            Digital Marketing
        </h1>

        <p class="hero-text" data-aos="fade-up" data-aos-delay="120">
            PATNA is a performance-driven marketing agency helping businesses get more traffic,
            more leads and more customers.
        </p>

        <div class="btn-row" data-aos="fade-up" data-aos-delay="220">
            <a class="btn btn--primary" href="#services">
                <span>Our Services</span>
                <i data-lucide="layers-3" aria-hidden="true"></i>
            </a>

            <a class="btn btn--secondary" href="#contact">
                <span>Contact Us</span>
                <i data-lucide="arrow-up-right" aria-hidden="true"></i>
            </a>
        </div>

        <div class="home-hero__badges" data-aos="fade-up" data-aos-delay="320">
            <ul class="badge-list" aria-label="PATNA key services">
                <li>
                    <i data-lucide="badge-dollar-sign" aria-hidden="true"></i>
                    <span>Google Ads</span>
                </li>
                <li>
                    <i data-lucide="search-check" aria-hidden="true"></i>
                    <span>SEO</span>
                </li>
                <li>
                    <i data-lucide="layout-dashboard" aria-hidden="true"></i>
                    <span>Web Design</span>
                </li>
                <li>
                    <i data-lucide="mouse-pointer-click" aria-hidden="true"></i>
                    <span>Conversion Strategy</span>
                </li>
            </ul>
        </div>
    `;
    }

    function renderHeroPanel() {
        const panel = qs("[data-home-hero-panel]");
        if (!panel) return;

        panel.remove();
    }

    function renderServicesPreview() {
        const container = qs("[data-home-services]");
        if (!container) return;

        container.innerHTML = CONFIG.services.map((service, index) => `
        <article class="swiper-slide service-slide" data-aos="fade-up" data-aos-delay="${index * 70}">
            <a class="service-card service-card--swiper" href="${service.href}" aria-label="Learn more about ${service.title}">
                <img class="service-card__bg" src="${service.image}" alt="" loading="lazy">

                <span class="service-card__shade" aria-hidden="true"></span>

                <span class="service-card__number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="service-card__icon">
                    <i data-lucide="${service.icon}" aria-hidden="true"></i>
                </span>

                <span class="service-card__hover">
                    <span class="service-card__kicker">${service.kicker}</span>
                    <span class="service-card__title">${service.title}</span>
                    <span class="service-card__text">${service.cardText}</span>

                    <span class="service-card__more">
                        Explore Service
                        <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                    </span>
                </span>
            </a>
        </article>
    `).join("");
    }

    function initServicesSwiper() {
        const swiperElement = qs("[data-services-swiper]");
        if (!swiperElement || typeof Swiper === "undefined") return;

        new Swiper(swiperElement, {
            loop: true,
            speed: 760,
            grabCursor: true,
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 18,

            autoplay: {
                delay: 3200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },

            pagination: {
                el: "[data-services-pagination]",
                clickable: true
            },

            navigation: {
                nextEl: "[data-services-next]",
                prevEl: "[data-services-prev]"
            },

            keyboard: {
                enabled: true
            },

            breakpoints: {
                760: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1120: {
                    slidesPerView: 3,
                    spaceBetween: 22
                }
            }
        });
    }

    function renderTrustStrip() {
        const container = qs("[data-home-stats]");
        if (!container) return;

        const stats = [
            {
                icon: "sparkles",
                value: 200,
                suffix: "+",
                label: "Projects Completed"
            },
            {
                icon: "thumbs-up",
                value: 30,
                suffix: "+",
                label: "Industries Served"
            },
            {
                icon: "compass",
                value: 10,
                suffix: "+",
                label: "Years Of Experience"
            },
            {
                icon: "star",
                value: 100,
                suffix: "%",
                label: "Focused On Results"
            }
        ];

        container.innerHTML = stats.map((item, index) => `
        <article class="trust-item trust-item--counter" data-aos="fade-up" data-aos-delay="${index * 70}">
            <span class="trust-item__icon">
                <i data-lucide="${item.icon}" aria-hidden="true"></i>
            </span>

            <div class="trust-item__content">
                <strong>
                    <span
                        class="trust-counter"
                        data-count="${item.value}"
                        data-suffix="${item.suffix}"
                    >0${item.suffix}</span>
                </strong>
                <p>${item.label}</p>
            </div>
        </article>
    `).join("");
    }

    function initCountUpStats() {
        const section = qs(".trust-strip");
        const counters = qsa(".trust-counter");

        if (!section || !counters.length) return;

        const duration = 1600;

        function animateCounter(counter) {
            if (counter.dataset.animated === "true") return;

            counter.dataset.animated = "true";

            const target = Number(counter.dataset.count || 0);
            const suffix = counter.dataset.suffix || "";
            const startTime = performance.now();

            counter.textContent = `0${suffix}`;

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                const currentValue = Math.floor(easedProgress * target);

                counter.textContent = `${currentValue}${suffix}`;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = `${target}${suffix}`;
                }
            }

            requestAnimationFrame(update);
        }

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                counters.forEach(animateCounter);
                obs.unobserve(entry.target);
            });
        }, {
            threshold: 0.35,
            rootMargin: "0px 0px -10% 0px"
        });

        observer.observe(section);
    }

    function initBenefitsDashboard() {
        const dashboard = qs("[data-benefits-dashboard]");
        if (!dashboard) return;

        const counters = qsa("[data-dashboard-count]", dashboard);

        function animateNumber(element) {
            if (element.dataset.animated === "true") return;

            element.dataset.animated = "true";

            const target = Number(element.dataset.target || 0);
            const decimals = Number(element.dataset.decimals || 0);
            const prefix = element.dataset.prefix || "";
            const suffix = element.dataset.suffix || "";
            const duration = 1400;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = target * eased;

                element.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    element.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
                }
            }

            requestAnimationFrame(update);
        }

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                dashboard.classList.add("is-animated");
                counters.forEach(animateNumber);

                obs.unobserve(entry.target);
            });
        }, {
            threshold: 0.35
        });

        observer.observe(dashboard);
    }

    function renderAboutSection() {
        const media = qs("[data-home-about-media]");
        const content = qs("[data-home-about-content]");

        if (media) {
            media.innerHTML = `
            <div class="about-photo-card">
                <img src="${CONFIG.home.about.image}" alt="PATNA marketing strategy workspace" loading="lazy">

                <div class="about-photo-card__label">
                    <span>Growth System</span>
                    <strong>Strategy · Visibility · Conversion</strong>
                </div>
            </div>
        `;
        }

        if (content) {
            content.innerHTML = `
            <div class="about-editorial-card">
                <div class="about-editorial-card__top">
                    <p class="eyebrow">${CONFIG.home.about.eyebrow}</p>

                    <h2>
                        Marketing built
                        <span>with direction.</span>
                    </h2>
                </div>

                <div class="about-editorial-card__copy">
                    ${CONFIG.home.about.paragraphs.slice(0, 2).map((paragraph) => `
                        <p>${paragraph}</p>
                    `).join("")}
                </div>

             <ul class="about-highlights">
                      ${[
                    ...CONFIG.home.about.highlights.slice(0, 3),
                    "Clear reporting and refinement direction"
                ].map((highlight, index) => `
                  <li>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${highlight}</strong>
                   </li>
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
            </div>
        `;
        }
    }
    function renderBenefits() {
        const shell = qs("[data-benefits-shell]");
        const section = qs(".benefits-section");

        if (!shell) return;

        if (section) {
            const image =
                CONFIG.home?.growthSystem?.image ||
                CONFIG.home?.hero?.image ||
                "./assets/images/process-team.jpg";

            section.style.setProperty("--benefits-image", `url("${image}")`);
        }

        shell.innerHTML = `
        <div class="benefits-intro">
            <div class="section-heading">
                <p class="eyebrow">Why Choose PATNA</p>
                <h2 id="benefits-title">Built for realistic growth, not inflated marketing promises.</h2>
                <p>
                    Every marketing decision should connect to the business model, audience behavior, tracking
                    quality, and the path a visitor takes before becoming a lead or customer.
                </p>
            </div>

            <div class="benefits-dashboard" data-benefits-dashboard aria-hidden="true">
                <div class="benefits-dashboard__top">
                    <div>
                        <span>Live Performance View</span>
                        <small>Campaign signal overview</small>
                    </div>

                    <strong>
                        <span data-dashboard-count data-target="42" data-prefix="+" data-suffix="%">+0%</span>
                    </strong>
                </div>

                <div class="benefits-dashboard__bars">
                    <span style="--h: 42%; --bar-color: #2f80ff"></span>
                    <span style="--h: 64%; --bar-color: #f2b84b"></span>
                    <span style="--h: 53%; --bar-color: #31c48d"></span>
                    <span style="--h: 78%; --bar-color: #8b7cff"></span>
                    <span style="--h: 69%; --bar-color: #f97373"></span>
                    <span style="--h: 88%; --bar-color: #78b7ff"></span>
                </div>

                <div class="benefits-dashboard__rows">
                    <div class="benefits-dashboard__row benefits-dashboard__row--blue" style="--w: 84%">
                        <span>Traffic quality</span>
                        <i></i>
                        <strong>
                            <span data-dashboard-count data-target="84" data-suffix="%">0%</span>
                        </strong>
                    </div>

                    <div class="benefits-dashboard__row benefits-dashboard__row--yellow" style="--w: 68%">
                        <span>Lead intent</span>
                        <i></i>
                        <strong>
                            <span data-dashboard-count data-target="68" data-suffix="%">0%</span>
                        </strong>
                    </div>

                    <div class="benefits-dashboard__row benefits-dashboard__row--green" style="--w: 76%">
                        <span>Conversion clarity</span>
                        <i></i>
                        <strong>
                            <span data-dashboard-count data-target="76" data-suffix="%">0%</span>
                        </strong>
                    </div>
                </div>

            </div>
        </div>

        <div class="benefits-horizontal">
            ${CONFIG.home.benefits.map((benefit, index) => `
                <article class="benefits-horizontal__item" data-aos="fade-up" data-aos-delay="${index * 80}">
                    <div class="benefits-horizontal__top">
                        <span class="benefits-horizontal__number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <span class="benefits-horizontal__icon">
                            <i data-lucide="${benefit.icon}" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="benefits-horizontal__content">
                        <h3>${benefit.title}</h3>
                        <p>${benefit.text}</p>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
    }

    function renderProcess() {
        const container = qs("[data-home-process]");
        if (!container) return;

        const steps = CONFIG.home.process || [];
        const fallbackImage =
            CONFIG.home?.growthSystem?.image ||
            CONFIG.home?.about?.image ||
            "./assets/images/process-team.jpg";

        container.innerHTML = `
        <div class="process-switcher" data-process-switcher>
            <div class="process-switcher__list" role="tablist" aria-label="PATNA working process steps">
                ${steps.map((step, index) => `
                    <button
                        class="process-switcher__item ${index === 0 ? "is-active" : ""}"
                        type="button"
                        role="tab"
                        aria-selected="${index === 0 ? "true" : "false"}"
                        data-process-tab
                        data-process-index="${index}"
                    >
                        <span class="process-switcher__number">${step.step || String(index + 1).padStart(2, "0")}</span>

                        <span class="process-switcher__icon">
                            <i data-lucide="${step.icon}" aria-hidden="true"></i>
                        </span>

                        <span class="process-switcher__text">
                            <strong>${step.title}</strong>
                            <span>${step.text}</span>
                        </span>
                    </button>
                `).join("")}
            </div>

            <aside class="process-visual" data-process-visual aria-live="polite">
                <img
                    src="${steps[0]?.image || fallbackImage}"
                    alt="PATNA marketing process visual"
                    loading="lazy"
                    data-process-image
                >

                <div class="process-visual__overlay">
                    <span class="process-visual__step" data-process-step>
                        ${steps[0]?.step || "01"}
                    </span>

                    <span class="process-visual__icon">
                        <i data-lucide="${steps[0]?.icon || "workflow"}" aria-hidden="true" data-process-icon></i>
                    </span>

                    <div>
                        <p>Selected step</p>
                        <strong data-process-title>${steps[0]?.title || "Discovery"}</strong>
                        <span data-process-text>${steps[0]?.text || ""}</span>
                    </div>
                </div>
            </aside>
        </div>
    `;
    }

    function initProcessSwitcher() {
        const switcher = qs("[data-process-switcher]");
        if (!switcher) return;

        const tabs = qsa("[data-process-tab]", switcher);
        const image = qs("[data-process-image]", switcher);
        const stepLabel = qs("[data-process-step]", switcher);
        const title = qs("[data-process-title]", switcher);
        const text = qs("[data-process-text]", switcher);
        const icon = qs("[data-process-icon]", switcher);

        const steps = CONFIG.home.process || [];
        const fallbackImage =
            CONFIG.home?.growthSystem?.image ||
            CONFIG.home?.about?.image ||
            "./assets/images/process-team.jpg";

        function setActive(index) {
            const step = steps[index];
            if (!step) return;

            tabs.forEach((tab, tabIndex) => {
                const isActive = tabIndex === index;
                tab.classList.toggle("is-active", isActive);
                tab.setAttribute("aria-selected", isActive ? "true" : "false");
            });

            if (image) {
                image.style.opacity = "0";

                window.setTimeout(() => {
                    image.src = step.image || fallbackImage;
                    image.style.opacity = "1";
                }, 180);
            }

            if (stepLabel) stepLabel.textContent = step.step || String(index + 1).padStart(2, "0");
            if (title) title.textContent = step.title;
            if (text) text.textContent = step.text;

            if (icon) {
                icon.setAttribute("data-lucide", step.icon || "workflow");
            }

            if (window.PATNA && typeof window.PATNA.refreshIcons === "function") {
                window.PATNA.refreshIcons();
            }
        }

        function clearActive() {
            tabs.forEach((tab) => {
                tab.classList.remove("is-active");
                tab.setAttribute("aria-selected", "false");
            });
        }

        tabs.forEach((tab) => {
            const index = Number(tab.dataset.processIndex || 0);

            tab.addEventListener("click", (event) => {
                event.stopPropagation();
                setActive(index);
            });

            tab.addEventListener("mouseenter", () => {
                setActive(index);
            });

            tab.addEventListener("focus", () => {
                setActive(index);
            });
        });

        switcher.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        document.addEventListener("click", (event) => {
            if (!switcher.contains(event.target)) {
                clearActive();
            }
        });

        setActive(0);
    }

    function renderApproach() {
        const container = qs("[data-home-approach]");
        if (!container) return;

        const items = CONFIG.home.approach || [];

        container.innerHTML = `
        <div class="approach-rail" data-approach-rail>
            <div class="approach-rail__track" role="tablist" aria-label="PATNA approach stages">
                ${items.map((item, index) => `
                    <button
                        class="approach-rail__point ${index === 0 ? "is-active" : ""}"
                        type="button"
                        role="tab"
                        aria-selected="${index === 0 ? "true" : "false"}"
                        data-approach-point
                        data-approach-index="${index}"
                    >
                        <span class="approach-rail__number">${String(index + 1).padStart(2, "0")}</span>

                        <span class="approach-rail__icon">
                            <i data-lucide="${item.icon}" aria-hidden="true"></i>
                        </span>

                        <span class="approach-rail__label">${item.title}</span>
                    </button>
                `).join("")}
            </div>

            <div class="approach-rail__detail" data-approach-detail>
                <span class="approach-rail__detail-number" data-approach-detail-number>01</span>

                <div class="approach-rail__detail-icon">
                    <i data-lucide="${items[0]?.icon || "workflow"}" aria-hidden="true" data-approach-detail-icon></i>
                </div>

                <div>
                    <h3 data-approach-detail-title>${items[0]?.title || "Connected strategy"}</h3>
                    <p data-approach-detail-text>${items[0]?.text || ""}</p>
                </div>
            </div>
        </div>
    `;
    }

    function initApproachRail() {
        const rail = qs("[data-approach-rail]");
        if (!rail) return;

        const points = qsa("[data-approach-point]", rail);
        const detailNumber = qs("[data-approach-detail-number]", rail);
        const detailTitle = qs("[data-approach-detail-title]", rail);
        const detailText = qs("[data-approach-detail-text]", rail);
        const detailIcon = qs("[data-approach-detail-icon]", rail);

        const items = CONFIG.home.approach || [];
        let activeIndex = 0;
        let timer = null;

        function setActive(index) {
            const item = items[index];
            if (!item) return;

            activeIndex = index;

            points.forEach((point, pointIndex) => {
                const isActive = pointIndex === index;
                point.classList.toggle("is-active", isActive);
                point.setAttribute("aria-selected", isActive ? "true" : "false");
            });

            if (detailNumber) detailNumber.textContent = String(index + 1).padStart(2, "0");
            if (detailTitle) detailTitle.textContent = item.title;
            if (detailText) detailText.textContent = item.text;

            if (detailIcon) {
                detailIcon.setAttribute("data-lucide", item.icon || "workflow");
            }

            if (window.PATNA && typeof window.PATNA.refreshIcons === "function") {
                window.PATNA.refreshIcons();
            }
        }

        function startAuto() {
            stopAuto();

            timer = window.setInterval(() => {
                const nextIndex = (activeIndex + 1) % points.length;
                setActive(nextIndex);
            }, 4200);
        }

        function stopAuto() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }

        points.forEach((point) => {
            const index = Number(point.dataset.approachIndex || 0);

            point.addEventListener("click", () => {
                setActive(index);
                startAuto();
            });

            point.addEventListener("mouseenter", () => {
                setActive(index);
            });

            point.addEventListener("focus", () => {
                setActive(index);
            });
        });

        rail.addEventListener("mouseenter", stopAuto);
        rail.addEventListener("mouseleave", startAuto);

        setActive(0);
        startAuto();
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
        initServicesSwiper();
        renderTrustStrip();
        initCountUpStats();
        renderAboutSection();
        renderBenefits();
        initBenefitsDashboard();
        renderProcess();
        initProcessSwitcher();
        renderApproach();
        initApproachRail();
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