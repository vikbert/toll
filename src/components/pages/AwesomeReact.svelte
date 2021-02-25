<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  const markdownUrl =
    'https://raw.githubusercontent.com/vikbert/awesome-react/master/README.md';
</script>

<RemoteMarkdown {markdownUrl} />
