<template>
  <header>
    <div v-for="index in 3" :key="index" :class="`bg-img bg-img-${index}`" :style="{ opacity: headerBgImg === index ? 1 : 0 }"></div>
    <div class="container">
      <h1>Descubra o mundo com a gente.</h1>
      <button class="main-action-button bg-white">Reserve a sua aventura agora</button>
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

    const preloadImages = (imageArray) => {
      imageArray.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    onMounted(() => {
      preloadImages([
        '../assets/header/eiffel-tower.jpg',
        '../assets/header/greece.jpg',
        '../assets/header/pisa-tower.jpg',
      ]);

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
    };
  },
};
</script>

<style>
header {
  height: 80vh;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: inset 0 0 80px 40px var(--shadow-color);
  overflow: hidden;
  padding: 0 4rem
}

div.bg-img {
  filter: brightness(60%);
}

header .bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: 0 -10vw;
  background-repeat: no-repeat;
  background-size: cover;
  transition: opacity 1s ease-in-out;
}

header .bg-img-1 {
  background-image: url('../assets/header/eiffel-tower.jpg');
}

header .bg-img-2 {
  background-image: url('../assets/header/greece.jpg');
}

header .bg-img-3 {
  background-image: url('../assets/header/pisa-tower.jpg');
}

header .container {
  position: relative;
  top: 25%;
  z-index: 1;
  padding: 0 2rem;
}

header h1 {
  max-width: 40vw;
  color: var(--bg-color);
  text-shadow: 0 2px 8px var(--shadow-color);
  margin-bottom: var(--m-bottom-xl);
}
</style>
