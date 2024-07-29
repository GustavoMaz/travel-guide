<template>
  <section>
    <h2 class="section-title">Experiências <slot name="subtitleFiller" /> inesquecíveis.</h2>
    <div>
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
  margin: 0 auto var(--m-bottom-m);
}

/*.section-title span {
  color: var(--dark-primary);
}*/

section > div {
  display: grid;
  grid-template-columns: repeat(auto-fit, 288px);
  justify-items: center;
  grid-gap: 1.5rem;
  margin: auto;
  /*
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  */
}

</style>