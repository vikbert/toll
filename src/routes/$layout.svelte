<script lang="ts">
    import Footer from '$components/footer/Footer.svelte';
    import GitHub from '../components/header/GitHub.svelte';
    import type GithubInfo from "../types/GithubInfo";

    const info: GithubInfo = {author: 'vikbert', project: 'toll'};
</script>

<header class="header">
    <nav class="topbar">
        <div class="container space-between">
            <div class="log">
                <img src="logo.png" alt="toll" width="60"/>
            </div>
            <GitHub {info}/>
        </div>
    </nav>
</header>

<main class="main">
    <slot/>
</main>

<Footer {info}/>

<svelte:head>
    <style>
      body, .topbar {
        background-color: white;
      }
    </style>
</svelte:head>
