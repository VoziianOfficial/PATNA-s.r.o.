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

        function startCounters() {
            counters.forEach((counter) => {
                if (counter.dataset.animated === "true") return;

                counter.dataset.animated = "true";
                animateCounter(counter);
            });
        }

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                startCounters();
                obs.unobserve(entry.target);
            });
        }, {
            threshold: 0.35,
            rootMargin: "0px 0px -10% 0px"
        });

        observer.observe(section);
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
        const container = qs("[data-home-benefits]");
        const section = qs(".benefits-section");

        if (!container) return;

        if (section) {
            const image =
                CONFIG.home?.growthSystem?.image ||
                CONFIG.home?.hero?.image ||
                "./assets/images/process-team.jpg";

            section.style.setProperty("--benefits-image", `url("${image}")`);
        }

        container.innerHTML = `
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
        initServicesSwiper();
        renderTrustStrip();
        initCountUpStats();
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