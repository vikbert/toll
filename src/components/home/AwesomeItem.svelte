<script lang="ts">
  import {Router, link} from 'svelte-routing'
  export let title: string;
  export let info: string;
  export let path: string;
</script>

<div class="card shadow-lg">
  <div class="content">
    <div class="headline">
    <Router>
      <a href={path} use:link>
        <h4>{title}</h4>
      </a>
    </Router>
    </div>
    <p class="info">{info}</p>
  </div>
</div>

<style>
  .content {
    padding: 1rem 2rem;

  }
  .info {
    height: 75px;
    overflow: hidden;
    margin: 1rem 0;
  }
  a {
    color: black;
    font-weight: 500;
  }
  .headline {
    height: 43px;
    overflow: hidden;
  }
  h4:hover {
    opacity: 50%;
  }
</style>
