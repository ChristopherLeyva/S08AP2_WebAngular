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
