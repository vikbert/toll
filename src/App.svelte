<script>
  import { Router, Route, Link } from 'svelte-routing';
  import { menuOpen } from './services/store';
  import Footer from './components/footer/Footer.svelte';
  import GitHub from './components/header/GitHub.svelte';
  import type GithubInfo from './types/GithubInfo';
  import Header from './components/header/Header.svelte';
  import AwesomeSymfony from './components/pages/AwesomeSymfony.svelte';
  import AwesomePhp from './components/pages/AwesomePHP.svelte';
  import AwesomeSymfonyEducation from './components/pages/AwesomeSymfonyEducation.svelte';
  import AwesomeReact from './components/pages/AwesomeReact.svelte';
  import AwesomeSymfonySnippets from './components/pages/AwesomeSymfonySnippets.svelte';
  import AwesomeMacApp from './components/pages/AwesomeMacApp.svelte';
  import AwesomeList from './components/home/AwesomeList.svelte';
  import {pageItems} from './services/store';
import Hero from './components/header/Hero.svelte';

  const info: GithubInfo = {
    author: 'vikbert',
    project: 'toll',
  };

  let items: ItemType[] = [];
  pageItems.subscribe(value => {
    items = value;
  });

  let open: boolean = true;
  let activeNav: string = 'symfony';

  menuOpen.subscribe((value) => {
    open = value;
  });

  const setActiveNav = (name: string) => {
    activeNav = name;
  };

  const handleCloseSidebar = () => {
    if (open === true) {
      open = false;
      menuOpen.set(false);
    }
  };

  export let url = '';
</script>

<header class="header">
  <Header>
    <GitHub {info} />
  </Header>
</header>
<Router {url}>
  <nav class="sidebar" class:open>
    <ul>
      {#each items as item}
        <Link to={item.path}>
          <li
            class:active={activeNav === item.path}
            on:click={() => setActiveNav(item.path)}
          >
            {item.path}
          </li>
        </Link>
      {/each}
    </ul>
  </nav>
  <main class="main">
    <Hero/>
    <div class="container" on:click={handleCloseSidebar}>
      <Route path={''} component={AwesomeList} />
      <Route path={'symfony'} component={AwesomeSymfony} />
      <Route path={'php'} component={AwesomePhp} />
      <Route path={'symfony-education'} component={AwesomeSymfonyEducation} />
      <Route path={'react'} component={AwesomeReact} />
      <Route path={'symfony-snippets'} component={AwesomeSymfonySnippets} />
      <Route path={'mac-app'} component={AwesomeMacApp} />
    </div>
  </main>
</Router>
<Footer {info} />

<svelte:head>
  <style>
    body {
      background-color: white;
    }
  </style>
</svelte:head>

<style>
  .sidebar {
    background-color: white;
  }
  ul {
    margin-top: 2rem;
    padding: 1rem 0;
    list-style: none;
  }
  li {
    padding: 1rem 1rem 1rem 2rem;
    margin: 0;
  }
  li.active {
    background-color: #7b2083;
    color: white;
    font-weight: bold;
  }
  li:hover {
    background-color: #7b208385;
    color: white;
  }
</style>
