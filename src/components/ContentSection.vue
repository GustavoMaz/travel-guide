<template>
  <section :id="sectionId">
    <h3>Experiências <slot name="subtitleFiller" /> inesquecíveis.</h3>
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sectionId: {
      type: String,
      required: true
    } 
  }
}
</script>