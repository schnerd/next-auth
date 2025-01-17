"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BattleNet;

function BattleNet(options) {
  return {
    id: "battlenet",
    name: "Battle.net",
    type: "oauth",
    wellKnown: `${options.issuer}/.well-known/openid-configuration`,

    profile(profile) {
      return {
        id: profile.sub,
        name: profile.battle_tag,
        email: null,
        image: null
      };
    },

    style: {
      logo: "https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/battlenet.svg",
      logoDark: "https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/battlenet-dark.svg",
      bg: "#fff",
      text: "#148eff",
      bgDark: "#148eff",
      textDark: "#fff"
    },
    options
  };
}