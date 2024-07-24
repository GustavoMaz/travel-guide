<template>
<NavBar></NavBar>

<header>
  <h1>Descubra o mundo com a gente.</h1>
  <button>Reserve a sua aventura agora</button>
</header>

<main>
  <section id="culture">
    <h2>Cultura</h2>
    <h3>Experiências <span>culturais</span> inesquecíveis.</h3>
    <article>
      <RouterLink>
        <img src="#" alt="">
        <div class="classifier">Tour guiado</div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea alias corrupti impedit.</h1>
        <div class="rating">
          <img src="" alt=""> <!--Ícones de estrelas -->
          <span>4.5 / 5 (1680)</span>
        </div>
        <p>A partir de R$130,000 <span>por pessoa</span></p>
      </RouterLink>
    </article>
  </section>
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
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
</style>
