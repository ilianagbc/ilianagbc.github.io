# IBNB · Green Building Energy Analysis

Web de IBNB: simulación energética computacional, gemelos digitales y certificaciones
(LEED, BREEAM, WELL) para la descarbonización de la edificación. Bilingüe (ES / EN).

Publicada en **https://ilianagbc.github.io**

## Desarrollo local

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint      # comprobación de tipos
npm run build     # genera dist/
```

## Estructura

- `src/content.ts` — textos (ES/EN), servicios y formación.
- `src/components/` — páginas: Inicio, Servicios, Trayectoria, Contacto, cabecera y pie.
- `public/` — logo y favicon. `npm run logo` los regenera desde `scripts/generate-logo.cjs`.

## Formulario de contacto

El formulario envía los datos a un Google Apps Script (URL en `src/components/ContactPage.tsx`).

## Despliegue

Cada push a `main` construye la web y la publica en GitHub Pages mediante
`.github/workflows/deploy.yml`. En *Settings → Pages* del repositorio, la fuente debe ser
**GitHub Actions**.
