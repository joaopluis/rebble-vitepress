import {DefaultTheme, defineConfig, UserConfig} from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const vitePressConfigs: UserConfig<DefaultTheme.Config> = {
  title: "Rebble Developer",
  description: "Pebble Developer Documentation",
  base: "/rebble-vitepress/",
  ignoreDeadLinks: true, // Temporary
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg'
    },

    nav: [
      { text: 'Tutorials', link: '/tutorials', activeMatch: '/tutorials/' },
      { text: 'Get the SDK', link: '/sdk', activeMatch: '/sdk/' },
      { text: 'Guides', link: '/guides', activeMatch: '/guides/' },
      { text: 'Documentation', link: '/documentation', activeMatch: '/documentation/' },
      { text: 'Examples', link: '/examples', activeMatch: '/examples/' },
      { text: 'Community', link: '/community', activeMatch: '/community/' },
      { text: 'More', link: '/more', activeMatch: '/more/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pebble-dev' },
      { icon: 'discord', link: 'https://rebble.io/discord' },
      { icon: 'twitter', link: 'https://twitter.com/pebble_dev' }
    ],

    search: {
      provider: 'local'
    }
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressConfigs, [
  {
    scanStartPath: 'tutorials',
    basePath: '/tutorials/',
    resolvePath: '/tutorials/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },
  {
    scanStartPath: 'guides',
    basePath: '/guides/',
    resolvePath: '/guides/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    useFolderLinkFromIndexFile: true,
  },
  {
    scanStartPath: 'documentation',
    basePath: '/documentation/',
    resolvePath: '/documentation/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    useFolderLinkFromIndexFile: true,
    collapsed: true,
  },
]))
