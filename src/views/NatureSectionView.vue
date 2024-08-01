<template>
  <ContentSection id="nature">
    <template v-slot:subtitleFiller>na natureza</template>
    <TripCard
      :rating="4"
      img="forest.jpg"
      imgAlt="Trilha na floresta"
      title="Caminhada pela verdejante floresta de Monteverde"
      amountOfRatings="2003"
      price="79,90"
    >
      <template v-slot:classifier>Trilha</template>
    </TripCard>

    <TripCard
      :rating="4.3"
      img="boat.jpg"
      imgAlt="Barco na superfície de lagoa"
      title="Passeio de barco com locais"
      amountOfRatings="1060"
      price="89,90"
    >
      <template v-slot:classifier>Atividade na água</template>
    </TripCard>

    <TripCard
      :rating="4"
      img="hill.jpg"
      imgAlt="Trilha passando por colinas"
      title="Trilha de 3 horas pelas colinas da Califórnia"
      amountOfRatings="800"
      price="99,90"
    >
      <template v-slot:classifier>Trilha</template>
    </TripCard>

    <TripCard
      :rating="4.9"
      img="whale.jpg"
      imgAlt="Baleia saltando para fora d'água"
      title="Observação de baleias e golfinhos"
      amountOfRatings="778"
      price="110,00"
    >
      <template v-slot:classifier>Atividade na água</template>
    </TripCard>

    <TripCard
      :rating="4"
      img="forest.jpg"
      imgAlt="Trilha na floresta"
      title="Caminhada pela verdejante floresta de Monteverde"
      amountOfRatings="2003"
      price="79,90"
    >
      <template v-slot:classifier>Trilha</template>
    </TripCard>

    <TripCard
      :rating="4.3"
      img="boat.jpg"
      imgAlt="Barco na superfície de lagoa"
      title="Passeio de barco com locais"
      amountOfRatings="1060"
      price="89,90"
    >
      <template v-slot:classifier>Atividade na água</template>
    </TripCard>

    <TripCard
      :rating="4"
      img="hill.jpg"
      imgAlt="Trilha passando por colinas"
      title="Trilha de 3 horas pelas colinas da Califórnia"
      amountOfRatings="800"
      price="99,90"
    >
      <template v-slot:classifier>Trilha</template>
    </TripCard>

    <TripCard
      :rating="4.9"
      img="whale.jpg"
      imgAlt="Baleia saltando para fora d'água"
      title="Observação de baleias e golfinhos"
      amountOfRatings="778"
      price="110,00"
    >
      <template v-slot:classifier>Atividade na água</template>
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
