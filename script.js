const CONFIG = {
  whatsappNumber: '13854432030',
  facebookUrl: 'https://www.facebook.com/share/19dqEYNvQx/?mibextid=wwXIfr',
  instagramUrl: 'https://www.instagram.com/videssupportit?cplk=cWJvaWRjaWw0NjY=',
  faq: [
    { question: '¿Qué servicios ofrecen?', answer: 'Soporte técnico, instalación de sistemas de seguridad, actualización de servidores y software, configuración de redes LAN e inalámbricas, y mantenimiento de equipos.' },
    { question: '¿Atienden empresas y particulares?', answer: 'Sí, a empresas privadas, entidades públicas y usuarios finales.' },
    { question: '¿Cómo solicito soporte?', answer: 'Escribe por WhatsApp indicando el servicio que necesitas, o usa el formulario de la página.' },
    { question: '¿Cuánto cuesta?', answer: 'Cada servicio se cotiza según el alcance. Escríbenos y te damos una cotización.' }
  ]
};

const translations = {
  en: {
    documentTitle: 'Vides Support IT | IT support across the USA',
    nav: { services: 'Services', whoWeServe: 'Who We Serve', contact: 'Contact', serviceLinks: ['Technical support', 'Security systems', 'Servers & software', 'Networks & equipment'], audienceLinks: ['Organizations & public entities', 'Individuals & home users'] },
    hero: {
      eyebrow: 'Reliable technology support',
      slides: [
        ['Protect your business, day and night', 'Installation of security systems for businesses and homes.'],
        ['Stay connected without interruptions', 'LAN and wireless networks configured for reliable daily work.'],
        ['Help when your technology needs it', 'Practical answers for the problems that slow your work down.']
      ],
      lede: 'Practical IT support for businesses, public entities, and people across the United States.',
      actions: ['Request Support', 'Explore services'],
      categories: ['Technical support', 'Security systems', 'Networks & servers', 'Equipment care']
    },
    audience: { eyebrow: 'Who we support', title: 'Who we support', subtitle: 'The right level of support for real-world needs.', titles: ['Organizations & public entities', 'Individuals & home users'], descriptions: ['Support for private businesses and public entities that need their technology to stay clear, connected, and dependable.', 'Approachable help for home technology, personal equipment, networks, and security systems.'], actions: ['Start a conversation', 'Request support'], messages: ['Organization or public entity support', 'Individual or home user support'] },
    services: { eyebrow: 'What we do', title: 'What we do', subtitle: 'Technology support that meets you where you are.', titles: ['Technical support', 'Security systems', 'Server & software updates', 'LAN & wireless networks', 'Equipment maintenance'], descriptions: ['Practical help for technology issues, troubleshooting, and setup questions.', 'Installation support for security systems used to monitor a property.', 'Updates and maintenance for the systems your team depends on.', 'Configuration support for local and wireless networks that stay connected.', 'Focused maintenance support for the equipment you rely on.'], messages: ['Technical support', 'Security systems', 'Server and software updates', 'LAN and wireless networks', 'Equipment maintenance'], request: 'Request this service' },
    contact: { eyebrow: 'Let’s make it work', title: 'Need a clear next step?', description: 'Send a message on WhatsApp and tell us what you need help with. Freddy Vides will help route the conversation.', action: 'Request Support' },
    footer: { description: 'Technology support, security systems, and networks for customers across the United States.', explore: 'Explore', connect: 'Connect', links: ['Services', 'Who we support', 'Contact'], rights: 'All rights reserved.', location: 'Based in Utah · Serving the USA' }
  },
  es: {
    documentTitle: 'Vides Support IT | Soporte informático en Estados Unidos',
    nav: { services: 'Servicios', whoWeServe: 'A quién ayudamos', contact: 'Contacto', serviceLinks: ['Soporte técnico', 'Sistemas de seguridad', 'Servidores y software', 'Redes y equipos'], audienceLinks: ['Organizaciones y entidades públicas', 'Personas y usuarios domésticos'] },
    hero: {
      eyebrow: 'Soporte tecnológico confiable',
      slides: [['Protege tu negocio día y noche', 'Instalación de sistemas de seguridad para empresas y hogares.'], ['Mantente conectado sin interrupciones', 'Redes LAN e inalámbricas configuradas para el trabajo diario.'], ['Ayuda cuando tu tecnología lo necesita', 'Respuestas prácticas para los problemas que ralentizan tu trabajo.']],
      lede: 'Soporte informático práctico para empresas, entidades públicas y personas en todo Estados Unidos.',
      actions: ['Solicitar soporte', 'Ver servicios'],
      categories: ['Soporte técnico', 'Sistemas de seguridad', 'Redes y servidores', 'Mantenimiento de equipos']
    },
    audience: { eyebrow: 'A quién ayudamos', title: 'A quién ayudamos', subtitle: 'El nivel de soporte adecuado para necesidades reales.', titles: ['Organizaciones y entidades públicas', 'Personas y usuarios domésticos'], descriptions: ['Soporte para empresas privadas y entidades públicas que necesitan tecnología clara, conectada y confiable.', 'Ayuda cercana para tecnología del hogar, equipos personales, redes y sistemas de seguridad.'], actions: ['Iniciar conversación', 'Solicitar soporte'], messages: ['Soporte para organizaciones o entidades públicas', 'Soporte para personas o usuarios domésticos'] },
    services: { eyebrow: 'Lo que hacemos', title: 'Lo que hacemos', subtitle: 'Soporte tecnológico que se adapta a tu realidad.', titles: ['Soporte técnico', 'Sistemas de seguridad', 'Actualización de servidores y software', 'Redes LAN e inalámbricas', 'Mantenimiento de equipos'], descriptions: ['Ayuda práctica para problemas tecnológicos, diagnóstico y configuración.', 'Apoyo en la instalación de sistemas de seguridad para una propiedad.', 'Actualizaciones y mantenimiento para los sistemas de tu equipo.', 'Configuración de redes locales e inalámbricas que necesitan conexión.', 'Mantenimiento enfocado para los equipos en los que confías.'], messages: ['Soporte técnico', 'Sistemas de seguridad', 'Actualización de servidores y software', 'Redes LAN e inalámbricas', 'Mantenimiento de equipos'], request: 'Solicitar este servicio' },
    contact: { eyebrow: 'Hagámoslo funcionar', title: '¿Necesitas un siguiente paso claro?', description: 'Envíanos un mensaje por WhatsApp y cuéntanos qué necesitas. Freddy Vides ayudará a orientar la conversación.', action: 'Solicitar soporte' },
    footer: { description: 'Soporte informático, sistemas de seguridad y redes para clientes en todo Estados Unidos.', explore: 'Explorar', connect: 'Conectar', links: ['Servicios', 'A quién ayudamos', 'Contacto'], rights: 'Todos los derechos reservados.', location: 'Basados en Utah · Atendemos todo EE. UU.' }
  }
};

