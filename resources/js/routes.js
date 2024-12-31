const routes = {
    baseUrl: document.querySelector('meta[name="base-url"]').getAttribute('content'),
    dashboard: document.querySelector('meta[name="route-dashboard"]').getAttribute('content'),
    usersIndex: document.querySelector('meta[name="route-users-index"]').getAttribute('content'),
    usersCreate: document.querySelector('meta[name="route-users-create"]').getAttribute('content'),
    usersDestroy: document.querySelector('meta[name="route-users-destroy"]').getAttribute('content'), // Nueva ruta
    clientsIndex: document.querySelector('meta[name="route-clients-index"]').getAttribute('content'),
    clientsCreate: document.querySelector('meta[name="route-clients-create"]').getAttribute('content'),
    categoriesIndex: document.querySelector('meta[name="route-categories-index"]').getAttribute('content'),
    categoriesCreate: document.querySelector('meta[name="route-categories-create"]').getAttribute('content'),
    productsIndex: document.querySelector('meta[name="route-products-index"]').getAttribute('content'),
    productsCreate: document.querySelector('meta[name="route-products-create"]').getAttribute('content'),
};

export default routes;
