const CONFIG = {
  whatsappNumber: '13854432030',
  facebookUrl: 'https://www.facebook.com/share/19dqEYNvQx/?mibextid=wwXIfr',
  instagramUrl: 'https://www.instagram.com/videssupportit?cplk=cWJvaWRjaWw0NjY=',
  faq: [
    {
      question: '¿Qué servicios ofrecen?',
      answer: 'Soporte técnico, instalación de sistemas de seguridad, actualización de servidores y software, configuración de redes LAN e inalámbricas, y mantenimiento de equipos.'
    },
    {
      question: '¿Atienden empresas y particulares?',
      answer: 'Sí, a empresas privadas, entidades públicas y usuarios finales.'
    },
    {
      question: '¿Cómo solicito soporte?',
      answer: 'Escribe por WhatsApp indicando el servicio que necesitas, o usa el formulario de la página.'
    },
    {
      question: '¿Cuánto cuesta?',
      answer: 'Cada servicio se cotiza según el alcance. Escríbenos y te damos una cotización.'
    },
    {
      question: '¿En qué zona prestan el servicio?',
      answer: '[PLACEHOLDER: zona de cobertura, pendiente de confirmar].'
    },
    {
      question: '¿Cuál es el horario de atención?',
      answer: '[PLACEHOLDER: horario, pendiente de confirmar].'
    }
  ]
};

// Interactive grid configuration: rows, columns, cell size, wave delay, pulse duration, and base opacity.
const INTERACTIVE_GRID_CONFIG = {
  desktop: { rows: 6, columns: 18, cellSize: 52 },
  mobile: { rows: 4, columns: 10, cellSize: 40 },
  waveDelay: 55,
  baseDuration: 200,
  distanceDuration: 80,
  maxDuration: 1500,
  baseOpacity: 0.4,
  hoverOpacity: 0.8
};

