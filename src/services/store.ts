import { writable } from 'svelte/store';

export const menuOpen = writable(false);
export const pageItems = writable([
  {
    path: 'symfony',
    title: 'Awesome Symfony',
    info: 'A list of awesome Symfony bundles, utilities and resources collected by the community',
    icon: 'symfony',
  },
  {
    path: 'symfony-education',
    title: 'Awesome Symfony Education',
    info: 'A curated list of amazingly awesome Symfony articles, series and books.',
    icon: 'symfony',
  },
  {
    path: 'php',
    title: 'Awesome PHP',
    info: 'A curated list of amazingly awesome PHP libraries, resources and shiny things',
    icon: 'php',
  },
  {
    path: 'react',
    title: 'Awesome React',
    info: 'A collection of awesome things regarding the React ecosystem.s',
    icon: 'react',
  },
  {
    path: 'symfony-snippets',
    title: 'Awesome Symfony Snippets',
    info: 'A curated list of useful Symfony snippets. Code snippets for Symfony 2, 3, 4 and latest version',
    icon: 'symfony',
  },
  {
    path: 'mac-app',
    title: 'Awesome Mac App',
    info: 'List of awesome open source applications for macOS. This list contains a lot of native, and cross-platform apps. The main goal of this repository is to find free open source apps and start contributing. Feel free to contribute to the list, any suggestions are welcome!',
    icon: 'macos',
  },
  {
    path: 'react-hook',
    title: 'Awesome React Hook',
    info: 'List of awesome open source React Hooks and Hoos resources, tutorials and more!',
    icon: 'react',
  },
]);
