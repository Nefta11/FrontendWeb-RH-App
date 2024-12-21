# Sistema de Recursos Humanos

Esta aplicación es un sistema de gestión de empleados desarrollado con React. Permite agregar, editar, listar y eliminar empleados. La aplicación utiliza `axios` para realizar solicitudes HTTP a un servidor backend.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de directorios:
- .gitignore
- package.json
- public/
  - index.html
  - manifest.json
  - robots.txt
- README.md
- src/
  - App.jsx
  - empleados/
    - AgregarEmpleado.jsx
    - EditarEmpleado.jsx
    - ListadoEmpleados.jsx
  - index.css
  - index.js
  - plantilla/
    - Navegacion.jsx


## Funcionalidades

### Listado de Empleados

La página principal muestra una lista de empleados con sus detalles como ID, nombre, departamento y sueldo. Desde esta página, se pueden editar o eliminar empleados.

### Agregar Empleado

La página de agregar empleado permite ingresar los detalles de un nuevo empleado y guardarlos en el sistema.

### Editar Empleado

La página de editar empleado permite modificar los detalles de un empleado existente.

### Navegación

La barra de navegación permite acceder fácilmente a la página principal y a la página de agregar empleado.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

### `npm test`

Lanza el corredor de pruebas en modo interactivo.\
Consulta la sección sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Empaqueta correctamente React en modo de producción y optimiza la construcción para obtener el mejor rendimiento.

### `npm run eject`

**Nota: esta es una operación unidireccional. Una vez que `eject`, no puedes volver atrás!**

Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes `eject` en cualquier momento. Este comando eliminará la única dependencia de construcción de tu proyecto.

## Dependencias

- `axios`: ^1.7.9
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-number-format`: ^5.4.2
- `react-router-dom`: ^7.1.0
- `react-scripts`: ^5.0.1
- `web-vitals`: ^4.2.4

## Certificado del Curso

![Certificado](/public/UC-597e98de-4b97-4ebe-ad68-9f081f995429.jpg)