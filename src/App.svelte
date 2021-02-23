<script>
  import { Router, Route, Link } from 'svelte-routing';
  import { menuOpen } from './services/store';
  import Footer from './components/footer/Footer.svelte';
  import GitHub from './components/header/GitHub.svelte';
  import type GithubInfo from './types/GithubInfo';
  import Topbar from './components/header/Topbar.svelte';
  import AwesomePython from './components/pages/AwesomePython.svelte';
  import AwesomeSymfony from './components/pages/AwesomeSymfony.svelte';
  import AwesomePhp from './components/pages/AwesomePHP.svelte';
import RemoteMarkdown from './components/markdown/RemoteMarkdown.svelte';
import AwesomeSymfonyEducation from './components/pages/AwesomeSymfonyEducation.svelte';

  const info: GithubInfo = {
    author: 'vikbert',
    project: 'toll',
  };

  const items: awesomeItem[] = [
    {
      link: 'symfony',
      title: 'Awesome Symfony',
    },
    {
      link: 'symfony-education',
      title: 'Awesome Symfony Education',
    },
    {
      link: 'python',
      title: 'Awesome Python',
    },
    {
      link: 'php',
      title: 'Awesome PHP',
    },
  ];

  let open: boolean = true;
  let activeNav: string = 'symfony';

  menuOpen.subscribe((value) => {
    open = value;
  });

  const setActiveNav = (name: string) => {
    activeNav = name;
  };
</script>

<header class="header">
  <Topbar>
    <GitHub {info} />
  </Topbar>
</header>
<Router url="/symfony">
  <nav class="sidebar" class:open>
    <ul>
      {#each items as item}
        <Link to={item.link}>
          <li
            class:active={activeNav === item.link}
            on:click={() => setActiveNav(item.link)}
          >
            {item.title}
          </li>
        </Link>
      {/each}
    </ul>
  </nav>
  <main class="main">
    <div class="container">
      <Route path={'symfony'} component={AwesomeSymfony} />
      <Route path={'php'} component={AwesomePhp} />
      <Route path={'python'} component={AwesomePython} />
      <Route path={'symfony-education'} component={AwesomeSymfonyEducation} />
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
