<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  const markdownUrl =
    'https://raw.githubusercontent.com/neiesc/awesome-minimalist/main/README.md';
</script>

<RemoteMarkdown {markdownUrl} />
