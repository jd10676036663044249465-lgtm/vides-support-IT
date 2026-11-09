# Vides Support IT

Static one-page website for Vides Support IT, built with semantic HTML, CSS, and vanilla JavaScript. The page is English-first, mobile-first, and focused on one conversion action: requesting support through WhatsApp.

## Files

- `index.html` — page structure, SEO metadata, Open Graph metadata, accessible content, and LocalBusiness JSON-LD.
- `styles.css` — responsive visual system based on the supplied blue palette reference.
- `script.js` — mobile navigation, language switch, interactive background grid, current year, service-specific WhatsApp messages, and fixed FAQ/contact widget.

## Visual and UX decisions

- Deep navy establishes trust and technical clarity; electric blue `#2E5DE6` is reserved for primary CTA actions; the pale blue-green accent supports contrast moments.
- All primary actions use one reusable HTML/CSS CTA: layered text crossfade, expanding white hover field, inline SVG arrow, keyboard focus parity, and reduced-motion fallback.
- The fixed navigation uses a compact glass bar with an active sliding pill, desktop hover/focus submenus, mobile accordion behavior, Escape-to-close, and IntersectionObserver section activation.
- Typography uses the bundled fonts from `tipografía/Arimo,Oswald`: Oswald for titles and Arimo for body copy, navigation, buttons, and small labels.
- The hero keeps `img/photoplaceholder.mp4` as its full background. The interactive grid is mounted across the rest of the page, excluding the hero, with responsive cell generation, click waves, reduced-motion fallback, resize debounce, and viewport pausing.
- The hero moves visitors from the value proposition to one clear action without adding unsupported claims, logos, metrics, testimonials, or certifications.
- Services use a varied editorial grid to create scanning rhythm while keeping every service one tap away from a WhatsApp request.
- The audience split separates organizations/public entities from individuals/home users so visitors can self-identify quickly.
- Focus states, semantic landmarks, alt text, mobile navigation, reduced-motion support, readable contrast, and touch-friendly buttons are included.

## Placeholders pending before publication

1. `[DOMAIN_PLACEHOLDER]` — production domain in `index.html` for `og:url`, JSON-LD `@id`, and JSON-LD `url`.
2. `[OG_IMAGE_PLACEHOLDER]` — final absolute URL for the social sharing image.
3. `[CITY_PLACEHOLDER]` — exact Utah city for the LocalBusiness `addressLocality` field. The visible copy intentionally says “Based in Utah” until the city is confirmed.
4. Business hours — add them to the footer and JSON-LD only after the schedule is confirmed.
5. WhatsApp availability and response expectations — add only if the business wants to publish them.

## Media mapping

- Hero background video: `img/photoplaceholder.mp4`
- Technical support: `img/Technical support.mp4`
- Security systems: `img/securitySystem.mp4`
- Server and software updates: `img/Server & software updates.mp4`
- LAN and wireless networks: `img/LAN & wireless networks.jpg`
- Equipment maintenance: `img/equipmentMaintenance.jpg`
- Navigation logo: `img/logo.jpg`

## Language switch

The navigation includes an accessible EN/ES switch with `aria-pressed` state. English is the default language on each page load; no language or personal data is stored.

## FAQ/contact widget

The fixed widget uses `CONFIG` in `script.js` for the WhatsApp number, social URLs, and Spanish FAQ content. The widget does not request or store personal data and includes the required coverage and schedule placeholders in `CONFIG.faq`.

## Content confirmation

- Business name: Vides Support IT
- Responsible person: Freddy Vides
- Location: Utah, USA; service area: customers across the United States
- WhatsApp: [+1 385 443 2030](https://wa.me/13854432030)
- Instagram: [videssupportit](https://www.instagram.com/videssupportit?cplk=cWJvaWRjaWw0NjY=)
- Facebook: [Vides Support IT](https://www.facebook.com/share/19dqEYNvQx/?mibextid=wwXIfr)

## Local preview

Open `index.html` directly for a basic check, or serve the folder with any static HTTP server. No framework, bundler, npm dependency, backend, store, blog, or multi-page flow is required.

## Responsive verification

Responsive rules were reviewed for these target widths:

- `320px`, `375px`, `390px`: mobile navigation, stacked hero actions, one-column service/audience cards, 44px contact widget, and FAQ panel height/ safe-area handling.
- `768px`: tablet breakpoint, expanded navigation, two-column services and audience blocks, and 24px container padding.
- `1024px`: desktop breakpoint, three-column service layout, expanded footer columns, and 32px container padding.
- `1440px`: centered `1200px` content container, capped navigation width, and no horizontal overflow.

Special adjustments: the CTA height uses a 44px minimum to satisfy touch-target guidance; the mobile menu stays within `100vw - 24px`; the FAQ panel is capped at `70vh` and accounts for `env(safe-area-inset-bottom)`; the animated grid switches to 4×10 cells below 768px.
