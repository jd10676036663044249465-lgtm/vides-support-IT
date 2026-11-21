# Vides Support IT

Versión final estática de una sola página construida con HTML, CSS y JavaScript puro. No usa frameworks, backend ni almacenamiento del navegador.

## Estructura

- Navegación flotante con logo circular, submenús, selector EN/ES y Contact.
- Hero con tres imágenes, puntos, pausa/reproducción, autoplay de 4 segundos y overlay oscuro lateral.
- Who we support con sus dos tarjetas existentes.
- What we do con cinco servicios, tres videos, dos imágenes, controles, teclado y arrastre táctil.
- Footer, enlaces de contacto y widget FAQ. Las preguntas de zona y horario se omiten porque siguen sin confirmarse.

## Recursos y rutas finales

| Sección | Archivo | Uso |
|---|---|---|
| Hero | `img/hero_security_systems.jpg` | Slide 1 |
| Hero | `img/both_lan-wireless_networks.jpg` | Slide 2 |
| Hero | `img/hero_technical_support.jpg` | Slide 3 |
| Technical support | `img/technicalSupport.mp4` / `img/poster_technicalSupport.jpg` | Video y poster |
| Security systems | `img/securitySystem.mp4` / `img/poster_securitySystem.jpg` | Video y poster |
| Server & software updates | `img/server-software-updates.mp4` / `img/poster_server_softwareUpdates.jpg` | Video y poster |
| LAN & wireless networks | `img/both_lan-wireless_networks.jpg` | Imagen |
| Equipment maintenance | `img/equipmentMaintenance.jpg` | Imagen |
| Marca | `img/logo.jpg`, `img/favicon-32.png`, `img/apple-touch-icon-180.png` | Logos e iconos |

Los archivos con `&` fueron renombrados a `both_lan-wireless_networks.jpg` y `server-software-updates.mp4`; todas las rutas usan nombres relativos.

## Paleta y tipografía

Se mantienen las fuentes locales Arimo para cuerpo y Oswald para títulos. El azul dominante muestreado del logo es `#052149`, por eso `--accent` usa ese valor en lugar de `#2563EB`.

| Variable | Valor |
|---|---|
| `--bg-page` | `#E7E9F3` |
| `--surface-navy` | `#0F1F5C` |
| `--surface-light` | `#B3C6F5` |
| `--accent` | `#052149` |
| `--ink-heading` | `#0B1638` |

## Verificación

Se revisaron 320, 390, 768, 1024 y 1440px, con movimiento normal y reducido. `script.js` pasa `node --check`, no hay referencias al fondo animado ni al texto descartado, y el HTML contiene solo imágenes y videos existentes en `img/`. La comprobación local de rutas confirma que cada `src`, `poster` y `<source>` coincide con un archivo físico; no se usan videos en el hero. La inspección visual/red en Chrome no pudo completarse porque el entorno no permitió identificar la URL local del navegador; la validación de archivos y rutas sí fue completada.

Pendientes: dominio de producción y ciudad exacta para Open Graph/JSON-LD; zona de cobertura y horario de atención.

## Animación de entrada

La clase `.reveal` se aplica mediante JavaScript a las secciones no hero, sus encabezados, subtítulos, tarjetas y controles del carrusel de servicios. Se activa una sola vez con un único `IntersectionObserver` de `threshold: 0.15`, con un máximo de cuatro posiciones escalonadas a 80ms. El hero queda excluido. Para desactivarla, comenta el bloque `/* REVEAL */` de `styles.css`; si JavaScript no carga, el contenido permanece visible porque el estado oculto solo existe bajo `html.js-reveal`.

## Caja de imágenes del hero

Las tres imágenes usan una caja común con proporción `3:2`, `object-fit: cover` y `object-position: center`. En móvil ocupa `100%` del ancho; en tablet `60%`; en escritorio `55%`, alineada a la derecha. La variable `--hero-bg` usa el fondo real del hero, actualmente `var(--ink)` (`#071039`), para fundir los laterales y el borde inferior mediante máscara de degradado.
