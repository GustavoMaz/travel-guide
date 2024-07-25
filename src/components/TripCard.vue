<template>
<article>
    <RouterLink>
      <img :src="img" alt="">
      <div class="classifier">Tour guiado</div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea alias corrupti impedit.</h1>
      <div class="rating">
        <img 
          src="../assets/star.png" 
          v-for="star in Math.floor(rating)"
          :key="star"
        >
        <img src="../assets/half-star.png" v-if="displayHalfStar">
        <span>{{ rating }} / 5 (1680)</span>
      </div>
      <p>A partir de R$130,000 <span>por pessoa</span></p>
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
    rating: {
      type: Number,
      default: 3.5
    }
  },

  setup(props) {
    function isFloat(n) {
      return Math.floor(n) !== n;
    }
    const displayHalfStar = isFloat(props.rating);
    return {
      displayHalfStar
    }
  }
}
</script>