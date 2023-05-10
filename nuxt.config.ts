// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["nuxt-seo-kit"],
  app: {
    head: {
      meta: [
        { name: "author", content: "Alexander Vasilev with StartBootstrap" }
      ],
    },
  },
  runtimeConfig: {
    trailingSlash: true,
    indexable: false,
    public: {
      siteUrl: "http:/localhost:3000",
      siteName: "Resume - Start Bootstrap Theme",
      siteDescription:
        "Clarence Taylor's resume site. I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
      language: "en-US",
      titleSeparator: "|",
      trailingSlash: false,
    },
  },
  postcss: {
    preset: {
      autoprefixer: {
        grid: true,
        flexbox: true,
      },
    },
  },
})
