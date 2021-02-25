<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  const markdownUrl =
    'https://raw.githubusercontent.com/vikbert/awesome-symfony-1/master/README.md';
</script>

<RemoteMarkdown {markdownUrl} />
