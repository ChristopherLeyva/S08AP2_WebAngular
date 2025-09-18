#!/bin/bash

echo "Desplegando aplicacion Angular SSR/SSG en Koyeb..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "Error: No se encontro package.json. Asegurate de estar en el directorio raiz del proyecto."
    exit 1
fi

# Build del proyecto
echo "Construyendo la aplicacion..."
npm run build

if [ $? -ne 0 ]; then
    echo "Error en el build. Revisa los errores arriba."
    exit 1
fi

echo "Build completado exitosamente!"

# Verificar que los archivos estáticos se generaron
if [ ! -d "dist/web-ssr/browser" ]; then
    echo "Error: No se encontro la carpeta dist/web-ssr/browser"
    exit 1
fi

echo "Archivos estaticos generados:"
ls -la dist/web-ssr/browser/

echo ""
echo "Para desplegar en Koyeb:"
echo "1. Sube este codigo a GitHub"
echo "2. Ve a https://app.koyeb.com"
echo "3. Crea un nuevo servicio"
echo "4. Conecta tu repositorio GitHub"
echo "5. Koyeb detectara automaticamente el Dockerfile"
echo "6. El despliegue comenzara automaticamente"
echo ""
echo "Archivos de configuracion incluidos:"
echo "- Dockerfile: Configuracion de contenedor"
echo "- koyeb.yaml: Configuracion del servicio Koyeb"
echo "- .dockerignore: Archivos a ignorar en el build"
echo ""
echo "Tu aplicacion estara disponible en: https://[nombre-del-servicio].koyeb.app"
