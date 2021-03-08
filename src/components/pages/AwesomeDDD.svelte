<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  const markdownUrl =
    'https://raw.githubusercontent.com/heynickc/awesome-ddd/master/readme.md';
</script>

<RemoteMarkdown {markdownUrl} />
