<template>
<NavBar></NavBar>
<TheHeader></TheHeader>
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