<template>
<ContentSection id="sports">
  <template v-slot:subtitleFiller>esportivas</template>
  <TripCard
    rating="4.5"
    img="liverpool.jpg"
    imgAlt="Estádio do Liverpool Football Club"
    title="Liverpool: Tour pelo Museu e Estádio do Liverpool Football Club"
    amountOfRatings="969"
    price="168,00"
  >
    <template v-slot:classifier>Tour guiado</template>
  </TripCard>

  <TripCard
    rating="4.9"
    img="zipline.jpg"
    imgAlt="Tirolesa em meio a floresta"
    title="Experiência de tirolesa em Whistler: Ziptrek Eagle Tour"
    amountOfRatings="1305"
    price="59,90"
  >
    <template v-slot:classifier>Radical</template>
  </TripCard>

  <TripCard
    rating="4.3"
    img="boat-rowing.jpg"
    imgAlt="Grupo de pessoas remando barco"
    title="Roma: Passeio de Rafting Urbano no Rio Tibre com Pizza Romana"
    amountOfRatings="1299"
    price="80,00"
  >
    <template v-slot:classifier>Tour guiado</template>
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