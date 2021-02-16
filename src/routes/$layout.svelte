<script lang="ts">
    import Footer from '$components/footer/Footer.svelte';
</script>

<header class="header">
    <nav class="topbar">
        <div class="container space-between">
            <div class="log">logo</div>
            <div class="nav">
                <div>
                    <a href="/">index</a>
                    <a href="/about">about</a>
                </div>
            </div>
        </div>
    </nav>
</header>

<main class="main">
    <slot/>
</main>

<Footer info={{author: 'vikbert', project: 'toll'}}/>

<svelte:head>
    <style>
      body {
        background-color: white;
      }
    </style>
</svelte:head>
