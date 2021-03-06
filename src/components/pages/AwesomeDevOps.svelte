<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  const markdownUrl =
    'https://raw.githubusercontent.com/joubertredrat/awesome-devops/master/README.md';
</script>

<RemoteMarkdown {markdownUrl} />
