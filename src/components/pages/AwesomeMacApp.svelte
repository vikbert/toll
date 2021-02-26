<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  const markdownUrl =
    'https://raw.githubusercontent.com/vikbert/open-source-mac-os-apps/master/README.md';
</script>

<RemoteMarkdown {markdownUrl} />
