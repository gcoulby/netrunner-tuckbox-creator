/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  assetPrefix = `/netrunner-tuckbox-creator/`
  basePath = `/netrunner-tuckbox-creator`
}

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  // images: {
  //   loader: "imgix",
  //   path: 'the "domain" of your Imigix source',
  // },
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
