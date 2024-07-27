<template>
<div @click="toggleDropdown">
  <slot name="title"  />
</div>
<ul :class="`dropdown level-${subMenuLevel}`" v-if="showDropdown">
  <slot />
</ul>
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
    return {
      showDropdown,
      toggleDropdown
    }
  }
}
</script>

<style>

</style>