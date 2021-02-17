<script lang="ts">
  import Footer from './components/footer/Footer.svelte';
  import GitHub from './components/header/GitHub.svelte';
  import type GithubInfo from './types/GithubInfo';

  const info: GithubInfo = {
    author: 'vikbert',
    project: 'toll',
  };
</script>

<header class="header">
  <nav class="topbar">
    <div class="container space-between">
      <img src="logo.png" class="logo" alt="logo" width="50" />
      <GitHub {info} />
    </div>
  </nav>
</header>

<main class="main">
  <div class="container">it works</div>
</main>

<Footer {info} />

<svelte:head>
  <style>
    body, .topbar {
      background-color: white;
    }
  </style>
</svelte:head>

<style>
  .logo {
    pointer-events: none;
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }
  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.16);
    }
  }
</style>
