<template>
  <RouterLink :to="route" :class="{ 'selected': isSelected }" @click="handleClick"> <slot /> </RouterLink>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: {
    route: {
      type: String,
      required: true
    },

    selected: {
      type: Boolean,
      default: false
    },
  },
  
  setup(props) {
    const route = useRoute();
    const isSelected = ref(props.selected);

    // Watch for changes in the route to update isSelected
    watch(
      () => route.path,
      (newPath) => {
        isSelected.value = newPath === props.route;
      },
      { immediate: true } // Trigger immediate check on component mount
    );

    const handleClick = () => {
      isSelected.value = true;
    };

    return {
      isSelected,
      handleClick
    };
  }
}
</script>

<style scoped>
.selected {
  background-color: var(--bg-color);
}
</style>
