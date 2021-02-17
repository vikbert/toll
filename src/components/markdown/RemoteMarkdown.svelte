<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  export let markdownUrl: string;

  const fetchMarkdown = (async () => {
    const response = await fetch(markdownUrl);
    const data = await response.blob();

    return await data.text();
  })();
</script>

<div class="container markdown-container">
  {#await fetchMarkdown}
    Loading markdown ...
  {:then result}
    <SvelteMarkdown source={result} />
  {:catch error}
    laoding markdown failed : {error}
  {/await}
</div>

<style>
  .markdown-container {
    padding-top: 3rem;
  }
</style>
