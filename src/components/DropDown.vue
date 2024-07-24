<template>
<button>{{ text }}</button>
<ul class="dropdown">
  <slot />
</ul>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>