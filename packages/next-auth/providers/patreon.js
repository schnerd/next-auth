"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Patreon;

function Patreon(options) {
  return {
    id: "patreon",
    name: "Patreon",
    type: "oauth",
    version: "2.0",
    authorization: {
      url: "https://www.patreon.com/oauth2/authorize",
      params: {
        scope: "identity identity[email]"
      }
    },
    token: "https://www.patreon.com/api/oauth2/token",
    userinfo: "https://www.patreon.com/api/oauth2/api/current_user",

    profile(profile) {
      return {
        id: profile.data.id,
        name: profile.data.attributes.full_name,
        email: profile.data.attributes.email,
        image: profile.data.attributes.image_url
      };
    },

    style: {
      logo: "https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/patreon.svg",
      logoDark: "https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/patreon.svg",
      bg: "#fff",
      text: "#e85b46",
      bgDark: "#000",
      textDark: "#e85b46"
    },
    options
  };
}