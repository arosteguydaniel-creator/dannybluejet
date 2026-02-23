# Danny Blue Jet 🚀

Sitio web retrofuturista neon para **Danny Blue Jet** — Tienda de Juegos & Música.

Construido con **Next.js 15** (App Router), TypeScript y estilos neon personalizados.

## Requisitos

- Node.js 18+
- npm

## Instalación y ejecución local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Rutas disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Home / Hero |
| `/juegos` | Tienda de Juegos |
| `/musica` | Reproductor de Música |
| `/api/productos` | Endpoint JSON de productos |

## Scripts

```bash
npm run dev    # Servidor de desarrollo
npm run build  # Build de producción
npm start      # Servidor de producción
```

## Placeholders a reemplazar

### Tokens de Flow
- El primer producto (`Donde las Papas Queman`) ya tiene su token de Flow configurado.
- Para los demás productos, busca `TU_LINK_DE_FLOW_AQUÍ` en `app/api/productos/route.ts` y reemplaza con tu link de Flow real.

### Archivos de audio
Los archivos en `public/assets/` son **placeholders**. Reemplázalos con tus archivos mp3 reales:

- `public/assets/nebula-groove.mp3`
- `public/assets/retrojet-drive.mp3`

### Imágenes de portada
También reemplaza los placeholders de portada:

- `public/assets/cover-nebula.png`
- `public/assets/cover-retrojet.png`

## Estructura del proyecto

```
├── app/
│   ├── layout.tsx          # Layout global con Navbar y NeonEffects
│   ├── page.tsx            # Home / Hero
│   ├── globals.css         # Estilos globales neon
│   ├── juegos/
│   │   └── page.tsx        # Tienda de Juegos
│   ├── musica/
│   │   └── page.tsx        # Reproductor de Música
│   └── api/
│       └── productos/
│           └── route.ts    # Endpoint GET /api/productos
├── components/
│   ├── Navbar.tsx          # Navegación responsive
│   ├── ProductCard.tsx     # Tarjeta de producto con link a Flow
│   ├── MusicPlayer.tsx     # Reproductor play/pause/prev/next
│   └── NeonEffects.tsx     # Efectos neon de fondo
├── public/
│   ├── assets/             # Audio e imágenes (reemplazar con archivos reales)
│   └── donde_las_papas_queman_1.png
├── next.config.js
├── package.json
└── tsconfig.json
```
