//const strapi = require('strapi');
//strapi().start();

const strapi = require('strapi');

(async () => {
  // Crear una instancia de Strapi
  const strapiApp = await strapi();

  // Configurar autoReload para desarrollo
  if (process.env.NODE_ENV === "development") {
    strapiApp.autoReload = { enabled: true };
  }

  // Cargar y arrancar Strapi
  await strapiApp.load();
  await strapiApp.start();
})();
