<template>
<nav id="section-navigation" class="section-navigation">
  <SectionNavigationItem route="/culture" :selected="currentRoute === '/culture'"><span v-if="!showIcon">Cultura</span> <img v-if="showIcon" src="../assets/culture.png"></SectionNavigationItem>
  <SectionNavigationItem route="/gastronomy" :selected="currentRoute === '/gastronomy'"><span v-if="!showIcon">Gastronomia</span> <img v-if="showIcon" src="../assets/gastronomy.png"></SectionNavigationItem>
  <SectionNavigationItem route="/nature" :selected="currentRoute === '/nature'"><span v-if="!showIcon">Natureza</span> <img v-if="showIcon" src="../assets/nature.png"></SectionNavigationItem>
  <SectionNavigationItem route="/sports" :selected="currentRoute === '/sports'"><span v-if="!showIcon">Esportes</span> <img v-if="showIcon" src="../assets/sports.png"></SectionNavigationItem>
</nav>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import SectionNavigationItem from '@/components/SectionNavigationItem.vue';

export default {
  components: {
    SectionNavigationItem
  },
  setup() {
    const windowWidth = ref(window.innerWidth);
    const showIcon = ref(windowWidth.value <= 765);

    const handleResize = () => {
      windowWidth.value = window.innerWidth;
      showIcon.value = windowWidth.value <= 765;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    const route = useRoute();
    const currentRoute = ref(route.path);

    return {
      showIcon,
      currentRoute
    };
  }
};
</script>

<style scoped>
nav {
  display: flex;
  flex-wrap: nowrap;
  /*justify-content: space-between;*/
  min-width: 765px;
  max-width: 1440px;
  margin: 0 auto;
  list-style: none;
  z-index: 2;
}

a {
  background-color: var(--shadow-color);
  border-radius: 16px 16px 0 0;
  width: 25%;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  color: var(--primary);
}

@media only screen and (max-width: 765px) {
  nav#section-navigation {
    min-width: 100%;
    width: 100%;
  }

  a {
    box-sizing: border-box;
    padding: 1rem;
  }
}
</style>
  