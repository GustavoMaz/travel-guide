<template>
<ContentSection id="sports">
  <template v-slot:subtitleFiller>esportivas</template>
  <TripCard
    rating="4.5"
    img="liverpool.jpg"
    imgAlt="Estádio do Liverpool Football Club"
  >
    <template v-slot:classifier>Tour guiado</template>
    <template v-slot:title>Liverpool: Tour pelo Museu e Estádio do Liverpool Football Club</template>
    <template v-slot:amountOfRatings>969</template>
    <template v-slot:price>168,00</template>
  </TripCard>

  <TripCard
    rating="4.9"
    img="zipline.jpg"
    imgAlt="Tirolesa em meio a floresta"
  >
    <template v-slot:classifier>Radical</template>
    <template v-slot:title>Experiência de tirolesa em Whistler: Ziptrek Eagle Tour</template>
    <template v-slot:amountOfRatings>1305</template>
    <template v-slot:price>59,90</template>
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