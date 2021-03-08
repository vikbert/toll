<script context="module">
  interface Map {
    [key: string]: ItemType;
  }
  export const componentConfig: Map = {
    symfony: {
      path: 'symfony',
      title: 'Awesome Symfony',
      info:
        'A list of awesome Symfony bundles, utilities and resources collected by the community',
      icon: 'symfony',
      component: AwesomeSymfony,
    },
    php: {
      path: 'php',
      title: 'Awesome PHP',
      info:
        'A curated list of amazingly awesome PHP libraries, resources and shiny things',
      icon: 'php',
      component: AwesomePhp,
    },
    'symfony-education': {
      path: 'symfony-education',
      title: 'Awesome Symfony Education',
      info:
        'A curated list of amazingly awesome Symfony articles, series and books.',
      icon: 'symfony',
      component: AwesomeSymfonyEducation,
    },
    react: {
      path: 'react',
      title: 'Awesome React',
      info: 'A collection of awesome things regarding the React ecosystem.s',
      icon: 'react',
      component: AwesomeReact,
    },
    'symfony-snippets': {
      path: 'symfony-snippets',
      title: 'Awesome Symfony Snippets',
      info:
        'A curated list of useful Symfony snippets. Code snippets for Symfony 2, 3, 4 and latest version',
      icon: 'symfony',
      component: AwesomeSymfonySnippets,
    },
    'mac-app': {
      path: 'mac-app',
      title: 'Awesome Mac App',
      info:
        'List of awesome open source applications for macOS. This list contains a lot of native, and cross-platform apps. The main goal of this repository is to find free open source apps and start contributing. Feel free to contribute to the list, any suggestions are welcome!',
      icon: 'macos',
      component: AwesomeMacApp,
    },
    'react-hook': {
      path: 'react-hook',
      title: 'Awesome React Hook',
      info:
        'List of awesome open source React Hooks and Hoos resources, tutorials and more!',
      icon: 'hook',
      component: AwesomeReactHook,
    },
    'dev-ops': {
      path: 'dev-ops',
      title: 'Awesome DevOps',
      info:
        'This is the awesome list with all open source and free applications that you can use in your management.',
      icon: 'devops',
      component: AwesomeDevOps,
    },
    'github': {
      path: 'github',
      title: 'Awesome GitHub',
      info:
        'A curated list of awesome GitHub tools, libraries, resources, and shiny things.',
      icon: 'github',
      component: AwesomeGitHub,
    },
    'minimalist-framework': {
      path: 'minimalist-framework',
      title: 'Awesome Minimal Framework',
      info:
        'A curated list of awesome resources, pointers, and tips related to minimalist frameworks (simple and lightweight) Everything in alphabetical order',
      icon: 'stack',
      component: AwesomeMinimalistFramework,
    },
    'database-tool': {
      path: 'database-tool',
      title: 'Awesome Database Tool',
      info:
        'Here we will collect information about awesome useful and awesome experimental tools that simplify working with databases for DBA, DevOps, Developers and mere mortals.',
      icon: 'database',
      component: AwesomeDatabase,
    },
    'ddd': {
      path: 'ddd',
      title: 'Awesome DDD',
      info:
        'Here we will collect information about awesome useful and awesome experimental tools that simplify working with databases for DBA, DevOps, Developers and mere mortals.',
      icon: 'architecture',
      component: AwesomeDDD,
    },
  };
</script>

<script>
  import { Route } from 'svelte-routing';
  import { pageItems } from './services/store';
  import AwesomeList from './components/home/AwesomeList.svelte';
  import AwesomeSymfony from './components/pages/AwesomeSymfony.svelte';
  import AwesomePhp from './components/pages/AwesomePHP.svelte';
  import AwesomeSymfonyEducation from './components/pages/AwesomeSymfonyEducation.svelte';
  import AwesomeReact from './components/pages/AwesomeReact.svelte';
  import AwesomeSymfonySnippets from './components/pages/AwesomeSymfonySnippets.svelte';
  import AwesomeMacApp from './components/pages/AwesomeMacApp.svelte';
  import AwesomeReactHook from './components/pages/AwesomeReactHook.svelte';
  import AwesomeDevOps from './components/pages/AwesomeDevOps.svelte';
  import AwesomeGitHub from './components/pages/AwesomeGitHub.svelte';
  import AwesomeDatabase from './components/pages/AwesomeDatabase.svelte';
  import AwesomeMinimalistFramework from './components/pages/AwesomeMinimalistFramework.svelte';
  import AwesomeDDD from './components/pages/AwesomeDDD.svelte';

  pageItems.subscribe((value) => {
    const items = value;
  });
</script>

<!-- homepage component, if route is empty -->
<Route path="" component={AwesomeList} />

<!-- dynamic component routes -->
{#each Object.keys(componentConfig) as key}
  <Route path={key} component={componentConfig[key]['component']} />
{/each}
