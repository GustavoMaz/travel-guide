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
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  justify-items: center;
  column-gap: 2vw;
  margin: auto;
  /*
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  */
}

@media only screen and (max-width: 700px) {
  section > div {
    grid-template-columns: 1fr;
  }

  article {
    width: 100%;
  }
}

</style>