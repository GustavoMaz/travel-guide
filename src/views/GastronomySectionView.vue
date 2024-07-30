<template>
<ContentSection id="gastronomy">
  <template v-slot:subtitleFiller>gastronômicas</template>
  <TripCard
    :rating="4"
    img="restaurant.jpg"
    alt="Garçom servindo comida à mesa"
  >
    <template v-slot:classifier>Reserva</template>
    <template v-slot:title>Conheça o verdadeiro sabor da Itália</template>
    <template v-slot:amountOfRatings>1243</template>
    <template v-slot:price>150,00</template>
  </TripCard>

  <TripCard
    :rating="4.2"
    img="sushi.jpg"
    alt="Sushi"
  >
    <template v-slot:classifier>Tour guiado</template>
    <template v-slot:title>Passeio por Tokyo com sushi liberado</template>
    <template v-slot:amountOfRatings>1142</template>
    <template v-slot:price>200,00</template>
  </TripCard>

  <TripCard
    :rating="4.8"
    img="fish.jpg"
    alt="Peixe assado"
  >
    <template v-slot:classifier>Tour guiado</template>
    <template v-slot:title>Austrália: Passeio de barco com locais e jantar na praia</template>
    <template v-slot:amountOfRatings>1544</template>
    <template v-slot:price>120,00</template>
  </TripCard>

  <TripCard
    :rating="4.5"
    img="dough.jpg"
    alt="Massa de pizza"
  >
    <template v-slot:classifier>Mão na massa</template>
    <template v-slot:title>Workshop: Aprenda com um verdadeiro chef italiano como são feitas as melhores pizzas</template>
    <template v-slot:amountOfRatings>1004</template>
    <template v-slot:price>100,00</template>
  </TripCard>

  <TripCard
    :rating="4.2"
    img="sushi.jpg"
    alt="Sushi"
  >
    <template v-slot:classifier>Tour guiado</template>
    <template v-slot:title>Passeio por Tokyo com sushi liberado</template>
    <template v-slot:amountOfRatings>1142</template>
    <template v-slot:price>200,00</template>
  </TripCard>

  <TripCard
    :rating="4.8"
    img="fish.jpg"
    alt="Peixe assado"
  >
    <template v-slot:classifier>Tour guiado</template>
    <template v-slot:title>Austrália: Passeio de barco com locais e jantar na praia</template>
    <template v-slot:amountOfRatings>1544</template>
    <template v-slot:price>120,00</template>
  </TripCard>

  <TripCard
    :rating="4"
    img="restaurant.jpg"
    alt="Garçom servindo comida à mesa"
  >
    <template v-slot:classifier>Reserva</template>
    <template v-slot:title>Conheça o verdadeiro sabor da Itália</template>
    <template v-slot:amountOfRatings>1243</template>
    <template v-slot:price>150,00</template>
  </TripCard>
  
  <TripCard
    :rating="4.5"
    img="dough.jpg"
    alt="Massa de pizza"
  >
    <template v-slot:classifier>Mão na massa</template>
    <template v-slot:title>Workshop: Aprenda com um verdadeiro chef italiano como são feitas as melhores pizzas</template>
    <template v-slot:amountOfRatings>1004</template>
    <template v-slot:price>100,00</template>
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