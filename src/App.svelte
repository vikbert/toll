<script>
  import { Router, Route, Link } from 'svelte-routing';
  import { menuOpen } from './services/store';
  import Footer from './components/footer/Footer.svelte';
  import GitHub from './components/header/GitHub.svelte';
  import type GithubInfo from './types/GithubInfo';
  import Header from './components/header/Header.svelte';
  import Hero from './components/header/Hero.svelte';
  import AppRoute, { componentConfig } from './AppRoute.svelte';

  const info: GithubInfo = {
    author: 'vikbert',
    project: 'toll',
  };

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
      {#each Object.values(componentConfig) as item}
        <Link to={item.path}>
          <li
            class:active={activeNav === item.path}
            on:click={() => setActiveNav(item.path)}
          >
            {item.title}
          </li>
        </Link>
      {/each}
    </ul>
  </nav>
  <main class="main">
    <Hero />
    <AppRoute />
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
