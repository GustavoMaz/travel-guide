<template>
<NavBar></NavBar>

<TheHeader></TheHeader>

<nav id="section-navigation" class="section-navigation">
  <ul>
    <li>
      <RouterLink to="/">Cultura</RouterLink> 
    </li>
    
    <li>
      <RouterLink to="/gastronomy">Gastronomia</RouterLink> 
    </li>
    
    <li>
      <RouterLink to="/nature">Natureza</RouterLink> 
    </li>
    
    <li>
      <RouterLink to="/sports">Esportes</RouterLink> 
    </li>
  </ul>
</nav>

<main>
  <RouterView />
</main>

<TheFooter></TheFooter>

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
  }
}

</script>