(() => {
  const gridHost = document.querySelector('[data-interactive-grid]');
  const gridSection = gridHost?.closest('[data-grid-scope]');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let gridCells = [];
  let gridResizeTimer;

  const clearCellPulse = (cell) => {
    if (cell.cleanupTimer) window.clearTimeout(cell.cleanupTimer);
    cell.element.classList.remove('is-pulsing');
    cell.element.style.transitionDelay = '';
    cell.element.style.animationDelay = '';
    cell.element.style.removeProperty('--grid-pulse-duration');
  };

  const triggerGridWave = (clickedRow, clickedColumn) => {
    if (!gridHost || reducedMotionQuery.matches || gridHost.classList.contains('is-paused')) return;

    gridCells.forEach((cell) => {
      clearCellPulse(cell);
      const distance = Math.hypot(cell.row - clickedRow, cell.column - clickedColumn);
      const delay = distance * INTERACTIVE_GRID_CONFIG.waveDelay;
      const duration = Math.min(
        INTERACTIVE_GRID_CONFIG.baseDuration + distance * INTERACTIVE_GRID_CONFIG.distanceDuration,
        INTERACTIVE_GRID_CONFIG.maxDuration
      );

      cell.element.style.transitionDelay = `${delay}ms`;
      cell.element.style.animationDelay = `${delay}ms`;
      cell.element.style.setProperty('--grid-pulse-duration', `${duration}ms`);
      cell.element.classList.add('is-pulsing');
      cell.cleanupTimer = window.setTimeout(() => clearCellPulse(cell), delay + duration + 60);
    });
  };

  const buildInteractiveGrid = () => {
    if (!gridHost) return;

    const isMobile = window.innerWidth < 768;
    const gridSize = isMobile ? INTERACTIVE_GRID_CONFIG.mobile : INTERACTIVE_GRID_CONFIG.desktop;
    gridCells.forEach(clearCellPulse);
    gridCells = [];
    gridHost.replaceChildren();
    gridHost.style.setProperty('--grid-columns', gridSize.columns);
    gridHost.style.setProperty('--grid-cell-size', `${gridSize.cellSize}px`);
    gridHost.style.opacity = INTERACTIVE_GRID_CONFIG.baseOpacity;

    const fragment = document.createDocumentFragment();
    for (let row = 0; row < gridSize.rows; row += 1) {
      for (let column = 0; column < gridSize.columns; column += 1) {
        const element = document.createElement('span');
        element.className = 'interactive-grid__cell';
        element.dataset.row = row;
        element.dataset.column = column;
        const cell = { element, row, column, cleanupTimer: null };
        element.addEventListener('click', () => triggerGridWave(row, column));
        gridCells.push(cell);
        fragment.appendChild(element);
      }
    }
    gridHost.appendChild(fragment);
  };

  if (gridHost) {
    buildInteractiveGrid();
    window.addEventListener('resize', () => {
      window.clearTimeout(gridResizeTimer);
      gridResizeTimer = window.setTimeout(buildInteractiveGrid, 150);
    });

    if ('IntersectionObserver' in window && gridSection) {
      const gridVisibilityObserver = new IntersectionObserver(([entry]) => {
        gridHost.classList.toggle('is-paused', !entry.isIntersecting);
      }, { threshold: 0 });
      gridVisibilityObserver.observe(gridSection);
    }
  }

  const header = document.querySelector('[data-header]');
  const floatingNav = header?.querySelector('.floating-nav');
  const menuToggle = header?.querySelector('.menu-toggle');
  const navMenu = header?.querySelector('#primary-menu');
  const activePill = navMenu?.querySelector('.nav-active-pill');
  const navTabs = navMenu ? [...navMenu.querySelectorAll('[data-nav-tab]')] : [];
  const year = document.querySelector('[data-year]');
  const mobileQuery = window.matchMedia('(max-width: 767px)');
  let activeTab = 'services';

  const isMobile = () => mobileQuery.matches;

  if (year) year.textContent = new Date().getFullYear();

  const findTab = (tabName) => navTabs.find((tab) => tab.dataset.navTab === tabName);

  const closeSubmenus = (except = null) => {
    navMenu?.querySelectorAll('.nav-item.is-open').forEach((item) => {
      if (item !== except) {
        item.classList.remove('is-open');
        item.querySelector('.nav-submenu-toggle')?.setAttribute('aria-expanded', 'false');
      }
    });
  };

  const moveActivePill = (tab, visible = true) => {
    if (!activePill || !tab || isMobile()) return;

    activePill.style.left = `${tab.offsetLeft}px`;
    activePill.style.top = `${tab.offsetTop}px`;
    activePill.style.width = `${tab.offsetWidth}px`;
    activePill.style.height = `${tab.offsetHeight}px`;
    activePill.classList.toggle('is-visible', visible);
  };

  const setActiveTab = (tabName) => {
    activeTab = tabName;
    navTabs.forEach((tab) => tab.classList.toggle('is-active', tab.dataset.navTab === tabName));
    moveActivePill(findTab(tabName));
  };

  const setMobileMenu = (open) => {
    if (!floatingNav || !menuToggle) return;

    floatingNav.classList.toggle('is-open', open);
    header?.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    if (!open) closeSubmenus();
  };

  if (floatingNav && menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      setMobileMenu(!floatingNav.classList.contains('is-open'));
    });

    navTabs.forEach((tab) => {
      tab.addEventListener('mouseenter', () => {
        tab.classList.remove('is-escape-closed');
        moveActivePill(tab);
      });
      tab.addEventListener('focusin', () => {
        tab.classList.remove('is-escape-closed');
        moveActivePill(tab);
      });
      tab.addEventListener('mouseleave', () => moveActivePill(findTab(activeTab)));
      tab.addEventListener('focusout', (event) => {
        if (!tab.contains(event.relatedTarget)) moveActivePill(findTab(activeTab));
      });
    });

    navMenu.querySelectorAll('.nav-submenu-toggle').forEach((button) => {
      button.addEventListener('click', () => {
        const item = button.closest('.nav-item');
        if (!item) return;

        item.classList.remove('is-escape-closed');
        setActiveTab(item.dataset.navTab);
        if (!isMobile()) return;

        const shouldOpen = !item.classList.contains('is-open');
        closeSubmenus(item);
        item.classList.toggle('is-open', shouldOpen);
        button.setAttribute('aria-expanded', String(shouldOpen));
      });
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        const parentTab = link.closest('[data-nav-tab]');
        if (parentTab) setActiveTab(parentTab.dataset.navTab);
        if (isMobile()) setMobileMenu(false);
      });
    });

    document.addEventListener('click', (event) => {
      if (isMobile() && floatingNav.classList.contains('is-open') && !floatingNav.contains(event.target)) {
        setMobileMenu(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;

      closeSubmenus();
      navMenu.querySelectorAll('.nav-item').forEach((item) => item.classList.add('is-escape-closed'));
      if (isMobile() && floatingNav.classList.contains('is-open')) {
        setMobileMenu(false);
        menuToggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (isMobile()) {
        activePill?.classList.remove('is-visible');
      } else {
        setMobileMenu(false);
        moveActivePill(findTab(activeTab));
      }
    });

    setActiveTab(activeTab);
  }

  const updateNavContrast = () => {
    floatingNav?.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  updateNavContrast();
  window.addEventListener('scroll', updateNavContrast, { passive: true });

  const sectionToTab = {
    services: 'services',
    'who-we-support': 'who-we-support',
    contact: 'contact'
  };

  const sections = Object.keys(sectionToTab)
    .map((sectionId) => document.getElementById(sectionId))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection) setActiveTab(sectionToTab[visibleSection.target.id]);
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.5] });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  document.querySelectorAll('.js-service-link').forEach((link) => {
    const service = link.dataset.service;
    if (!service) return;

    const message = `Hello Vides Support IT, I would like support with: ${service}.`;
    link.href = `https://wa.me/13854432030?text=${encodeURIComponent(message)}`;
  });

  document.querySelectorAll('.cta-button[data-text]').forEach((button) => {
    const text = button.dataset.text;
    const frontLabel = button.querySelector('.cta-button__label--front');
    const hoverLabel = button.querySelector('.cta-button__label--hover');

    if (frontLabel) frontLabel.textContent = text;
    if (hoverLabel) hoverLabel.textContent = text;
    button.setAttribute('aria-label', text);
  });

  const translations = {
    en: {
      documentTitle: 'Vides Support IT | IT support across the USA',
      nav: {
        services: 'Services',
        whoWeServe: 'Who We Serve',
        contact: 'Contact',
        serviceLinks: ['Technical support', 'Security systems', 'Servers & software', 'Networks & equipment'],
        audienceLinks: ['Organizations & public entities', 'Individuals & home users']
      },
      hero: {
        eyebrow: 'Reliable technology support',
        title: 'Keep your systems <em>secure</em>, connected, and ready.',
        lede: 'Practical IT support for businesses, public entities, and people across the United States.',
        actions: ['Request Support', 'Explore services'],
        note: 'Tell us what needs attention. We’ll help you choose the right next step.',
        categories: ['Technical support', 'Security systems', 'Networks & servers', 'Equipment care']
      },
      services: {
        eyebrow: 'What we do',
        title: 'Technology support that meets you where you are.',
        intro: 'From a single device to the systems your operation depends on, we focus on practical fixes, clear guidance, and dependable setup.',
        titles: ['Technical support', 'Security systems', 'Server & software updates', 'LAN & wireless networks', 'Equipment maintenance'],
        descriptions: [
          'Hands-on help for everyday technology issues, troubleshooting, and setup questions.',
          'Installation support for security systems designed to help you monitor what matters.',
          'Updates and configuration for the servers and software your operation relies on.',
          'Configuration support for local and wireless networks that need to stay connected.',
          'Keep the equipment you rely on in good working order with focused maintenance support.'
        ],
        request: 'Request support'
      },
      audience: {
        eyebrow: 'Who we support',
        title: 'The right level of support for real-world needs.',
        titles: ['Organizations & public entities', 'Individuals & home users'],
        descriptions: [
          'Support for private businesses and public entities that need their technology to stay clear, connected, and dependable.',
          'Approachable help for home technology, personal equipment, networks, and security systems.'
        ],
        actions: ['Start a conversation', 'Request support']
      },
      contact: {
        eyebrow: 'Let’s make it work',
        title: 'Need a clear next step?',
        description: 'Send a message on WhatsApp and tell us what you need help with. Freddy Vides will help route the conversation.',
        action: 'Request Support'
      },
      footer: {
        description: 'Technology support, security systems, and networks for customers across the United States.',
        explore: 'Explore',
        connect: 'Connect',
        exploreLinks: ['Services', 'Who we support', 'Contact'],
        rights: 'All rights reserved.',
        location: 'Based in Utah · Serving the USA'
      },
      servicesForMessage: ['Technical support', 'Security system installation', 'Server and software updates', 'LAN and wireless network configuration', 'Equipment maintenance'],
      audienceForMessage: ['Organization or public entity support', 'Individual or home user support']
    },
    es: {
      documentTitle: 'Vides Support IT | Soporte informático en Estados Unidos',
      nav: {
        services: 'Servicios',
        whoWeServe: 'A quién ayudamos',
        contact: 'Contacto',
        serviceLinks: ['Soporte técnico', 'Sistemas de seguridad', 'Servidores y software', 'Redes y equipos'],
        audienceLinks: ['Organizaciones y entidades públicas', 'Personas y usuarios domésticos']
      },
      hero: {
        eyebrow: 'Soporte tecnológico confiable',
        title: 'Mantén tus sistemas <em>seguros</em>, conectados y listos.',
        lede: 'Soporte informático práctico para empresas, entidades públicas y personas en todo Estados Unidos.',
        actions: ['Solicitar soporte', 'Ver servicios'],
        note: 'Cuéntanos qué necesita atención. Te ayudaremos a elegir el siguiente paso.',
        categories: ['Soporte técnico', 'Sistemas de seguridad', 'Redes y servidores', 'Mantenimiento de equipos']
      },
      services: {
        eyebrow: 'Lo que hacemos',
        title: 'Soporte tecnológico que se adapta a tu realidad.',
        intro: 'Desde un dispositivo hasta los sistemas de los que depende tu operación, nos enfocamos en soluciones prácticas, orientación clara y configuraciones confiables.',
        titles: ['Soporte técnico', 'Sistemas de seguridad', 'Actualizaciones de servidores y software', 'Redes LAN e inalámbricas', 'Mantenimiento de equipos'],
        descriptions: [
          'Ayuda práctica para problemas tecnológicos cotidianos, diagnóstico y configuración.',
          'Apoyo en la instalación de sistemas de seguridad para ayudarte a monitorear lo importante.',
          'Actualizaciones y configuración de los servidores y software de los que depende tu operación.',
          'Configuración de redes locales e inalámbricas que necesitan mantenerse conectadas.',
          'Mantén en buen funcionamiento los equipos en los que confías con mantenimiento enfocado.'
        ],
        request: 'Solicitar soporte'
      },
      audience: {
        eyebrow: 'A quién ayudamos',
        title: 'El nivel de soporte adecuado para necesidades reales.',
        titles: ['Organizaciones y entidades públicas', 'Personas y usuarios domésticos'],
        descriptions: [
          'Soporte para empresas privadas y entidades públicas que necesitan tecnología clara, conectada y confiable.',
          'Ayuda cercana para tecnología del hogar, equipos personales, redes y sistemas de seguridad.'
        ],
        actions: ['Iniciar conversación', 'Solicitar soporte']
      },
      contact: {
        eyebrow: 'Hagámoslo funcionar',
        title: '¿Necesitas un siguiente paso claro?',
        description: 'Envíanos un mensaje por WhatsApp y cuéntanos qué necesitas. Freddy Vides ayudará a orientar la conversación.',
        action: 'Solicitar soporte'
      },
      footer: {
        description: 'Soporte informático, sistemas de seguridad y redes para clientes en todo Estados Unidos.',
        explore: 'Explorar',
        connect: 'Conectar',
        exploreLinks: ['Servicios', 'A quién ayudamos', 'Contacto'],
        rights: 'Todos los derechos reservados.',
        location: 'Basados en Utah · Atendemos todo EE. UU.'
      },
      servicesForMessage: ['Soporte técnico', 'Instalación de sistemas de seguridad', 'Actualización de servidores y software', 'Configuración de redes LAN e inalámbricas', 'Mantenimiento de equipos'],
      audienceForMessage: ['Soporte para organizaciones o entidades públicas', 'Soporte para personas o usuarios domésticos']
    }
  };

  const setEyebrow = (selector, text) => {
    const element = document.querySelector(selector);
    if (!element) return;
    const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);
    if (textNode) textNode.nodeValue = ` ${text}`;
  };

  const setCtaText = (button, text) => {
    if (!button) return;
    button.dataset.text = text;
    button.setAttribute('aria-label', text);
    button.querySelector('.cta-button__label--front')?.replaceChildren(document.createTextNode(text));
    button.querySelector('.cta-button__label--hover')?.replaceChildren(document.createTextNode(text));
  };

  const updateLocalizedServiceLinks = (language) => {
    const copy = translations[language];
    const links = [
      ...document.querySelectorAll('.services-grid .js-service-link'),
      ...document.querySelectorAll('.audience-grid .js-service-link')
    ];
    const serviceNames = [...copy.servicesForMessage, ...copy.audienceForMessage];
    links.forEach((link, index) => {
      const service = serviceNames[index];
      link.dataset.service = service;
      const message = language === 'es'
        ? `Hola Vides Support IT, necesito ayuda con: ${service}.`
        : `Hello Vides Support IT, I would like support with: ${service}.`;
      link.href = `https://wa.me/13854432030?text=${encodeURIComponent(message)}`;
    });
  };

  const applyLanguage = (language) => {
    const activeLanguage = language === 'es' ? 'es' : 'en';
    const copy = translations[activeLanguage];
    document.documentElement.lang = activeLanguage;
    document.title = copy.documentTitle;
    navMenu?.setAttribute('aria-label', activeLanguage === 'es' ? 'Navegación principal' : 'Primary navigation');
    document.querySelector('[data-language-switch]')?.setAttribute('aria-label', activeLanguage === 'es' ? 'Selector de idioma' : 'Language selector');

    const submenuButtons = navMenu?.querySelectorAll('.nav-submenu-toggle') || [];
    if (submenuButtons[0]) submenuButtons[0].firstChild.nodeValue = copy.nav.services;
    if (submenuButtons[1]) submenuButtons[1].firstChild.nodeValue = copy.nav.whoWeServe;
    if (navMenu?.querySelector('.nav-contact')) navMenu.querySelector('.nav-contact').textContent = copy.nav.contact;
    [...document.querySelectorAll('#services-submenu a')].forEach((link, index) => { link.textContent = copy.nav.serviceLinks[index]; });
    [...document.querySelectorAll('#audience-submenu a')].forEach((link, index) => { link.textContent = copy.nav.audienceLinks[index]; });

    setEyebrow('.hero .eyebrow', copy.hero.eyebrow);
    document.querySelector('#hero-title').innerHTML = copy.hero.title;
    document.querySelector('.hero-lede').textContent = copy.hero.lede;
    [...document.querySelectorAll('.hero-actions .cta-button')].forEach((button, index) => setCtaText(button, copy.hero.actions[index]));
    document.querySelector('.hero-note p').textContent = copy.hero.note;
    [...document.querySelectorAll('.hero-bottom span')].forEach((item, index) => { item.textContent = copy.hero.categories[index]; });

    setEyebrow('.services-section .eyebrow', copy.services.eyebrow);
    document.querySelector('#services-title').textContent = copy.services.title;
    document.querySelector('.services-section .split-heading > p').textContent = copy.services.intro;
    [...document.querySelectorAll('.services-grid .service-content h3')].forEach((item, index) => { item.textContent = copy.services.titles[index]; });
    [...document.querySelectorAll('.services-grid .service-content p')].forEach((item, index) => { item.textContent = copy.services.descriptions[index]; });
    [...document.querySelectorAll('.services-grid .js-service-link')].forEach((button) => setCtaText(button, copy.services.request));

    setEyebrow('.audience-section .eyebrow', copy.audience.eyebrow);
    document.querySelector('#audience-title').textContent = copy.audience.title;
    [...document.querySelectorAll('.audience-card h3')].forEach((item, index) => { item.textContent = copy.audience.titles[index]; });
    [...document.querySelectorAll('.audience-card p')].forEach((item, index) => { item.textContent = copy.audience.descriptions[index]; });
    [...document.querySelectorAll('.audience-card .js-service-link')].forEach((button, index) => setCtaText(button, copy.audience.actions[index]));

    setEyebrow('.contact-section .eyebrow', copy.contact.eyebrow);
    document.querySelector('#contact-title').textContent = copy.contact.title;
    document.querySelector('.contact-inner > div:first-child > p:last-child').textContent = copy.contact.description;
    setCtaText(document.querySelector('.contact-actions .cta-button'), copy.contact.action);

    document.querySelector('.footer-brand p').textContent = copy.footer.description;
    const footerLabels = document.querySelectorAll('.footer-label');
    if (footerLabels[0]) footerLabels[0].textContent = copy.footer.explore;
    if (footerLabels[1]) footerLabels[1].textContent = copy.footer.connect;
    [...document.querySelectorAll('.footer-main .footer-column:nth-child(2) a')].forEach((link, index) => { link.textContent = copy.footer.exploreLinks[index]; });
    const footerBottom = document.querySelectorAll('.footer-bottom > span');
    if (footerBottom[0]) footerBottom[0].innerHTML = `© <span data-year>${new Date().getFullYear()}</span> Vides Support IT. ${copy.footer.rights}`;
    if (footerBottom[1]) footerBottom[1].textContent = copy.footer.location;

    document.querySelectorAll('[data-language]').forEach((button) => {
      const selected = button.dataset.language === activeLanguage;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    updateLocalizedServiceLinks(activeLanguage);
  };

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language));
  });

  applyLanguage('en');

  const contactWidget = document.querySelector('[data-contact-widget]');
  if (contactWidget) {
    const faqPanel = contactWidget.querySelector('[data-faq-panel]');
    const faqToggle = contactWidget.querySelector('[data-faq-toggle]');
    const faqClose = contactWidget.querySelector('[data-faq-close]');
    const faqBack = contactWidget.querySelector('[data-faq-back]');
    const faqList = contactWidget.querySelector('[data-faq-list]');
    const faqQuestions = contactWidget.querySelector('[data-faq-questions]');
    const faqAnswer = contactWidget.querySelector('[data-faq-answer]');
    const faqAnswerTitle = contactWidget.querySelector('[data-faq-answer-title]');
    const faqAnswerCopy = contactWidget.querySelector('[data-faq-answer-copy]');
    const faqWhatsApp = contactWidget.querySelector('[data-faq-whatsapp]');
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}`;
    const faqMessage = 'Hola, tengo una pregunta sobre sus servicios';

    const setFaqView = (showAnswer, faqItem = null) => {
      faqList.hidden = showAnswer;
      faqAnswer.hidden = !showAnswer;
      if (showAnswer && faqItem) {
        faqAnswerTitle.textContent = faqItem.question;
        faqAnswerCopy.textContent = faqItem.answer;
        faqBack.focus();
      }
    };

    const setFaqOpen = (open) => {
      faqPanel.hidden = !open;
      faqToggle.setAttribute('aria-expanded', String(open));
      if (open) {
        setFaqView(false);
        faqPanel.focus();
      } else {
        setFaqView(false);
        faqToggle.focus();
      }
    };

    faqQuestions.replaceChildren(...CONFIG.faq.map((faqItem) => {
      const button = document.createElement('button');
      button.className = 'faq-panel__question';
      button.type = 'button';
      button.textContent = faqItem.question;
      button.addEventListener('click', () => setFaqView(true, faqItem));
      return button;
    }));

    faqWhatsApp.href = `${whatsappUrl}?text=${encodeURIComponent(faqMessage)}`;
    contactWidget.querySelectorAll('[data-contact-action][href^="https://wa.me"]').forEach((link) => {
      link.href = whatsappUrl;
    });

    contactWidget.querySelectorAll('[data-config-social]').forEach((link) => {
      const socialName = link.dataset.configSocial;
      const socialUrl = CONFIG[`${socialName}Url`];
      if (socialUrl) {
        link.href = socialUrl;
        link.hidden = false;
      } else {
        link.hidden = true;
      }
    });

    faqToggle.addEventListener('click', () => setFaqOpen(faqPanel.hidden));
    faqClose.addEventListener('click', () => setFaqOpen(false));
    faqBack.addEventListener('click', () => {
      setFaqView(false);
      faqPanel.focus();
    });

    contactWidget.addEventListener('click', (event) => {
      if (!faqPanel.hidden && !faqPanel.contains(event.target) && !faqToggle.contains(event.target)) setFaqOpen(false);
    });

    document.addEventListener('click', (event) => {
      if (!faqPanel.hidden && !contactWidget.contains(event.target)) setFaqOpen(false);
    });

    contactWidget.querySelectorAll('[data-contact-action]').forEach((action) => {
      action.addEventListener('pointerenter', () => action.classList.remove('is-tooltip-dismissed'));
      action.addEventListener('focusin', () => action.classList.remove('is-tooltip-dismissed'));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      contactWidget.querySelectorAll('[data-contact-action]').forEach((action) => action.classList.add('is-tooltip-dismissed'));
      if (!faqPanel.hidden) setFaqOpen(false);
    });
  }
})();
