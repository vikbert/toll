<script>
  import RemoteMarkdown from '../markdown/RemoteMarkdown.svelte';
  export let location;
  console.log(location.href);
  const markdownUrl =
    'https://raw.githubusercontent.com/vikbert/awesome-symfony/master/README.md';
</script>

<RemoteMarkdown {markdownUrl} />
