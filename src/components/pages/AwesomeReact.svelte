<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  const markdownUrl =
    'https://raw.githubusercontent.com/enaqx/awesome-react/master/README.md';
</script>

<RemoteMarkdown {markdownUrl} />
