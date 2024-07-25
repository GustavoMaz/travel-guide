<template>
  <section :id="sectionId">
    <h2><slot name="title" /></h2>
    <h3>Experiências <slot name="subtitleFiller" /> inesquecíveis.</h3>
    <TripCard
      rating="4.8"
      img="david-sculpture.jpg"
      imgAlt="Escultura de Davi"
    >
      <template v-slot:classifier>Tour guiado</template>
      <template v-slot:title>Galeria da Academia de Belas Artes de Florença</template>
      <template v-slot:amountOfRatings>1680</template>
      <template v-slot:price>168,00</template>
    </TripCard>
  </section>
</template>

<script>
import TripCard from '@/components/TripCard.vue';

export default {
  props: {
    sectionId: {
      type: String,
      required: true
    } 
  },

  components: {
    TripCard
  }
}
</script>