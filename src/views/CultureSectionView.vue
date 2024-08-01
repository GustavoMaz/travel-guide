<template>
  <ContentSection id="culture">
    <template v-slot:subtitleFiller>culturais</template>
    
    <TripCard
      :rating="4.8"
      img="david-sculpture.jpg"
      imgAlt="Escultura de Davi"
      title="Visita à Galeria da Academia de Belas Artes de Florença"
      amountOfRatings="1680"
      price="168,00"
    >
      <template v-slot:classifier>Tour guiado</template>
    </TripCard>

    <TripCard
      :rating="4.4"
      img="university-of-cambridge.jpg"
      imgAlt="Universidade de Cambridge"
      title="Cambridge: Excursão a pé guiada por estudantes da Universidade de Harvard"
      amountOfRatings="2090"
      price="99,90"
    >
      <template v-slot:classifier>Tour guiado</template>
    </TripCard>

    <TripCard
      :rating="4.5"
      img="athens.jpg"
      imgAlt="Templo de Atenas"
      title="Atenas: Cabo Sounion e Templo de Poseidon"
      amountOfRatings="1977"
      price="220,00"
    >
      <template v-slot:classifier>Tour guiado</template>
    </TripCard>

    <TripCard
      :rating="4"
      img="berlim.jpg"
      imgAlt="Portas de Brandenburgo, Berlim"
      title="Excursão a pé pelo Terceiro Reich em Berlim"
      amountOfRatings="863"
      price="165,00"
    >
      <template v-slot:classifier>Tour guiado</template>
    </TripCard>

    <TripCard
      :rating="4.4"
      img="university-of-cambridge.jpg"
      imgAlt="Universidade de Cambridge"
      title="Cambridge: Excursão a pé guiada por estudantes da Universidade de Harvard"
      amountOfRatings="2090"
      price="99,90"
    >
      <template v-slot:classifier>Tour guiado</template>
    </TripCard>

    <TripCard
      :rating="4.8"
      img="david-sculpture.jpg"
      imgAlt="Escultura de Davi"
      title="Visita à Galeria da Academia de Belas Artes de Florença"
      amountOfRatings="1680"
      price="168,00"
    >
      <template v-slot:classifier>Tour guiado</template>
    </TripCard>

    <TripCard
      :rating="4"
      img="berlim.jpg"
      imgAlt="Portas de Brandenburgo, Berlim"
      title="Excursão a pé pelo Terceiro Reich em Berlim"
      amountOfRatings="863"
      price="165,00"
    >
      <template v-slot:classifier>Tour guiado</template>
    </TripCard>

    <TripCard
      :rating="4.5"
      img="athens.jpg"
      imgAlt="Templo de Atenas"
      title="Atenas: Cabo Sounion e Templo de Poseidon"
      amountOfRatings="1977"
      price="220,00"
    >
      <template v-slot:classifier>Tour guiado</template>
    </TripCard>
  </ContentSection>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue';
import TripCard from '@/components/TripCard.vue';

export default {
  components: {
    ContentSection,
    TripCard
  }
}
</script>
