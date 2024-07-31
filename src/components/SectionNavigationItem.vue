<template>
  <RouterLink :to="route" :class="{ 'selected': isSelected }" @click="handleClick">
    <slot />
  </RouterLink>
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

    // Observando mudanças na rota para mudar o valor de isSelected 
    watch(
      () => route.path,
      (newPath) => {
        isSelected.value = newPath === props.route;
      },
      { immediate: true }
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
