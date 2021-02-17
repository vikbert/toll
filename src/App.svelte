<script lang="ts">
  import RemoteMarkdown from './components/markdown/RemoteMarkdown.svelte';
  import Footer from './components/footer/Footer.svelte';
  import GitHub from './components/header/GitHub.svelte';
  import type GithubInfo from './types/GithubInfo';
  import Topbar from './components/header/Topbar.svelte';

  let open: boolean = false;

  const info: GithubInfo = {
    author: 'vikbert',
    project: 'toll',
  };
</script>

<header class="header">
  <Topbar>
    <GitHub {info} />
  </Topbar>
  <nav class="sidebar" class:open>sidebar</nav>
</header>

<main class="main">
  <div class="container">
    <RemoteMarkdown
      markdownUrl={'https://raw.githubusercontent.com/sitepoint-editors/awesome-symfony/master/README.md'}
    />
  </div>
</main>

<Footer {info} />

<svelte:head>
  <style>
    body,
    .topbar {
      background-color: white;
    }
  </style>
</svelte:head>

<style>

</style>
