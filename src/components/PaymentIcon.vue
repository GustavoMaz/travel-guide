<template>
  <img :src="require(`@/assets/payment-icons/${this.img}.png`)" :alt="title" :title="title">
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  background-color: #FFF;
  border-radius: 8px;
  padding: 4px;
  height: 1.5rem;
  width: 3rem;
  object-fit: contain;
}
</style>