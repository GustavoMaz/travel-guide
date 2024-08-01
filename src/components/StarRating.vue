<template>
<div class="rating-container">
  <div class="rating">
    <div class="stars">
      <img
        src="@/assets/rating/star.png"
        v-for="star in Math.floor(rating)"
        :key="star"
        class="rating-star"
      >
      <img src="@/assets/rating/half-star.png" v-if="hasHalfStar" class="rating-star">
      <img
        src="@/assets/rating/empty-star.png"
        v-for="star in emptyStars"
        :key="star"
        class="rating-star"
      >
    </div>
    <span class="rating">
      {{ rating }} / 5 ({{ amountOfRatings }})
    </span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true
    },
    amountOfRatings: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.rating-container {
  padding: 0 1rem 1rem;
  box-sizing: border-box;
}

div.rating {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /*margin-bottom: var(--m-bottom-s);*/
}

.rating-star {
  width: 1.5rem;
  height: 1.5rem;
}

span.rating {
  margin-left: 0.5rem;
  font-size: 0.8125rem;
}
</style>