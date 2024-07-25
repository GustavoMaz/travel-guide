<template>
  <section :id="sectionId">
    <h2><slot name="title" /></h2>
    <h3>Experiências <slot name="subtitleFiller" /> inesquecíveis.</h3>
    <TripCard></TripCard>
  </section>
</template>

<script>
import TripCard from '@/components/TripCard.vue';

export default {
  props: {
    id: String,
  },

  components: {
    TripCard
  }
}
</script>