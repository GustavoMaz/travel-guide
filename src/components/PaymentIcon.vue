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