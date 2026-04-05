# API de Películas - Node.js

Esta es una **API REST** desarrollada para la gestión de un catálogo de películas. El proyecto permite consultar datos de forma estructurada y fue construido como parte de mi proceso de aprendizaje en desarrollo backend.

## Tecnologías utilizadas
* **Node.js**: Entorno de ejecución para JavaScript.
* **Express**: Framework para la creación del servidor y manejo de rutas.
* **Morgan**: Middleware para el registro (logs) de peticiones HTTP.
* **Postman**: Herramienta utilizada para el testeo de los endpoints.

## Instalación y Uso
1. **Clonar el repositorio:** Descarga una copia del código a tu máquina local.
2. **Instalar dependencias:** Ejecuta el comando `npm install` en la terminal.
3. **Iniciar el servidor:** Usa el comando `npm run dev` para activar el servidor con Nodemon.
4. **Prueba en Postman:** Accede a las rutas configuradas (ej. `http://localhost:13000/api/movies`).

## Rutas Disponibles
* `GET /`: Muestra un mensaje de bienvenida.
* `GET /api/movies`: Retorna el listado completo de películas en formato JSON.

---
Desarrollado por **Carolina Pedroza**
