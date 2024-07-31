<template>
  <div>
    <h1>{{ title }}</h1>
    <img :src="imgSrc" :alt="imgAlt" />
    <p>Rating: {{ rating }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officia placeat odit tenetur expedita quam error dolorem similique ex quas numquam, adipisci laboriosam, molestias libero delectus possimus quo. Similique, cum!</p>
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
