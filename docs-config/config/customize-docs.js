export default {
    name: "Automata",
    domain: "https://rights.institute",
    typedocFolders: [
      {
        id: "functions",
        entryPoints: [
          "../app/components/**/*"
        ],
      },
    ],
    gitRepoDocsPath: "https://github.com/vtempest/rights-institute/tree/master/",
    sourceLinkTemplate: "https://github.com/vtempest/rights-institute/tree/master/{path}#L{line}",
    openAPISpecPath: false,
    openAPIDocsOutput: "./src/api",
    openAPIShowSchemas: false,
    showEditsOnGitHub: true,
    GOOGLE_ANALYTICS_ID: false,
    compileForSubdomain: false,
    tsconfig: "./tsconfig.json",
    readme: "../README.md",
    sanitizeComments: false,
    logoURL: "/",
    baseFolder: "./",
    logo: "https://rights.institute/apple-touch-icon.png",
    favicon: "https://rights.institute/favicon.ico",
    enableFasterBuildV4: 1,
    enableReadmeAsHome: 1,
    topbar: [
      {
        to: "/",
        label: "👋 Intro",
        position: "left",
      },
      {
        to: "/research/Step%20Consciousness%20Emergence%20Framework",
        label: "🔬 Research",
        position: "left",
      },
      {
        to: "https://rights.institute",
        label: "🏠 Home",
        position: "right",
      }

    ]
}