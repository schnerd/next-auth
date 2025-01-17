"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Slack;

function Slack(options) {
  return {
    id: "slack",
    name: "Slack",
    type: "oauth",
    wellKnown: "https://slack.com/.well-known/openid-configuration",
    authorization: {
      params: {
        scope: "openid profile email"
      }
    },

    profile(profile) {
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture
      };
    },

    style: {
      logo: "https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/slack.svg",
      logoDark: "https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/slack.svg",
      bg: "#fff",
      text: "#000",
      bgDark: "#000",
      textDark: "#fff"
    },
    options
  };
}