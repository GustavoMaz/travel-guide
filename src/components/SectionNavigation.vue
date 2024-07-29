<template>
<nav id="section-navigation" class="section-navigation">
  <SectionNavigationItem route="/" selected="true">Cultura</SectionNavigationItem>
  <SectionNavigationItem route="/gastronomy">Gastronomia</SectionNavigationItem>
  <SectionNavigationItem route="/nature">Natureza</SectionNavigationItem>
  <SectionNavigationItem route="/sports">Esportes</SectionNavigationItem>
</nav>
</template>

<script>
import SectionNavigationItem from '@/components/SectionNavigationItem.vue';

export default {
  components: {
    SectionNavigationItem
  }
}
</script>

<style scoped>
nav {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  list-style: none;
  z-index: 2;
}

a {
  background-color: var(--shadow-color);
  border-radius: 16px 16px 0 0;
  width: 12rem;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  color: var(--primary);
}

</style>