import { config } from "process";

export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["self", "https:"],
          "img-src": ["self", "data", "blob", "market-assets.strapi.io"],
          "media-src": [
            "self",
            "data",
            "blob",
            "market-assets.strapi.io",
            "res.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000"],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
