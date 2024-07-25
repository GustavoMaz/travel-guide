<template>
<NavBar></NavBar>

<TheHeader></TheHeader>

<main>
  <ContentSection sectionId="culture">
    <template v-slot:title>Cultura</template>
    <template v-slot:subtitleFiller>culturais</template>
  </ContentSection>
</main>

<footer>
<nav>
  <ul>
    <li>
      <div>
        <h2>Suporte</h2>
        <ul>
          <li><RouterLink to="#">Contato</RouterLink></li>
          <li><RouterLink to="#">Avisos legais</RouterLink></li>
          <li><RouterLink to="#">Política de privacidade</RouterLink></li>
          <li><RouterLink to="#">Termos e condições gerais</RouterLink></li>
        </ul>
      </div>
    </li>
    <li>
        <div>
          <h2>Redes sociais</h2>
          <ul>
            <li><img src="#" alt="Instagram"></li>
            <li><img src="#" alt="X"></li>
            <li><img src="#" alt="Facebook"></li>
          </ul>

        </div>
    </li>
    <li>
        <div>
          <h2>Empresa</h2>
          <ul>
            <li><RouterLink to="#">Quem somos</RouterLink></li>
            <li><RouterLink to="#">Trabalhe conosco</RouterLink></li>
            <li><RouterLink to="#">Blog</RouterLink></li>
          </ul>
        </div>
    </li>
    <li>
        <div>
          <h2>Formas de pagamento</h2>
          <ul>
            <li>
              <img src="@/assets/payment-icons/mastercard.png" alt="Mastercard">
            </li>
          </ul>
        </div>
    </li>

    <li>
      <div>
        <h2>Créditos</h2>
        <a href="https://www.flaticon.com/br/icones-gratis/lupa" rel="external">Ícone de lupa criado por Ayub Irawan - Flaticon</a>
        <a href="https://www.flaticon.com/br/icones-gratis/estrela" rel="external">Ícone de estrela criado por Revicon - Flaticon</a>
      </div>
    </li>

    <li><p>&copy; 2024 - Nome da empresa. RS, Brasil</p></li>
  </ul>
</nav>
</footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import TheHeader from '@/components/TheHeader.vue';
import ContentSection from '@/components/ContentSection.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    TheHeader,
    ContentSection
  }
}
</script>

<style>
</style>
