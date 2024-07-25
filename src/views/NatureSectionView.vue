<template>
<ContentSection id="nature">
  <template v-slot:subtitleFiller>na natureza</template>
  <TripCard
    rating="4"
    img="forest.jpg"
    imgAlt="Trilha na floresta"
  >
    <template v-slot:classifier>Trilha</template>
    <template v-slot:title>Caminhada pelas verdejante floresta Monteverde</template>
    <template v-slot:amountOfRatings>2003</template>
    <template v-slot:price>79,90</template>
  </TripCard>

  <TripCard
    rating="4.3"
    img="boat.jpg"
    imgAlt="Barco na superfície de lagoa"
  >
    <template v-slot:classifier>Atividade na água</template>
    <template v-slot:title>Passeio de barco com locais</template>
    <template v-slot:amountOfRatings>1060</template>
    <template v-slot:price>89,90</template>
  </TripCard>
</ContentSection>
</template>

<script>
import TripCard from '@/components/TripCard.vue';
import ContentSection from '@/components/ContentSection.vue';


export default {
  components: {
    ContentSection,
    TripCard
  }
}
</script>