<script lang="ts">
    import type GithubInfo from "../../types/GithubInfo";

    export let info: GithubInfo;
    export let width = 30;
</script>

<div class="github">
    <a href={'https://github.com/' + [info.author, info.project].join('/')}>
		<span class="iconify"
              data-icon="ant-design:github-outlined"
              data-inline="false"
              {width}
        ></span>
    </a>
</div>

<style>
  a {
    line-height: 1.5rem;
  }
</style>
