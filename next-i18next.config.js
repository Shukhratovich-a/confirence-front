/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru", "uz"],
  },
  react: { useSuspense: true },

  defaultNS: "common",
  ns: ["common"],
};
