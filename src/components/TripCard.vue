<template>
  <article>
    <RouterLink
      class="card"
      :to="{
        path: `/${convertTitleToKebab}`,
        query: {
          img: img,
          imgAlt: imgAlt,
          rating: rating,
          price: price,
          amountOfRatings: amountOfRatings,
          cardTitle: cardTitle,
        }
      }"
    >
      <img 
        :src="imgSrc"
        :alt="imgAlt"
        class="thumbnail"
      >
      <div class="card-text">
        <div class="text-box">
          <div class="classifier">
            <slot name="classifier" />
          </div>
          <h3>{{ cardTitle }}</h3>
        </div>
        <div class="rating-container">
          <div class="rating">
            <div class="stars">
              <img
                src="@/assets/rating/star.png"
                v-for="n in Math.floor(rating)"
                :key="n"
                class="rating-star"
              >
              <img src="@/assets/rating/half-star.png" v-if="hasHalfStar" class="rating-star">
              <img
                src="@/assets/rating/empty-star.png"
                v-for="n in emptyStars"
                :key="n"
                class="rating-star"
              >
            </div>
            <span class="rating">
              {{ rating }} / 5 ({{ amountOfRatings }})
            </span>
          </div>
          <p class="price"> 
            A partir de R${{ price }} por pessoa
          </p>
        </div>
      </div>
    </RouterLink>
  </article>
</template>

<script>
import { computed } from 'vue';

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
    },
    amountOfRatings: {
      type: Number,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    cardTitle: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const isFloat = (n) => Math.floor(n) !== n;
    const hasHalfStar = computed(() => isFloat(props.rating));
    const emptyStars = computed(() => 5 - Math.floor(props.rating) - (hasHalfStar.value ? 1 : 0));
    const imgSrc = computed(() => require(`@/assets/photos/${props.img}`));
    const convertTitleToKebab = computed(() => props.cardTitle.toLowerCase().replace(/\s+/g, '-'));

    return {
      hasHalfStar,
      emptyStars,
      imgSrc,
      convertTitleToKebab
    };
  }
}
</script>

<style scoped>
article {
  margin: 0 2vw var(--m-bottom-l);
  width: 100%;
}

.card {
  border-radius: 16px;
  /*border: 2px solid var(--dark-bg-color);*/
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  color: var(--text-primary);
  overflow: hidden;
  box-shadow: 0 4px 4px var(--shadow-color);
  height: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.card:hover img.thumbnail {
  transform: scale(1.1);
}

img.thumbnail {
  /*min-width: 288px;*/
  min-height: 288px;
  max-height: 288px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
  transition: .3s ease;
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.text-box {
  border-top: 16px solid var(--primary);
  padding: var(--m-bottom-s) 1rem 0;
  box-sizing: border-box;
  z-index: 1;
}

.classifier {
  color: var(--text-secondary);
  margin-bottom: var(--m-bottom-s);
}

h3 {
  margin-bottom: var(--m-bottom-m);
}
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