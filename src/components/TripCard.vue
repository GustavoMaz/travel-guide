<template>
<article>
    <RouterLink>
      <img 
        :src="imgSrc"
        :alt="imgAlt"
      >
      <div class="classifier">
        <slot name="classifier" />
      </div>
      <h1>
        <slot name="title" />
      </h1>
      <div class="rating">
        <img 
          src="@/assets/rating/star.png" 
          v-for="star in Math.floor(rating)"
          :key="star"
        >
        <img src="@/assets/rating/half-star.png" v-if="hasHalfStar">
        <img src="@/assets/rating/empty-star.png" 
          v-for="star in emptyStars"
          :key="star"
        >
        <span>
          {{ rating }} / 5 (<slot name="amountOfRatings" />)
        </span>
      </div>
      <p>
        A partir de R$<slot name="price" /> <span>por pessoa</span>
      </p>
    </RouterLink>
  </article>
  </template>

<script>
//import { computed } from 'vue';

export default {
  props: {
    img: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    }
  },

  setup() {
    const isFloat = (n) => Math.floor(n) !== n;

    return {
      isFloat
    }
  },

  computed: {
    hasHalfStar() {
      return this.isFloat(this.rating);
    },
    emptyStars() {
      return 5 - Math.floor(this.rating) - (this.hasHalfStar);
    },
    imgSrc() {
      return require(`@/assets/photos/${this.img}`);
    }
  }
}
</script>