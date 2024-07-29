<template>
<ContentSection id="culture">
  <template v-slot:subtitleFiller>culturais</template>
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

  <TripCard
    rating="4.4"
    img="university-of-cambridge.jpg"
    imgAlt="Universidade de Cambridge"
  >
    <template v-slot:classifier>Tour guiado</template>
    <template v-slot:title>Cambridge: Excursão a pé guiada por estudantes da Universidade de Harvard</template>
    <template v-slot:amountOfRatings>2090</template>
    <template v-slot:price>99,90</template>
  </TripCard>

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