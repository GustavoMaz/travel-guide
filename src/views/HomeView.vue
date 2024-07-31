<template>
<TheHeader></TheHeader>
<main id="page-view">
  <RouterView />
</main>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}

</script>