(() => {
  let activeLanguage = 'en';
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  /* Navigation */
  const header = $('[data-header]'); const floatingNav = $('.floating-nav', header); const menuToggle = $('.menu-toggle', header); const navMenu = $('#primary-menu'); const activePill = $('.nav-active-pill'); const navTabs = $$('[data-nav-tab]', navMenu); const mobileQuery = window.matchMedia('(max-width: 767px)'); let activeTab = 'who-we-support';
  const isMobile = () => mobileQuery.matches;
  const findTab = (name) => navTabs.find((tab) => tab.dataset.navTab === name);
  const closeSubmenus = (except = null) => $$('.nav-item.is-open', navMenu).forEach((item) => { if (item !== except) { item.classList.remove('is-open'); $('.nav-submenu-toggle', item)?.setAttribute('aria-expanded', 'false'); } });
  const moveActivePill = (tab, visible = true) => { if (!activePill || !tab || isMobile()) return; activePill.style.left = `${tab.offsetLeft}px`; activePill.style.top = `${tab.offsetTop}px`; activePill.style.width = `${tab.offsetWidth}px`; activePill.style.height = `${tab.offsetHeight}px`; activePill.classList.toggle('is-visible', visible); };
  const setActiveTab = (name) => { activeTab = name; navTabs.forEach((tab) => tab.classList.toggle('is-active', tab.dataset.navTab === name)); moveActivePill(findTab(name)); };
  const setMobileMenu = (open) => { if (!floatingNav || !menuToggle) return; floatingNav.classList.toggle('is-open', open); header?.classList.toggle('is-open', open); menuToggle.setAttribute('aria-expanded', String(open)); if (!open) closeSubmenus(); };
  if (floatingNav && menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => setMobileMenu(!floatingNav.classList.contains('is-open')));
    navTabs.forEach((tab) => { tab.addEventListener('mouseenter', () => moveActivePill(tab)); tab.addEventListener('focusin', () => moveActivePill(tab)); tab.addEventListener('mouseleave', () => moveActivePill(findTab(activeTab))); tab.addEventListener('focusout', (event) => { if (!tab.contains(event.relatedTarget)) moveActivePill(findTab(activeTab)); }); });
    $$('.nav-submenu-toggle', navMenu).forEach((button) => button.addEventListener('click', () => { const item = button.closest('.nav-item'); if (!item) return; setActiveTab(item.dataset.navTab); if (!isMobile()) return; const shouldOpen = !item.classList.contains('is-open'); closeSubmenus(item); item.classList.toggle('is-open', shouldOpen); button.setAttribute('aria-expanded', String(shouldOpen)); }));
    $$('a', navMenu).forEach((link) => link.addEventListener('click', () => { const parent = link.closest('[data-nav-tab]'); if (parent) setActiveTab(parent.dataset.navTab); if (isMobile()) setMobileMenu(false); }));
    document.addEventListener('click', (event) => { if (isMobile() && floatingNav.classList.contains('is-open') && !floatingNav.contains(event.target)) setMobileMenu(false); });
    document.addEventListener('keydown', (event) => { if (event.key !== 'Escape') return; closeSubmenus(); if (isMobile() && floatingNav.classList.contains('is-open')) { setMobileMenu(false); menuToggle.focus(); } });
    window.addEventListener('resize', () => { if (isMobile()) activePill?.classList.remove('is-visible'); else { setMobileMenu(false); moveActivePill(findTab(activeTab)); } });
    setActiveTab(activeTab);
  }
  const updateNavContrast = () => floatingNav?.classList.toggle('is-scrolled', window.scrollY > 12); updateNavContrast(); window.addEventListener('scroll', updateNavContrast, { passive: true });
  const sectionToTab = { 'who-we-support': 'who-we-support', services: 'services', contact: 'contact' };
  const sections = Object.keys(sectionToTab).map((id) => document.getElementById(id)).filter(Boolean);
  if ('IntersectionObserver' in window) new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) setActiveTab(sectionToTab[visible.target.id]); }, { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.5] }).observe(sections[0]);
  if ('IntersectionObserver' in window && sections.length > 1) { const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) setActiveTab(sectionToTab[visible.target.id]); }, { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.5] }); sections.slice(1).forEach((section) => observer.observe(section)); }

  /* Hero carousel */
  const hero = $('.hero'); const heroSlides = $$('[data-hero-slide]', hero); const heroTitle = $('#hero-title'); const heroSubtitle = $('[data-hero-subtitle]', hero); const heroDots = $('[data-hero-dots]', hero); const heroToggle = $('[data-hero-toggle]', hero); const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)'); let heroIndex = 0; let heroTimer; let heroTouchTimer; let heroPaused = false; let heroHovered = false; let heroFocused = false; let heroTouched = false;
  const heroIsPaused = () => heroPaused || heroFocused || (finePointerQuery.matches && heroHovered) || heroTouched || reducedMotionQuery.matches;
  const scheduleHero = () => { window.clearTimeout(heroTimer); if (!hero || heroIsPaused()) return; heroTimer = window.setTimeout(() => setHeroSlide(heroIndex + 1), 4000); };
  const releaseHeroTouchPause = () => { heroTouched = false; scheduleHero(); };
  const setHeroSlide = (nextIndex) => { if (!heroSlides.length) return; heroIndex = (nextIndex + heroSlides.length) % heroSlides.length; const slideCopy = translations[activeLanguage].hero.slides[heroIndex]; heroSlides.forEach((slide, index) => { const active = index === heroIndex; slide.classList.toggle('is-active', active); slide.setAttribute('aria-hidden', String(!active)); }); if (heroTitle) heroTitle.textContent = slideCopy[0]; if (heroSubtitle) heroSubtitle.textContent = slideCopy[1]; const dynamicCopy = $('.hero-copy__dynamic'); if (dynamicCopy && !reducedMotionQuery.matches) { dynamicCopy.classList.remove('is-changing'); requestAnimationFrame(() => dynamicCopy.classList.add('is-changing')); } $$('.carousel-dot', heroDots).forEach((dot, index) => { dot.classList.toggle('is-active', index === heroIndex); dot.setAttribute('aria-current', index === heroIndex ? 'true' : 'false'); }); scheduleHero(); };
  if (hero && heroSlides.length) {
    heroSlides.forEach((_, index) => { const dot = document.createElement('button'); dot.className = `carousel-dot${index === 0 ? ' is-active' : ''}`; dot.type = 'button'; dot.setAttribute('aria-label', `Go to slide ${index + 1}`); dot.setAttribute('aria-current', String(index === 0)); dot.addEventListener('click', () => setHeroSlide(index)); heroDots.appendChild(dot); });
    heroToggle?.addEventListener('click', () => { heroPaused = !heroPaused; heroToggle.setAttribute('aria-pressed', String(heroPaused)); heroToggle.setAttribute('aria-label', heroPaused ? 'Play carousel' : 'Pause carousel'); heroToggle.textContent = heroPaused ? '▶' : 'Ⅱ'; scheduleHero(); });
    hero.addEventListener('pointerenter', () => { if (!finePointerQuery.matches) return; heroHovered = true; scheduleHero(); }); hero.addEventListener('pointerleave', () => { if (!finePointerQuery.matches) return; heroHovered = false; scheduleHero(); }); hero.addEventListener('focusin', () => { heroFocused = true; scheduleHero(); }); hero.addEventListener('focusout', (event) => { if (!hero.contains(event.relatedTarget)) { heroFocused = false; scheduleHero(); } }); hero.addEventListener('touchstart', () => { heroTouched = true; window.clearTimeout(heroTouchTimer); heroTouchTimer = window.setTimeout(releaseHeroTouchPause, 4000); scheduleHero(); }, { passive: true });
    let swipeStart = 0; hero.addEventListener('pointerdown', (event) => { swipeStart = event.clientX; }); hero.addEventListener('pointerup', (event) => { const distance = event.clientX - swipeStart; if (Math.abs(distance) > 45) setHeroSlide(heroIndex + (distance < 0 ? 1 : -1)); });
    setHeroSlide(0);
  }
  reducedMotionQuery.addEventListener?.('change', () => { if (reducedMotionQuery.matches) { window.clearTimeout(heroTimer); } else { scheduleHero(); } });

  /* REVEAL: one observer, one-time section entrances, hero excluded. */
  const revealSections = $$('main section:not(.hero)');
  const revealTargets = [];
  const isInitiallyVisible = (element) => { const box = element.getBoundingClientRect(); return box.top < window.innerHeight && box.bottom > 0; };
  revealSections.forEach((section) => {
    const elements = [section, $('.section-heading', section), $('.section-subtitle', section), ...$$('.audience-card, .service-card, .services-controls', section)].filter(Boolean);
    elements.forEach((element, index) => {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-index', Math.min(index, 3));
      revealTargets.push(element);
    });
  });
  if (revealTargets.length) {
    document.documentElement.classList.add('js-reveal');
    const initiallyVisible = new Set(revealTargets.filter(isInitiallyVisible));
    initiallyVisible.forEach((element) => element.classList.add('is-visible'));
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.filter((entry) => entry.isIntersecting).forEach((entry) => { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); });
      }, { threshold: 0.15 });
      revealTargets.filter((element) => !initiallyVisible.has(element)).forEach((element) => revealObserver.observe(element));
    } else revealTargets.forEach((element) => element.classList.add('is-visible'));
  }

  /* Services carousel */
  const servicesCarousel = $('[data-services-carousel]'); const serviceTrack = $('[data-services-track]', servicesCarousel); const serviceSlides = $$('[data-service-slide]', servicesCarousel); const serviceDots = $('[data-services-dots]', servicesCarousel); const serviceVideos = $$('video', servicesCarousel); let serviceIndex = 0; let serviceVisible = 1; let servicesInView = false;
  const getServiceVisible = () => window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const syncServiceVideos = () => { serviceVideos.forEach((video) => { const slide = video.closest('[data-service-slide]'); const slideIndex = serviceSlides.indexOf(slide); const active = servicesInView && !reducedMotionQuery.matches && slideIndex >= serviceIndex && slideIndex < serviceIndex + serviceVisible; if (active) video.play().catch(() => {}); else video.pause(); }); };
  const updateServicesCarousel = () => { if (!servicesCarousel || !serviceTrack) return; serviceVisible = getServiceVisible(); servicesCarousel.style.setProperty('--service-visible', serviceVisible); const maxIndex = Math.max(0, serviceSlides.length - serviceVisible); serviceIndex = Math.max(0, Math.min(serviceIndex, maxIndex)); serviceTrack.style.transform = `translateX(-${serviceIndex * (100 / serviceVisible)}%)`; serviceSlides.forEach((slide, index) => { const hidden = index < serviceIndex || index >= serviceIndex + serviceVisible; slide.setAttribute('aria-hidden', String(hidden)); slide.inert = hidden; }); $$('.carousel-dot', serviceDots).forEach((dot, index) => { dot.classList.toggle('is-active', index === serviceIndex); dot.setAttribute('aria-current', index === serviceIndex ? 'true' : 'false'); }); syncServiceVideos(); };
  if (servicesCarousel && serviceSlides.length) {
    serviceSlides.forEach((_, index) => { const dot = document.createElement('button'); dot.className = `carousel-dot${index === 0 ? ' is-active' : ''}`; dot.type = 'button'; dot.setAttribute('aria-label', `Go to service ${index + 1}`); dot.setAttribute('aria-current', String(index === 0)); dot.addEventListener('click', () => { serviceIndex = index; updateServicesCarousel(); }); serviceDots.appendChild(dot); });
    $('[data-services-prev]', servicesCarousel)?.addEventListener('click', () => { serviceIndex -= 1; updateServicesCarousel(); }); $('[data-services-next]', servicesCarousel)?.addEventListener('click', () => { serviceIndex += 1; updateServicesCarousel(); }); servicesCarousel.addEventListener('keydown', (event) => { if (event.key === 'ArrowLeft') { serviceIndex -= 1; updateServicesCarousel(); } if (event.key === 'ArrowRight') { serviceIndex += 1; updateServicesCarousel(); } });
    let serviceSwipeStart = 0; servicesCarousel.addEventListener('pointerdown', (event) => { if (!event.target.closest('a,button,video')) serviceSwipeStart = event.clientX; }); servicesCarousel.addEventListener('pointerup', (event) => { if (!serviceSwipeStart || event.target.closest('video')) { serviceSwipeStart = 0; return; } const distance = event.clientX - serviceSwipeStart; if (Math.abs(distance) > 45) serviceIndex += distance < 0 ? 1 : -1; serviceSwipeStart = 0; updateServicesCarousel(); }); window.addEventListener('resize', updateServicesCarousel); updateServicesCarousel();
    if ('IntersectionObserver' in window) new IntersectionObserver(([entry]) => { servicesInView = entry.isIntersecting; syncServiceVideos(); }, { threshold: 0.25 }).observe(servicesCarousel);
  }
  reducedMotionQuery.addEventListener?.('change', () => { if (reducedMotionQuery.matches) serviceVideos.forEach((video) => { video.pause(); video.currentTime = 0; }); syncServiceVideos(); });

  const setEyebrow = (selector, text) => { const element = $(selector); if (!element) return; const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE); if (textNode) textNode.nodeValue = ` ${text}`; };
  const setCtaText = (button, text) => { if (!button) return; button.dataset.text = text; button.setAttribute('aria-label', text); $('.cta-button__label--front', button)?.replaceChildren(document.createTextNode(text)); $('.cta-button__label--hover', button)?.replaceChildren(document.createTextNode(text)); };
  const updateWhatsAppLinks = (language) => {
    const copy = translations[language];
    $$('.services-carousel .js-service-link').forEach((link, index) => { const service = copy.services.messages[index]; link.dataset.service = service; link.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(language === 'es' ? `Hola Vides Support IT, necesito ayuda con: ${service}.` : `Hello Vides Support IT, I would like support with: ${service}.`)}`; });
    $$('.audience-grid .js-service-link').forEach((link, index) => { const service = copy.audience.messages[index]; link.dataset.service = service; link.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(language === 'es' ? `Hola Vides Support IT, necesito ayuda con: ${service}.` : `Hello Vides Support IT, I would like support with: ${service}.`)}`; });
  };
  const applyLanguage = (language) => {
    activeLanguage = language === 'es' ? 'es' : 'en'; const copy = translations[activeLanguage]; document.documentElement.lang = activeLanguage; document.title = copy.documentTitle; navMenu?.setAttribute('aria-label', activeLanguage === 'es' ? 'Navegación principal' : 'Primary navigation'); $('[data-language-switch]')?.setAttribute('aria-label', activeLanguage === 'es' ? 'Selector de idioma' : 'Language selector');
    const navButtons = $$('.nav-submenu-toggle', navMenu); if (navButtons[0]) navButtons[0].firstChild.nodeValue = copy.nav.services; if (navButtons[1]) navButtons[1].firstChild.nodeValue = copy.nav.whoWeServe; $('.nav-contact', navMenu).textContent = copy.nav.contact; $$('#services-submenu a').forEach((link, index) => { link.textContent = copy.nav.serviceLinks[index]; }); $$('#audience-submenu a').forEach((link, index) => { link.textContent = copy.nav.audienceLinks[index]; });
    setEyebrow('.hero .eyebrow', copy.hero.eyebrow); $('.hero-lede').textContent = copy.hero.lede; $$('.hero-bottom span').forEach((item, index) => { item.textContent = copy.hero.categories[index]; }); $$('.hero-actions .cta-button').forEach((button, index) => setCtaText(button, copy.hero.actions[index]));
    setEyebrow('.audience-section .eyebrow', copy.audience.eyebrow); $('#audience-title').textContent = copy.audience.title; $('.audience-heading .section-subtitle').textContent = copy.audience.subtitle; $$('.audience-card h3').forEach((item, index) => { item.textContent = copy.audience.titles[index]; }); $$('.audience-card p').forEach((item, index) => { item.textContent = copy.audience.descriptions[index]; }); $$('.audience-card .js-service-link').forEach((button, index) => setCtaText(button, copy.audience.actions[index]));
    setEyebrow('.services-section .eyebrow', copy.services.eyebrow); $('#services-title').textContent = copy.services.title; $('.services-section .section-subtitle').textContent = copy.services.subtitle; $$('.service-card h3').forEach((item, index) => { item.textContent = copy.services.titles[index]; }); $$('.service-card p').forEach((item, index) => { item.textContent = copy.services.descriptions[index]; }); $$('.services-carousel .js-service-link').forEach((button) => setCtaText(button, copy.services.request));
    setEyebrow('.contact-section .eyebrow', copy.contact.eyebrow); $('#contact-title').textContent = copy.contact.title; $('.contact-inner > div:first-child > p:last-child').textContent = copy.contact.description; setCtaText($('.contact-actions .cta-button'), copy.contact.action); $('.footer-brand p').textContent = copy.footer.description; $$('.footer-label')[0].textContent = copy.footer.explore; $$('.footer-label')[1].textContent = copy.footer.connect; $$('.footer-main .footer-column:nth-child(2) a').forEach((link, index) => { link.textContent = copy.footer.links[index]; }); const footerBottom = $$('.footer-bottom > span'); if (footerBottom[0]) footerBottom[0].innerHTML = `© <span data-year>${new Date().getFullYear()}</span> Vides Support IT. ${copy.footer.rights}`; if (footerBottom[1]) footerBottom[1].textContent = copy.footer.location;
    $$('[data-language]').forEach((button) => { const selected = button.dataset.language === activeLanguage; button.classList.toggle('is-active', selected); button.setAttribute('aria-pressed', String(selected)); }); updateWhatsAppLinks(activeLanguage); setHeroSlide(heroIndex);
  };
  $$('[data-language]').forEach((button) => button.addEventListener('click', () => { applyLanguage(button.dataset.language); if (isMobile()) setMobileMenu(false); })); applyLanguage('en');
  const year = $('[data-year]'); if (year) year.textContent = new Date().getFullYear();

  /* Fixed FAQ/contact widget */
  const contactWidget = $('[data-contact-widget]');
  if (contactWidget) {
    const faqPanel = $('[data-faq-panel]', contactWidget); const faqToggle = $('[data-faq-toggle]', contactWidget); const faqClose = $('[data-faq-close]', contactWidget); const faqBack = $('[data-faq-back]', contactWidget); const faqList = $('[data-faq-list]', contactWidget); const faqQuestions = $('[data-faq-questions]', contactWidget); const faqAnswer = $('[data-faq-answer]', contactWidget); const faqAnswerTitle = $('[data-faq-answer-title]', contactWidget); const faqAnswerCopy = $('[data-faq-answer-copy]', contactWidget); const faqWhatsApp = $('[data-faq-whatsapp]', contactWidget); const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}`;
    const setFaqView = (showAnswer, item = null) => { faqList.hidden = showAnswer; faqAnswer.hidden = !showAnswer; if (showAnswer && item) { faqAnswerTitle.textContent = item.question; faqAnswerCopy.textContent = item.answer; faqBack.focus(); } };
    const setFaqOpen = (open) => { faqPanel.hidden = !open; faqToggle.setAttribute('aria-expanded', String(open)); if (open) { setFaqView(false); faqPanel.focus(); } else { setFaqView(false); faqToggle.focus(); } };
    faqQuestions.replaceChildren(...CONFIG.faq.map((item) => { const button = document.createElement('button'); button.className = 'faq-panel__question'; button.type = 'button'; button.textContent = item.question; button.addEventListener('click', () => setFaqView(true, item)); return button; }));
    faqWhatsApp.href = `${whatsappUrl}?text=${encodeURIComponent('Hola, tengo una pregunta sobre sus servicios')}`; $$('.contact-action[href^="https://wa.me"]', contactWidget).forEach((link) => { link.href = whatsappUrl; });
    $$('[data-config-social]', contactWidget).forEach((link) => { const url = CONFIG[`${link.dataset.configSocial}Url`]; if (url) { link.href = url; link.hidden = false; } else link.hidden = true; });
    faqToggle.addEventListener('click', () => setFaqOpen(faqPanel.hidden)); faqClose.addEventListener('click', () => setFaqOpen(false)); faqBack.addEventListener('click', () => { setFaqView(false); faqPanel.focus(); });
    document.addEventListener('click', (event) => { if (!faqPanel.hidden && !contactWidget.contains(event.target)) setFaqOpen(false); }); document.addEventListener('keydown', (event) => { if (event.key !== 'Escape') return; $$('.contact-action', contactWidget).forEach((action) => action.classList.add('is-tooltip-dismissed')); if (!faqPanel.hidden) setFaqOpen(false); });
  }
})();
