<template>
<article>
  <RouterLink class="card">
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
          <h3>
            <slot name="title" />
          </h3>
        </div>
        
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
            <img src="@/assets/rating/empty-star.png"
              v-for="star in emptyStars"
              :key="star"
              class="rating-star"
            >
            </div>
              <span class="rating">
                {{ rating }} / 5 (<slot name="amountOfRatings" />)
              </span>
            </div>
            <p class="price">
              A partir de R$<slot name="price" /> por pessoa
            </p>
          </div>
      </div>
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

<style scoped>
article {
  margin: 0 2vw var(--m-bottom-l);
  
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
}

.card:hover img.thumbnail {
  transform: scale(1.1);
}

img.thumbnail {
  height: 288px;
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

.rating-container {
  padding: 0 1rem 1rem;
  box-sizing: border-box;
}

.classifier {
  color: var(--text-secondary);
  margin-bottom: var(--m-bottom-s);
}

h3 {
  margin-bottom: var(--m-bottom-m);
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