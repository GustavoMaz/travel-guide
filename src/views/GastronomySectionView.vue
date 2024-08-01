<template>
  <ContentSection id="gastronomy">
    <template v-slot:subtitleFiller>gastronômicas</template>
    
    <TripCard
      :rating="4"
      img="restaurant.jpg"
      imgAlt="Garçom servindo comida à mesa"
      title="Conheça o verdadeiro sabor da Itália"
      amountOfRatings="1243"
      price="150,00"
    >
      <template v-slot:classifier>Reserva</template>
    </TripCard>

    <TripCard
      :rating="4.2"
      img="sushi.jpg"
      imgAlt="Sushi"
      title="Passeio por Tokyo com sushi liberado"
      amountOfRatings="1142"
      price="200,00"
    >
      <template v-slot:classifier>Tour guiado</template>
    </TripCard>

    <TripCard
      :rating="4.8"
      img="fish.jpg"
      imgAlt="Peixe assado"
      title="Austrália: Passeio de barco com locais e jantar na praia"
      amountOfRatings="1544"
      price="120,00"
    >
      <template v-slot:classifier>Tour guiado</template>
    </TripCard>

    <TripCard
      :rating="4.5"
      img="dough.jpg"
      imgAlt="Massa de pizza"
      title="Workshop: Aprenda com um verdadeiro chef italiano como são feitas as melhores pizzas"
      amountOfRatings="1004"
      price="100,00"
    >
      <template v-slot:classifier>Mão na massa</template>
    </TripCard>

    <TripCard
      :rating="4.2"
      img="sushi.jpg"
      imgAlt="Sushi"
      title="Passeio por Tokyo com sushi liberado"
      amountOfRatings="1142"
      price="200,00"
    >
      <template v-slot:classifier>Tour guiado</template>
    </TripCard>

    <TripCard
      :rating="4.8"
      img="fish.jpg"
      imgAlt="Peixe assado"
      title="Austrália: Passeio de barco com locais e jantar na praia"
      amountOfRatings="1544"
      price="120,00"
    >
      <template v-slot:classifier>Tour guiado</template>
    </TripCard>

    <TripCard
      :rating="4"
      img="restaurant.jpg"
      imgAlt="Garçom servindo comida à mesa"
      title="Conheça o verdadeiro sabor da Itália"
      amountOfRatings="1243"
      price="150,00"
    >
      <template v-slot:classifier>Reserva</template>
    </TripCard>
    
    <TripCard
      :rating="4.5"
      img="dough.jpg"
      imgAlt="Massa de pizza"
      title="Workshop: Aprenda com um verdadeiro chef italiano como são feitas as melhores pizzas"
      amountOfRatings="1004"
      price="100,00"
    >
      <template v-slot:classifier>Mão na massa</template>
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
