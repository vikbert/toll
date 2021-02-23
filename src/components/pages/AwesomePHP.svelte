<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  const markdownUrl =
    'https://raw.githubusercontent.com/ziadoz/awesome-php/master/README.md';
</script>

<RemoteMarkdown {markdownUrl} />
