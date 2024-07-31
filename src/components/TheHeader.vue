<template>
  <header>
    <img v-for="index in 3" :key="index" :src="headerImages[index - 1]" :style="{ opacity: headerBgImg === index ? 1 : 0 }" class="bg-img" />
    <div class="container">
      <h1>Descubra o mundo com a gente.</h1>
      <a href="#page-view" class="main-action-button bg-white">Reserve a sua aventura agora</a>
    </div>
    
    <SectionNavigation />
  </header>
</template>

<script>
import { ref, onMounted } from 'vue';
import SectionNavigation from '@/components/SectionNavigation.vue';

export default {
  components: {
    SectionNavigation
  },

  setup() {
    const headerBgImg = ref(1);
    const headerImages = [
      require('../assets/header/eiffel-tower.jpg'),
      require('../assets/header/greece.jpg'),
      require('../assets/header/pisa-tower.jpg')
    ];

    const preloadImages = (imageArray) => {
      imageArray.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    onMounted(() => {
      preloadImages(headerImages);

      const changeBgImg = () => {
        setTimeout(() => {
          headerBgImg.value = headerBgImg.value % 3 + 1;
          changeBgImg();
        }, 2000);
      };
      changeBgImg();
    });

    return {
      headerBgImg,
      headerImages
    };
  },
};
</script>

<style>
header {
  height: 70vh;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: inset 0 0 80px 40px var(--shadow-color);
  overflow: hidden;
}

.bg-img {
  filter: brightness(60%);
}

header .bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  background-color: var(--shadow-color);
}

header .container {
  position: relative;
  top: 25%;
  z-index: 1;
  padding: 0 2rem;
}

header h1 {
  max-width: 650px;
  color: var(--bg-color);
  text-shadow: 0 2px 8px var(--shadow-color);
  margin-bottom: var(--m-bottom-xl);
}
</style>
