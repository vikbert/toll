<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  const markdownUrl =
    'https://raw.githubusercontent.com/fffaraz/awesome-github/master/README.md';
</script>

<RemoteMarkdown {markdownUrl} />
