<template>
  <ContentSection id="nature">
    <template v-slot:subtitleFiller>na natureza</template>
    <TripCard
      :rating="4"
      img="forest.jpg"
      imgAlt="Trilha na floresta"
      title="Caminhada pela verdejante floresta de Monteverde"
    >
      <template v-slot:classifier>Trilha</template>
      <template v-slot:amountOfRatings>2003</template>
      <template v-slot:price>79,90</template>
    </TripCard>

    <TripCard
      :rating="4.3"
      img="boat.jpg"
      imgAlt="Barco na superfície de lagoa"
      title="Passeio de barco com locais"
    >
      <template v-slot:classifier>Atividade na água</template>
      <template v-slot:amountOfRatings>1060</template>
      <template v-slot:price>89,90</template>
    </TripCard>

    <TripCard
      :rating="4"
      img="hill.jpg"
      imgAlt="Trilha passando por colinas"
      title="Trilha de 3 horas pelas colinas da Califórnia"
    >
      <template v-slot:classifier>Trilha</template>
      <template v-slot:amountOfRatings>800</template>
      <template v-slot:price>99,90</template>
    </TripCard>

    <TripCard
      :rating="4.9"
      img="whale.jpg"
      imgAlt="Baleia saltando para fora d'água"
      title="Observação de baleias e golfinhos"
    >
      <template v-slot:classifier>Atividade na água</template>
      <template v-slot:amountOfRatings>778</template>
      <template v-slot:price>110,00</template>
    </TripCard>

    <TripCard
      :rating="4"
      img="forest.jpg"
      imgAlt="Trilha na floresta"
      title="Caminhada pela verdejante floresta de Monteverde"
    >
      <template v-slot:classifier>Trilha</template>
      <template v-slot:amountOfRatings>2003</template>
      <template v-slot:price>79,90</template>
    </TripCard>

    <TripCard
      :rating="4.3"
      img="boat.jpg"
      imgAlt="Barco na superfície de lagoa"
      title="Passeio de barco com locais"
    >
      <template v-slot:classifier>Atividade na água</template>
      <template v-slot:amountOfRatings>1060</template>
      <template v-slot:price>89,90</template>
    </TripCard>

    <TripCard
      :rating="4"
      img="hill.jpg"
      imgAlt="Trilha passando por colinas"
      title="Trilha de 3 horas pelas colinas da Califórnia"
    >
      <template v-slot:classifier>Trilha</template>
      <template v-slot:amountOfRatings>800</template>
      <template v-slot:price>99,90</template>
    </TripCard>

    <TripCard
      :rating="4.9"
      img="whale.jpg"
      imgAlt="Baleia saltando para fora d'água"
      title="Observação de baleias e golfinhos"
    >
      <template v-slot:classifier>Atividade na água</template>
      <template v-slot:amountOfRatings>778</template>
      <template v-slot:price>110,00</template>
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
