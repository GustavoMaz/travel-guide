<template>
<article>
    <RouterLink>
      <img :src="img" :alt="imgAlt">
      <div class="classifier"><slot name="classifier" /></div>
      <h1><slot name="title" /></h1>
      <div class="rating">
        <img 
          src="../assets/star.png" 
          v-for="star in Math.floor(rating)"
          :key="star"
        >
        <img src="../assets/half-star.png" v-if="displayHalfStar">
        <img src="../assets/empty-star.png" 
          v-for="star in emptyStars"
          :key="star"
        >
        <span>{{ rating }} / 5 (<slot name="amountOfRatings" />)</span>
      </div>
      <p>A partir de R$ <slot name="price" /> <span>por pessoa</span></p>
    </RouterLink>
  </article>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: 'https://placehold.co/288x288'
    },
    imgAlt: {
      type: String
    },
    rating: {
      type: Number,
      default: 4
    },
    price: {
      type: String,
      default: '99,90'
    }
  },

  setup(props) {
    function isFloat(n) {
      return Math.floor(n) !== n;
    }
    const displayHalfStar = isFloat(props.rating);
    const emptyStars = 5- Math.floor(props.rating) - displayHalfStar;


    return {
      displayHalfStar,
      emptyStars
    }
  }
}
</script>