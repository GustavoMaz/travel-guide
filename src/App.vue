<template>
<NavBar></NavBar>
<div @click="disableMenu">
  <TheHeader></TheHeader>
  <main id="page-view">
    <RouterView />
  </main>
  
  <TheFooter></TheFooter>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    NavBar,
    TheHeader,
    TheFooter
  },

  setup() {
    document.title = 'Guia de Viajem';

    const disableMenu = () => {
      const menu = document.querySelector('#main-navigation .nav-list');
      menu.classList.remove('active');
    }

    return {
      disableMenu
    }
  }
}
</script>