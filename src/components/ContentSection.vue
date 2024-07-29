<template>
  <section>
    <h2 class="section-title">Experiências <slot name="subtitleFiller" /> inesquecíveis.</h2>
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<style>
section {
  width: 100%;
  padding: var(--m-bottom-l) 2rem;
  box-sizing: border-box;
}

.section-title {
  margin-bottom: var(--m-bottom-m);
}

/*.section-title span {
  color: var(--dark-primary);
}*/

section .container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  margin: auto;
}

</style>