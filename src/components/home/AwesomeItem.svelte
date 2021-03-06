<script lang="ts">
  import { Router, link } from 'svelte-routing';
  import Icon from './Icon.svelte';
  export let itemData: ItemType;
</script>

<div class="card shadow-lg">
  <div class="content">
    <div class="headline">
      <Router>
        <a href={itemData.path} use:link>
          <h4>{itemData.title}</h4>
        </a>
      </Router>
    </div>
    <div class="row">
      <div class="column column-75">
        <p class="info">{itemData.info}</p>
      </div>
      <div class="column column-25 text-centered">
        <Icon name={itemData.icon} />
      </div>
    </div>
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
