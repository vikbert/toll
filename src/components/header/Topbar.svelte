<script lang="ts">
  import { menuOpen } from '../../services/store';
  let open: boolean = false;

  menuOpen.subscribe((value) => {
    open = value;
  });

  const toggleMenu = () => {
    open = !open;
    menuOpen.set(open);
  };
</script>

<nav class="topbar space-between px-1">
  <div class="burger" class:open on:click={toggleMenu}>
    <span class="iconify" data-icon="ant-design:menu-outlined" data-inline="false" width="90"></span>
  </div>
  <img src="logo.png" class="logo" alt="logo" width="50" />
  <slot />
</nav>

<style>
  .burger {
    margin-left: 1rem;
  }
  .iconify {
    width: 90;
  }
  .logo {
    pointer-events: none;
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }
  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.16);
    }
  }
</style>
