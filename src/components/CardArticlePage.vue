<template>
  <div class="container">
    <h1>{{ cardTitle }}</h1>
    <div class="rating-container">
      <div class="stars">
        <img
          src="../assets/rating/star.png"
          v-for="n in Math.floor(rating)"
          :key="n"
          class="rating-star"
        >
        <img src="../assets/rating/half-star.png" v-if="hasHalfStar" class="rating-star">
        <img
          src="../assets/rating/empty-star.png"
          v-for="n in emptyStars"
          :key="n"
          class="rating-star"
        >
      </div>
      <div class="rating">
        <span> {{ rating }} ({{ amountOfRatings }} avaliações)</span>
      </div>
    </div>
    <div class="content">
      <img :src="imgSrc" :alt="imgAlt" class="photo" />
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus eum ratione blanditiis aliquam consequatur accusamus doloremque consectetur. Deleniti numquam ipsam voluptates quidem necessitatibus aspernatur sunt quam quas vitae veniam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente eveniet omnis ratione itaque pariatur, beatae dolor corporis ab amet ea molestias perferendis unde neque non! Cupiditate reprehenderit ut atque.</p>
        <div class="price-container">
          <div>
            <p>A partir de <span class="price">R${{ price }}</span> por pessoa </p>
            <button class="main-action-button">Verificar disponibilidade</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const img = route.query.img || '';
    const imgAlt = route.query.imgAlt || '';
    const rating = parseFloat(route.query.rating) || 0;
    const price = route.query.price || '';
    const amountOfRatings = parseInt(route.query.amountOfRatings) || 0;
    /*const cardTitle = (route.query.cardTitle/*.replace(/-/g, ' ')
      .toLowerCase()
      .replace(/(^\w{1}|\s+\w{1})/gu, match => match.toUpperCase())) || '';*/
    const cardTitle = route.query.cardTitle || '';

    const imgSrc = computed(() => require(`../assets/photos/${img}`));

    const isFloat = (n) => Math.floor(n) !== n;
    const hasHalfStar = computed(() => isFloat(rating));
    const emptyStars = computed(() => 5 - Math.floor(rating) - (hasHalfStar.value ? 1 : 0));

    return {
      imgAlt,
      rating,
      cardTitle,
      imgSrc,
      price,
      amountOfRatings,
      hasHalfStar,
      emptyStars
    };
  }
})
</script>

<style scoped>
.container {
  padding: 0 2rem;
  margin: 0 auto var(--m-bottom-xl);
  width: fit-content;
  max-width: 1440px;
}

h1, .rating-container {
  margin-bottom: var(--m-bottom-s);
}

.rating-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: flex-start
}

.rating {
  color: var(--text-secondary);
}

.content {
  display: flex;
  gap: 2rem;
}

.content div p:last-of-type {
  margin-bottom: var(--m-bottom-l);
}

img.photo {
  object-fit: cover;
  max-width: 40%;
  min-width: 30%;
}

p {
  max-width: 42.5rem;
  margin-bottom: var(--m-bottom-s);
}

.price-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.price-container div {
  border-radius: 16px;
  /*box-shadow: 0 2px 16px var(--shadow-color);*/
  border: 1px solid var(--text-secondary);
  padding: 1rem;
}

.price {
  display: block;
  font-size: 1.5em;
  font-weight: 500;
}

@media only screen and (max-width: 765px) {
  h1 {
    font-size: 1.5em;
  }
  
  img.photo {
    width: 100%;
    max-width: none;
    max-height: 40vh;
  }

  .rating-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    margin-bottom: var(--m-bottom-l);
  }

  .content {
    flex-direction: column;
  }

  .price-container {
    align-items: center;
  }
}
</style>