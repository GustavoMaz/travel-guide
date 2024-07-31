<template>
<div id="page-container">
  <NavBar></NavBar>
  <div @click="disableMenu">
    <RouterView />
  </div>
  <TheFooter />
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    NavBar,
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

<style>
/* Grudando o rodapé na parte de baixo da página, independentemente do tamanho da tela */
html, body, #page-container {
  height: 100vh;
}

#page-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>