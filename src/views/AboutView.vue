<template>
  <section id="about">
    <h1>Sobre nós</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe qui explicabo ipsam dolores, libero ea aperiam doloribus deserunt ab, amet quisquam sapiente? Temporibus, recusandae. Rerum a officia dolorum aut at! Nesciunt sit vero iste sunt perferendis aperiam ab, ea dolorem officiis numquam quos exercitationem illo, laboriosam soluta temporibus, sapiente modi. Itaque, ab accusamus! Esse deleniti sint veritatis quos possimus? Facere!</p>
    <img src="../assets/plane.jpg" alt="Avião decolando">

    <img src="../assets/friend-group.jpg" alt="Grupo de amigos">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita ipsa vel ratione, voluptas non, id accusamus vitae delectus tenetur nostrum doloremque architecto repellat sed sunt sint. Tempore, architecto laborum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, ab. Mollitia enim id ea, fugit eligendi porro illum magnam et reprehenderit eaque reiciendis tempore dolores maiores molestias hic, perspiciatis soluta!</p>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente aliquid, doloribus, veniam eum cupiditate tempore quam voluptatem odio ut qui error, repudiandae repellendus. Eaque quidem quibusdam omnis reiciendis dolore sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. In, maiores tenetur! Amet quasi magnam corrupti voluptatibus explicabo architecto deleniti quaerat similique vel enim? Voluptatibus consectetur pariatur alias similique veritatis sunt?</p>
    <img src="../assets/dinner.jpg" alt="Jantar em grupo">
  </section>
</template>

<style scoped>
#about {
  max-width: 1440px;
  margin: auto;
  margin-bottom: var(--m-bottom-xxl);
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-gap: 1rem;
  align-items: center;
}

h1 {
  margin-bottom: var(--m-bottom-m);
  font-size: 2rem;
  grid-column: span 2;
}

p {
  max-width: 42.5rem;
  margin: auto, 0, /*var(--m-bottom-m)*/0, auto;
}

img { 
  width: 100%;
  object-fit: contain;
}

#about img:last-of-type {
  margin-bottom: var(--m-bottom-xl);
}
</style>