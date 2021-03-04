<script lang="ts">
  import AwesomeItem from './AwesomeItem.svelte';
  import { pageItems } from '../../services/store';

  let projects: ItemType[] = [];
  pageItems.subscribe((value) => {
    projects = value;
  });
</script>

<div class="container">
  <div class="centered-xy my-2" />
  <div class="items">
    {#each projects as projectData}
      <div class="item">
        <AwesomeItem {...projectData} />
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 112rem !important;
  }
  .items {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  @media (max-width: 480px) {
    .items {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
</style>
