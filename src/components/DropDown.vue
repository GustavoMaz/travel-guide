<template>
<div @mouseover="mouseOverHandler" @mouseleave="isMouseOver = false">
  <div @click="toggleDropdown" class="dropdown-title">
    <slot name="title" /> 
  </div>
  <ul :class="`dropdown level-${subMenuLevel}`" v-if="showDropdown || isMouseOver">
    <slot />
  </ul>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    subMenuLevel: {
      type: Number,
      default: 0
    } 
  },

  setup() {
    const showDropdown = ref(false);
    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };

    const isMouseOver = ref(false);

    const mouseOverHandler = () => {
      isMouseOver.value = window.innerWidth > 765;
    }

    /*
    const mouseLeaveHandler = () => {setTimeout(() => {
      isMouseOver.value = false;
    }, 500)}
    */

    return {
      showDropdown,
      toggleDropdown,
      isMouseOver,
      mouseOverHandler
      // mouseLeaveHandler
    }
  }
}
</script>