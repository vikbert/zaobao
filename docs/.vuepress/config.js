const readFileList = require("../../scripts/build.js");

module.exports = {
  title: "ZaoBao",
  description:
    "每日时报，会以前端技术体系为主要分享课题。内容会以：文章、工具、新闻、视频几大板块作为主要分类。",
  head: [
    [
      "link",
      {
        rel: "alternate",
        type: "application/rss+xml",
        href: "/rss.xml",
        title: "Daily Notes"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: `https://fonts.googleapis.com/css?family=Major+Mono+Display`
      }
    ]
  ],
  plugins: [
    ["@vuepress/google-analytics"],
    [
      "vuepress-plugin-rss-support",
      {
        site_url: "https://vikbert.github.io/zaobao/",
        filter: (page) => /^\/201.+/.test(page.path),
        copyright: "2019每日时报",
        count: 60
      }
    ],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github",
        owner: "vikbert",
        repo: "zaobao",
        clientId: "656cf3dd90e370b295d0",
        clientSecret: "f37ae698551c2c11400291773e422102712e3fac"
      }
    ]
  ],
  base: "/zaobao/",
  themeConfig: {
    lastUpdated: "Last Updated",
    docsDir: "docs",
    algolia: {
      apiKey: "6287226bfc8f45f5729943fba710faa0",
      indexName: "zaobao"
    },
    nav: [{ text: "HowTo", link: "/other/howTo" }],
    sidebar: [
      ["/", "🏠 Home"],
      {
        title: "2019-07",
        collapsable: false,
        children: readFileList("2019", "07")
      },
      {
        title: "2019-06",
        collapsable: true,
        children: readFileList("2019", "06")
      },
      {
        title: "2019-05",
        collapsable: true,
        children: readFileList("2019", "05")
      },
      {
        title: "2019-04",
        collapsable: true,
        children: readFileList("2019", "04")
      },
      {
        title: "2019-03",
        collapsable: true,
        children: readFileList("2019", "03")
      },
      {
        title: "2019-02",
        collapsable: true,
        children: readFileList("2019", "02")
      },
      {
        title: "2019-01",
        collapsable: true,
        children: readFileList("2019", "01")
      }
    ]
  }
};
