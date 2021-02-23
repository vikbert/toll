<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  const markdownUrl =
  'https://raw.githubusercontent.com/vinta/awesome-python/master/README.md';
</script>

<RemoteMarkdown {markdownUrl} />
