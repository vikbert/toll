<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  const markdownUrl =
    'https://raw.githubusercontent.com/pehapkari/awesome-symfony-education/master/README.md';
</script>

<RemoteMarkdown {markdownUrl} />
