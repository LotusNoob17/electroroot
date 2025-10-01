==============================
 MANUAL DE INSTALACIÓN Y USO
==============================

1. Instalación de dependencias
   Ejecutar el siguiente comando:
   npm install

2. Iniciar el proyecto
   Para arrancar el backend, usar:
   npm start

   El servidor se ejecutará en el puerto 3015
   URL base: http://localhost:3015

3. Configuración de la base de datos
   - Habilitar la conexión a PostgreSQL en el archivo load.js
   - Verificar la conexión en los endpoints que usan base de datos

4. Creación de tablas en PostgreSQL
   En el archivo src/config/config.json se debe cambiar la confirguracion de la base de datos
   Ejecutar las siguientes sentencias SQL:

   CREATE TABLE data_solicitud (
     nombre VARCHAR,
     comunidad VARCHAR,
     municipio VARCHAR,
     campo VARCHAR,
     fecha DATE
   );

   CREATE TABLE sugerencias (
     fecha DATE,
     sugerencia VARCHAR
   );


==============================
 FIN DEL MANUAL
==============================
