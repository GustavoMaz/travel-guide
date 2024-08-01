<template>
  <div>
    <h1>{{ title }}</h1>
    <img :src="imgSrc" :alt="imgAlt" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();

    const img = route.query.img || '';
    const imgAlt = route.query.imgAlt || '';
    const rating = parseFloat(route.query.rating) || 0;
    const title = route.query.title || '';

    const imgSrc = `@/assets/photos/${img}`;

    return {
      img,
      imgAlt,
      rating,
      title,
      imgSrc
    }
  }
})
</script>