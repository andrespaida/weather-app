# Usa una imagen de nginx para servir los archivos estáticos
FROM nginx:alpine
COPY . /usr/share/nginx/html