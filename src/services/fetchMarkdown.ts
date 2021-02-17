const fetchMarkdown: Promise<string> = (async () => {
  const response = await fetch('https://raw.githubusercontent.com/sitepoint-editors/awesome-symfony/master/README.md');
  const data = await response.blob();

  return await data.text();
})();
