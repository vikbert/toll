<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  const markdownUrl =
    'https://raw.githubusercontent.com/rehooks/awesome-react-hooks/master/README.md';
</script>

<RemoteMarkdown {markdownUrl} />
