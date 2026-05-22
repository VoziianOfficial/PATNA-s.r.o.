"use strict";

/*
  PATNA Global Website Script
  Shared across homepage, service pages, and legal pages.

  Responsibilities:
  - inject shared sticky header
  - inject footer
  - inject cookie banner
  - initialize desktop services dropdown with closing delay
  - initialize fullscreen mobile menu
  - initialize FAQ accordions
  - initialize contact forms
  - inject global business data from config.js
  - apply page meta
  - initialize Lucide and AOS safely
*/

(function () {
    const CONFIG = window.PATNA_CONFIG || window.SITE_CONFIG;

    if (!CONFIG) {
        console.error("PATNA_CONFIG is missing. Make sure js/config.js loads before js/main.js.");
        return;
    }

    const SELECTORS = {
        headerMount: "[data-site-header]",
        footerMount: "[data-site-footer]",
        cookieMount: "[data-cookie-banner]",
        faqList: "[data-faq-list]",
        contactForm: "[data-contact-form]"
    };

    const state = {
        dropdownCloseTimer: null,
        lastFocusedElement: null
    };

    const qs = (selector, scope = document) => scope.querySelector(selector);
    const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

    function getCurrentFileName() {
        const path = window.location.pathname;
        const file = path.substring(path.lastIndexOf("/") + 1);
        return file || "index.html";
    }

    function getServiceById(id) {
        return CONFIG.services.find((service) => service.id === id);
    }

    function createElementFromHTML(html) {
        const template = document.createElement("template");
        template.innerHTML = html.trim();
        return template.content.firstElementChild;
    }

    function sanitizeText(value) {
        return String(value || "").trim();
    }

    function isExternalUrl(url) {
        return /^https?:\/\//i.test(url);
    }

    function getPathForAsset(path) {
        return path || "";
    }

    function applyPageMeta() {
        const fileName = getCurrentFileName();
        const meta = CONFIG.pageMeta[fileName];

        if (!meta) {
            console.warn(`No page meta found for ${fileName}`);
            return;
        }

        document.title = meta.title;

        let description = qs('meta[name="description"]');
        if (!description) {
            description = document.createElement("meta");
            description.setAttribute("name", "description");
            document.head.appendChild(description);
        }

        description.setAttribute("content", meta.description);
    }

    function injectFavicon() {
        const existing = qs('link[rel="icon"][type="image/svg+xml"]');
        if (existing) {
            existing.setAttribute("href", CONFIG.assets.faviconSvg);
            return;
        }

        const favicon = document.createElement("link");
        favicon.setAttribute("rel", "icon");
        favicon.setAttribute("type", "image/svg+xml");
        favicon.setAttribute("href", CONFIG.assets.faviconSvg);
        document.head.appendChild(favicon);
    }

    function withUniqueSvgIds(svgMarkup) {
        const instanceToken = `patna-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
        const idMap = new Map();

        const markupWithIds = svgMarkup.replace(/\bid="([^"]+)"/g, (match, idValue) => {
            const nextId = `${idValue}__${instanceToken}`;
            idMap.set(idValue, nextId);
            return `id="${nextId}"`;
        });

        const updateUrlRefs = (input) => input.replace(/url\(#([^)]+)\)/g, (match, idValue) => {
            const nextId = idMap.get(idValue);
            return nextId ? `url(#${nextId})` : match;
        });

        const updateHashRefs = (input) => input.replace(/href="#([^"]+)"/g, (match, idValue) => {
            const nextId = idMap.get(idValue);
            return nextId ? `href="#${nextId}"` : match;
        });

        const updateAriaLabelledBy = (input) => input.replace(/\baria-labelledby="([^"]+)"/g, (match, idsValue) => {
            const tokens = idsValue.split(/\s+/).filter(Boolean);
            const updated = tokens.map((token) => idMap.get(token) || token).join(" ");
            return `aria-labelledby="${updated}"`;
        });

        return updateAriaLabelledBy(updateHashRefs(updateUrlRefs(markupWithIds)));
    }

    function buildLogo(extraClass = "") {
        return `
            <a class="site-logo ${extraClass}" href="./index.html" aria-label="${CONFIG.logo.label}">
                <span class="site-logo__mark" aria-hidden="true">
                    ${withUniqueSvgIds(CONFIG.logo.svgMarkup)}
                </span>
                <span class="site-logo__text">
                    <strong>${CONFIG.brandName}</strong>
                    <small>${CONFIG.descriptor}</small>
                </span>
            </a>
        `;
    }

    function buildDesktopNavigation() {
        const navItems = CONFIG.navigation.map((item) => {
            if (item.hasDropdown) {
                return `
                    <li class="site-nav__item site-nav__item--has-dropdown" data-services-dropdown-root>
                        <a class="site-nav__link" href="${item.href}" data-nav-section="${item.section}">
                            <span>${item.label}</span>
                            <i data-lucide="chevron-down" aria-hidden="true"></i>
                        </a>

                        <div class="services-dropdown" data-services-dropdown aria-label="Services menu">
                            <div class="services-dropdown__inner">
                                ${CONFIG.services.map((service) => `
                                    <a class="services-dropdown__item" href="${service.href}">
                                        <span class="services-dropdown__icon">
                                            <i data-lucide="${service.icon}" aria-hidden="true"></i>
                                        </span>
                                        <span>
                                            <strong>${service.title}</strong>
                                            <small>${service.summary}</small>
                                        </span>
                                    </a>
                                `).join("")}
                            </div>
                        </div>
                    </li>
                `;
            }

            return `
                <li class="site-nav__item">
                    <a class="site-nav__link" href="${item.href}" data-nav-section="${item.section}">
                        <span>${item.label}</span>
                    </a>
                </li>
            `;
        }).join("");

        return `
            <nav class="site-nav" aria-label="Primary navigation">
                <ul class="site-nav__list">
                    ${navItems}
                </ul>
            </nav>
        `;
    }

    function buildHeader() {
        return `
            <header class="site-header" data-header>
                <div class="site-header__shell">
                    ${buildLogo()}

                    ${buildDesktopNavigation()}

                    <div class="site-header__actions">
                        <a class="btn btn--header" href="./index.html#contact">
                            <span>${CONFIG.cta.primary}</span>
                            <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                        </a>

                        <button class="mobile-menu-toggle" type="button" data-mobile-menu-open aria-label="Open menu" aria-controls="mobileMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            <div class="mobile-menu" id="mobileMenu" data-mobile-menu aria-hidden="true">
                <div class="mobile-menu__backdrop" data-mobile-menu-close></div>

                <aside class="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
                    <div class="mobile-menu__top">
                        ${buildLogo("site-logo--mobile")}

                        <button class="mobile-menu__close" type="button" data-mobile-menu-close aria-label="Close menu">
                            <i data-lucide="x" aria-hidden="true"></i>
                        </button>
                    </div>

                    <div class="mobile-menu__body">
                        <nav class="mobile-menu__nav" aria-label="Mobile primary navigation">
                            ${CONFIG.navigation.map((item) => `
                                <a href="${item.href}" data-mobile-menu-link>
                                    <span>${item.label}</span>
                                    <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                                </a>
                            `).join("")}
                        </nav>

                        <div class="mobile-menu__services">
                            <p class="mobile-menu__eyebrow">Services</p>
                            <div class="mobile-menu__service-grid">
                                ${CONFIG.services.map((service) => `
                                    <a href="${service.href}" data-mobile-menu-link>
                                        <i data-lucide="${service.icon}" aria-hidden="true"></i>
                                        <span>${service.title}</span>
                                    </a>
                                `).join("")}
                            </div>
                        </div>

                        <div class="mobile-menu__contact">
                            <p class="mobile-menu__eyebrow">Contact</p>

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
                                <span class="mobile-menu__muted">
                                    <i data-lucide="phone" aria-hidden="true"></i>
                                    <span>Phone can be added later</span>
                                </span>
                            `}

                            <a href="${CONFIG.contact.address.mapHref}" target="_blank" rel="noopener noreferrer">
                                <i data-lucide="map-pin" aria-hidden="true"></i>
                                <span>${CONFIG.contact.address.full}</span>
                            </a>
                        </div>

                        <a class="btn btn--mobile-menu" href="./index.html#contact" data-mobile-menu-link>
                            <span>${CONFIG.cta.proposal}</span>
                            <i data-lucide="arrow-up-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </aside>
            </div>
        `;
    }

    function injectHeader() {
        let mount = qs(SELECTORS.headerMount);

        if (!mount) {
            mount = document.createElement("div");
            mount.setAttribute("data-site-header", "");
            document.body.insertAdjacentElement("afterbegin", mount);
        }

        mount.innerHTML = buildHeader();
        setActiveNavigation();
        initHeaderScrollState();
        initDesktopDropdown();
        initMobileMenu();
    }

    function setActiveNavigation() {
        const fileName = getCurrentFileName();

        qsa(".site-nav__link").forEach((link) => {
            const href = link.getAttribute("href") || "";
            const hrefFile = href.split("#")[0].replace("./", "") || "index.html";

            if (hrefFile === fileName) {
                link.classList.add("is-active");
            }

            if (fileName !== "index.html" && href.includes("#")) {
                link.classList.remove("is-active");
            }
        });

        qsa(".services-dropdown__item, .mobile-menu__service-grid a").forEach((link) => {
            const href = (link.getAttribute("href") || "").replace("./", "");
            if (href === fileName) {
                link.classList.add("is-active");
            }
        });
    }

    function initHeaderScrollState() {
        const header = qs("[data-header]");
        if (!header) return;

        const update = () => {
            header.classList.toggle("is-scrolled", window.scrollY > 10);
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
    }

    function initDesktopDropdown() {
        const root = qs("[data-services-dropdown-root]");
        const dropdown = qs("[data-services-dropdown]");

        if (!root || !dropdown) return;

        const open = () => {
            clearTimeout(state.dropdownCloseTimer);
            root.classList.add("is-open");
            dropdown.classList.add("is-open");
        };

        const close = () => {
            clearTimeout(state.dropdownCloseTimer);
            state.dropdownCloseTimer = window.setTimeout(() => {
                root.classList.remove("is-open");
                dropdown.classList.remove("is-open");
            }, 300);
        };

        root.addEventListener("mouseenter", open);
        root.addEventListener("mouseleave", close);

        root.addEventListener("focusin", open);
        root.addEventListener("focusout", (event) => {
            if (!root.contains(event.relatedTarget)) {
                close();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                root.classList.remove("is-open");
                dropdown.classList.remove("is-open");
            }
        });
    }

    function getFocusableElements(container) {
        return qsa(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
            container
        );
    }

    function initMobileMenu() {
        const menu = qs("[data-mobile-menu]");
        const panel = qs(".mobile-menu__panel", menu || document);
        const openButton = qs("[data-mobile-menu-open]");
        const closeButtons = qsa("[data-mobile-menu-close]");
        const menuLinks = qsa("[data-mobile-menu-link]");

        if (!menu || !panel || !openButton) return;

        function openMenu() {
            state.lastFocusedElement = document.activeElement;

            menu.classList.add("is-open");
            menu.setAttribute("aria-hidden", "false");
            document.body.classList.add("menu-open");

            const focusable = getFocusableElements(panel);
            if (focusable.length) {
                focusable[0].focus({ preventScroll: true });
            }
        }

        function closeMenu() {
            menu.classList.remove("is-open");
            menu.setAttribute("aria-hidden", "true");
            document.body.classList.remove("menu-open");

            if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
                state.lastFocusedElement.focus({ preventScroll: true });
            }
        }

        openButton.addEventListener("click", openMenu);

        closeButtons.forEach((button) => {
            button.addEventListener("click", closeMenu);
        });

        menuLinks.forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && menu.classList.contains("is-open")) {
                closeMenu();
            }

            if (event.key !== "Tab" || !menu.classList.contains("is-open")) return;

            const focusable = getFocusableElements(panel);
            if (!focusable.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });
    }

    function buildFooter() {
        return `
            <footer class="site-footer">
                <div class="site-footer__glow" aria-hidden="true"></div>

                <div class="container">
                    <div class="site-footer__top">
                        <div class="site-footer__brand">
                            ${buildLogo("site-logo--footer")}
                            <p>${CONFIG.footer.description}</p>

                            <div class="site-footer__contact-list">
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
                        </div>

                        <div class="site-footer__columns">
                            <div class="site-footer__column">
                                <h2>Services</h2>
                                <ul>
                                    ${CONFIG.services.map((service) => `
                                        <li>
                                            <a href="${service.href}">${service.title}</a>
                                        </li>
                                    `).join("")}
                                </ul>
                            </div>

                            <div class="site-footer__column">
                                <h2>Navigation</h2>
                                <ul>
                                    ${CONFIG.navigation.map((item) => `
                                        <li>
                                            <a href="${item.href}">${item.label}</a>
                                        </li>
                                    `).join("")}
                                </ul>
                            </div>

                            <div class="site-footer__column">
                                <h2>Legal</h2>
                                <ul>
                                    ${CONFIG.legalLinks.map((link) => `
                                        <li>
                                            <a href="${link.href}">${link.label}</a>
                                        </li>
                                    `).join("")}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="site-footer__disclaimer">
                        <i data-lucide="shield-check" aria-hidden="true"></i>
                        <p>${CONFIG.footer.disclaimer}</p>
                    </div>

                    <div class="site-footer__bottom">
                        <p>${CONFIG.footer.copyright}</p>
                        <p>${CONFIG.companyName} · ${CONFIG.contact.address.full}</p>
                    </div>
                </div>
            </footer>
        `;
    }

    function injectFooter() {
        let mount = qs(SELECTORS.footerMount);

        if (!mount) {
            mount = document.createElement("div");
            mount.setAttribute("data-site-footer", "");
            document.body.insertAdjacentElement("beforeend", mount);
        }

        mount.innerHTML = buildFooter();
    }

    function injectGlobalBusinessData() {
        const replacements = [
            ["[data-company-name]", CONFIG.companyName],
            ["[data-brand-name]", CONFIG.brandName],
            ["[data-brand-descriptor]", CONFIG.descriptor],
            ["[data-email-text]", CONFIG.contact.email],
            ["[data-address-text]", CONFIG.contact.address.full],
            ["[data-footer-description]", CONFIG.footer.description],
            ["[data-disclaimer]", CONFIG.footer.disclaimer]
        ];

        replacements.forEach(([selector, value]) => {
            qsa(selector).forEach((element) => {
                element.textContent = value;
            });
        });

        qsa("[data-email-link]").forEach((element) => {
            element.setAttribute("href", CONFIG.contact.emailHref);
            if (!element.textContent.trim()) {
                element.textContent = CONFIG.contact.email;
            }
        });

        qsa("[data-address-link]").forEach((element) => {
            element.setAttribute("href", CONFIG.contact.address.mapHref);
            element.setAttribute("target", "_blank");
            element.setAttribute("rel", "noopener noreferrer");

            if (!element.textContent.trim()) {
                element.textContent = CONFIG.contact.address.full;
            }
        });

        qsa("[data-phone-link]").forEach((element) => {
            if (CONFIG.contact.phone.isAvailable && CONFIG.contact.phone.href) {
                element.setAttribute("href", CONFIG.contact.phone.href);
                element.textContent = CONFIG.contact.phone.label || CONFIG.contact.phone.number;
                element.removeAttribute("aria-disabled");
            } else {
                element.removeAttribute("href");
                element.setAttribute("aria-disabled", "true");
                element.textContent = "Phone can be added later";
            }
        });
    }

    function buildCookieBanner() {
        return `
            <div class="cookie-banner" data-cookie-consent role="region" aria-label="Cookie consent">
                <div class="cookie-banner__text">
                    <strong>${CONFIG.cookieBanner.title}</strong>
                    <p>${CONFIG.cookieBanner.text}</p>
                    <div class="cookie-banner__links">
                        ${CONFIG.cookieBanner.links.map((link) => `
                            <a href="${link.href}">${link.label}</a>
                        `).join("")}
                    </div>
                </div>

                <div class="cookie-banner__actions">
                    <button class="btn btn--ghost" type="button" data-cookie-choice="declined">
                        ${CONFIG.cookieBanner.declineLabel}
                    </button>
                    <button class="btn btn--primary" type="button" data-cookie-choice="accepted">
                        ${CONFIG.cookieBanner.acceptLabel}
                    </button>
                </div>
            </div>
        `;
    }

    function initCookieBanner() {
        const existingChoice = window.localStorage.getItem(CONFIG.cookieBanner.storageKey);
        if (existingChoice) return;

        let mount = qs(SELECTORS.cookieMount);

        if (!mount) {
            mount = document.createElement("div");
            mount.setAttribute("data-cookie-banner", "");
            document.body.insertAdjacentElement("beforeend", mount);
        }

        mount.innerHTML = buildCookieBanner();

        qsa("[data-cookie-choice]", mount).forEach((button) => {
            button.addEventListener("click", () => {
                const value = button.getAttribute("data-cookie-choice");
                window.localStorage.setItem(CONFIG.cookieBanner.storageKey, value || "declined");
                mount.innerHTML = "";
            });
        });
    }

    function initFaqAccordions(scope = document) {
        const items = qsa("[data-faq-item]", scope);

        items.forEach((item, index) => {
            const button = qs("[data-faq-button]", item);
            const panel = qs("[data-faq-panel]", item);

            if (!button || !panel) return;

            const panelId = panel.id || `faq-panel-${index + 1}-${Math.random().toString(36).slice(2, 8)}`;
            panel.id = panelId;
            button.setAttribute("aria-controls", panelId);
            button.setAttribute("aria-expanded", "false");
            panel.setAttribute("hidden", "");

            button.addEventListener("click", () => {
                const isOpen = button.getAttribute("aria-expanded") === "true";

                button.setAttribute("aria-expanded", String(!isOpen));
                item.classList.toggle("is-open", !isOpen);

                if (isOpen) {
                    panel.setAttribute("hidden", "");
                } else {
                    panel.removeAttribute("hidden");
                }
            });
        });
    }

    function renderFaqList(container, faqItems) {
        if (!container || !Array.isArray(faqItems)) return;

        container.innerHTML = faqItems.map((item, index) => `
            <article class="faq-item" data-faq-item data-aos="fade-up" data-aos-delay="${index * 70}">
                <button class="faq-item__button" type="button" data-faq-button>
                    <span>${item.question}</span>
                    <i data-lucide="plus" aria-hidden="true"></i>
                </button>
                <div class="faq-item__panel" data-faq-panel>
                    <p>${item.answer}</p>
                </div>
            </article>
        `).join("");

        initFaqAccordions(container);
        refreshIcons();
    }

    function populateServiceSelect(select) {
        if (!select) return;

        select.innerHTML = `
            <option value="">${CONFIG.form.placeholders.service}</option>
            ${CONFIG.form.serviceOptions.map((service) => `
                <option value="${service}">${service}</option>
            `).join("")}
        `;
    }

    function setFieldError(field, message) {
        const group = field.closest(".form-field");
        if (!group) return;

        let error = qs(".form-field__error", group);

        if (!error) {
            error = document.createElement("small");
            error.className = "form-field__error";
            group.appendChild(error);
        }

        field.classList.add("is-invalid");
        field.setAttribute("aria-invalid", "true");
        error.textContent = message;
    }

    function clearFieldError(field) {
        const group = field.closest(".form-field");
        if (!group) return;

        const error = qs(".form-field__error", group);
        field.classList.remove("is-invalid");
        field.removeAttribute("aria-invalid");

        if (error) {
            error.textContent = "";
        }
    }

    function validateEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function initForms(scope = document) {
        const forms = qsa(SELECTORS.contactForm, scope);

        forms.forEach((form) => {
            const serviceSelect = qs('select[name="service"]', form);
            populateServiceSelect(serviceSelect);

            const status = qs("[data-form-status]", form);

            qsa("input, select, textarea", form).forEach((field) => {
                field.addEventListener("input", () => clearFieldError(field));
                field.addEventListener("change", () => clearFieldError(field));
            });

            form.addEventListener("submit", (event) => {
                event.preventDefault();

                let isValid = true;

                const fullName = qs('input[name="fullName"]', form);
                const email = qs('input[name="email"]', form);
                const service = qs('select[name="service"]', form);
                const message = qs('textarea[name="message"]', form);
                const consent = qs('input[name="consent"]', form);

                [fullName, email, service, message].forEach((field) => {
                    if (!field) return;

                    clearFieldError(field);

                    if (!sanitizeText(field.value)) {
                        isValid = false;
                        setFieldError(field, "This field is required.");
                    }
                });

                if (email && sanitizeText(email.value) && !validateEmail(email.value)) {
                    isValid = false;
                    setFieldError(email, "Please enter a valid email address.");
                }

                if (consent) {
                    clearFieldError(consent);

                    if (!consent.checked) {
                        isValid = false;
                        setFieldError(consent, "Please accept the policy consent.");
                    }
                }

                if (!status) return;

                status.className = "form-status";

                if (!isValid) {
                    status.textContent = CONFIG.form.errorMessage;
                    status.classList.add("is-error");
                    return;
                }

                status.textContent = CONFIG.form.successMessage;
                status.classList.add("is-success");

                form.reset();

                if (serviceSelect) {
                    populateServiceSelect(serviceSelect);
                }
            });
        });
    }

    function initSmoothAnchorOffset() {
        document.addEventListener("click", (event) => {
            const link = event.target.closest('a[href^="./index.html#"], a[href^="#"]');
            if (!link) return;

            const href = link.getAttribute("href");
            const hash = href.includes("#") ? href.substring(href.indexOf("#")) : href;

            if (!hash || hash === "#") return;

            const isSamePage = getCurrentFileName() === "index.html" || href.startsWith("#");
            if (!isSamePage) return;

            const target = qs(hash);
            if (!target) return;

            event.preventDefault();

            const header = qs("[data-header]");
            const headerHeight = header ? header.offsetHeight + 18 : 90;
            const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top,
                behavior: "smooth"
            });

            history.pushState(null, "", hash);
        });
    }

    function initAos() {
        if (window.AOS && typeof window.AOS.init === "function") {
            window.AOS.init({
                duration: 760,
                easing: "ease-out-cubic",
                once: true,
                offset: 80
            });
        }
    }

    function refreshIcons() {
        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    }

    function exposeHelpers() {
        window.PATNA = {
            config: CONFIG,
            getCurrentFileName,
            getServiceById,
            renderFaqList,
            initFaqAccordions,
            initForms,
            refreshIcons,
            getPathForAsset
        };
    }

    function boot() {
        applyPageMeta();
        injectFavicon();
        exposeHelpers();

        injectHeader();
        injectFooter();
        injectGlobalBusinessData();

        initCookieBanner();
        initFaqAccordions();
        initForms();
        initSmoothAnchorOffset();

        refreshIcons();
        initAos();

        document.documentElement.classList.add("is-ready");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot);
    } else {
        boot();
    }
})();
