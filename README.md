# OmmSuite

**OmmSuite** es una plataforma integral basada en un modelo *as a Service*, diseñada para la gestión empresarial y enfocada en ofrecer soluciones de alta escalabilidad y rendimiento para usuarios, ventas, soporte y más.

## Características principales

- **Gestión de usuarios**: Crear, editar, listar y eliminar usuarios con roles y permisos personalizados utilizando Spatie Roles & Permissions.
- **Tablero interactivo**: Visualización en tiempo real de métricas clave mediante gráficos dinámicos.
- **Multitenancy**: Soporte para múltiples inquilinos con bases de datos independientes por cliente.
- **Omnicanalidad**: Integración con Asterisk para llamadas, chats, correos electrónicos y mensajes SMS.
- **Autenticación segura**: Inicio de sesión protegido contra CSRF y XSS.
- **Escalabilidad**: Arquitectura modular y preparada para manejar grandes volúmenes de datos y usuarios simultáneos.

## Tecnologías utilizadas

### Frontend
- [React](https://reactjs.org/): Componentes dinámicos y reusables para una interfaz rápida y reactiva.
- [Bootstrap](https://getbootstrap.com/): Estilización moderna y responsiva.
- [Tailwind CSS](https://tailwindcss.com/): Estilos adicionales para personalización avanzada.

### Backend
- [Asterisk](https://www.asterisk.org/): Central telefónica para comunicación en tiempo real.
- [MySQL](https://www.mysql.com/): Base de datos relacional para almacenamiento seguro.
- [Redis](https://redis.io/): Caching eficiente para optimización de procesos.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) y [Yarn](https://yarnpkg.com/): Para gestionar dependencias del frontend.
- [Docker](https://www.docker.com/): Opcional, para facilitar el despliegue.
- [MySQL](https://www.mysql.com/): Base de datos relacional.
- [PHP](https://www.php.net/): Para componentes de compatibilidad con Laravel si es necesario.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue las mejores prácticas de desarrollo y envía *pull requests* al repositorio.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
