<template>
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
            <li><RouterLink to="https://www.instagram.com/" rel="external"><img src="#" alt="Instagram" title="Instagram"></RouterLink></li>
            <li><RouterLink to="https://www.x.com/" rel="external"><img src="#" alt="X" title="X"></RouterLink></li>
            <li><RouterLink to="https://www.facebook.com/" rel="external"><img src="#" alt="Facebook" title="Facebook"></RouterLink></li>
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
import PaymentIcon from '@/components/PaymentIcon.vue';

export default {
  components: {
    PaymentIcon
  }
}
</script>