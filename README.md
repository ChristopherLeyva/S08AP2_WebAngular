# Web SSR / SSG - Mi Negocio

Sitio Angular 20 con SSR y prerender (SSG) para un negocio con rutas: inicio, nosotros, productos. Incluye metadatos SEO por pagina y navbar.

## Scripts

- npm start: modo desarrollo
- npm run build: build de produccion (incluye SSR y prerender por angular.json)
- npm run build:prerender: build + prerender explicito
- npm run serve:ssr:web-ssr: sirve el bundle SSR localmente (Node)

## Estructura de rutas

- /inicio (por defecto)
- /nosotros
- /productos

## SEO por pagina

Cada componente de pagina establece Title y Meta (description, og:title, og:description).

## Despliegue

### Koyeb (recomendado)
1) Sube el codigo a GitHub
2) En Koyeb Dashboard:
   - Crear nuevo servicio
   - Conectar repositorio GitHub
   - Seleccionar este repositorio
   - Koyeb detectara automaticamente el Dockerfile
   - El servicio se desplegara automaticamente
3) El proyecto incluye:
   - Dockerfile optimizado para Angular SSR/SSG
   - koyeb.yaml para configuracion del servicio
   - Build automatico y despliegue de archivos estaticos

### Netlify
1) Instalar dependencias y compilar:
   - `npm ci`
   - `npm run build`
2) Publicar la carpeta `dist/web-ssr/browser`.
3) Este repo incluye `netlify.toml` con:
   - `build.command = npm run build`
   - `publish = dist/web-ssr/browser`
   - Redirect SPA `/* -> /index.html`.

### GitHub Pages
1) `npm run build`
2) Publicar `dist/web-ssr/browser` en la rama `gh-pages`.
3) Asegurar fallback copiando `index.html` a `404.html` en la carpeta publicada (para routing):
   - `cp dist/web-ssr/browser/index.html dist/web-ssr/browser/404.html`

### Vercel
- Usar adaptador estático: seleccionar `dist/web-ssr/browser` como output estático. O bien usar Node SSR seleccionando `dist/web-ssr/server/server.mjs` como entrada (mayor costo).

## Desarrollo local

```
npm ci
npm start
```

## Notas

- El proyecto está configurado con `prerender: true` en `angular.json`, por lo que `ng build` ya genera HTML estático para las rutas definidas.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
