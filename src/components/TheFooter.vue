<template>
<footer>
  <nav>
    <ul class="nav-list">
      <li>
        <div id="suport">
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
        <div id="socials">
          <h2>Redes sociais</h2>
          <ul>
            <li><RouterLink to="https://www.instagram.com/" rel="external"><img src="../assets/socials/instagram.png" alt="Instagram" title="Instagram"></RouterLink></li>
            <li><RouterLink to="https://www.x.com/" rel="external"><img src="../assets/socials/x.png" alt="X" title="X"></RouterLink></li>
            <li><RouterLink to="https://www.facebook.com/" rel="external"><img src="../assets/socials/facebook.png" alt="Facebook" title="Facebook"></RouterLink></li>
          </ul>
        </div>
      </li>
      <li>
        <div id="company">
          <h2>Empresa</h2>
          <ul>
            <li><RouterLink to="#">Quem somos</RouterLink></li>
            <li><RouterLink to="#">Trabalhe conosco</RouterLink></li>
            <li><RouterLink to="#">Blog</RouterLink></li>
          </ul>
        </div>
      </li>
      <li>
        <div id="payment">
          <h2>Formas de pagamento</h2>
          <ul>
            <li><PaymentIcon img="mastercard" title="Mastercad" /></li>
            <li><PaymentIcon img="apple-pay" title="Apple Pay" /></li>
            <li><PaymentIcon img="google-pay" title="Google Pay" /></li>
            <li><PaymentIcon img="paypal" title="PayPal" /></li>
            <li><PaymentIcon img="pix" title="Pix" /></li>
            <li><PaymentIcon img="visa" title="Visa" /></li>
          </ul>
        </div>
      </li>

      <li>
        <div id="credits">
          <h2>Créditos</h2>
          <ul>
            <li><a href="https://www.flaticon.com/br/icones-gratis/lupa" rel="external">Ícone de lupa criado por Ayub Irawan - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/br/icones-gratis/estrela" rel="external">Ícone de estrela criado por Revicon - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/br/icones-gratis/logotipo-do-instagram" rel="external">Ícone Instagram criado por Freepik - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/br/icones-gratis/tweet" rel="external">Ícone X (Twitter) criado por Freepik - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/br/icones-gratis/facebook" rel="external">Ícone Facebook criado por Freepik - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/br/icones-gratis/menu-aberto" rel="external">Ícone de menu criado por Ilham Fitrotul Hayat - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/br/autores/pause08" rel="external">Ícones de livro, montanha, prato e bicicleta criados por Pause08 - Flaticon</a></li>
            <li>Imagens - <a href="https://www.pexels.com" rel="external">Pexels</a>, <a href="https://www.getyourguide.com" rel="external">GetYouGuide</a></li>
          </ul>
        </div>
      </li>

    </ul>
  </nav>
  <p>&copy; 2024 - Guia de Viajem | RS, Brasil</p>
</footer>
</template>

<script>
import PaymentIcon from '@/components/PaymentIcon.vue';

export default {
  components: {
    PaymentIcon
  }
}
</script>

<style scoped>
footer {
  background-color: var(--dark-primary);
  color: var(--bg-color);
  padding: 1.75rem 2rem;
}

nav ul.nav-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--m-bottom-l);
  margin-bottom: var(--m-bottom-l);
}

div ul, #credits {
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
}

li:has(> #credits) {
  grid-column: span 2;
}

#socials ul{
  display: flex;
  gap: 1rem;
}

#socials ul li a:hover {
  transform: scale(1.1);
}

#payment ul {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

#payment ul li {
  width: fit-content;
}

li { color: var(--light-primary); }

a {
  color: var(--light-primary);
  display: inline-block;
  margin-bottom: var(--m-bottom-s);
  width: fit-content;
  transition: .2s;
}

h2 {
  font-size: 1rem;
  margin-bottom: var(--m-bottom-xs);
}

a:hover {
  color: var(--bg-color);
}
</style>