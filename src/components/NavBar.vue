<template>
<nav id="main-navigation">
  <div class="container">
    <div class="logo">LOGO</div>
    <ul class="nav-list">
      <li class="nav-item"><a href="#">Ínicio</a></li>
      <li class="nav-item"><RouterLink to="/about">Sobre nós</RouterLink></li>
      <li class="nav-item">
        <DropDown text="Destinos">
          <DropDownItem>Mais visitados</DropDownItem>
          <DropDownItem>Temporada</DropDownItem>
          <DropDownItem>Perto de mim</DropDownItem>
          <DropDownItem>
            <DropDown text="Continentes">
              <DropDownItem>África</DropDownItem>
              <DropDownItem>América</DropDownItem>
              <DropDownItem>Ásia</DropDownItem>
              <DropDownItem>Europa</DropDownItem>
              <DropDownItem>Oceania</DropDownItem>
            </DropDown>
          </DropDownItem>
        </DropDown>
      </li>
      <li class="nav-item search-bar">
        <div class="search-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--text-primary)" class="bi bi-search search-icon" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          <input type="text" name="search" id="search" placeholder="Para onde você quer ir?" autocomplete="off">
        </div>
        <label for="search">
          <button class="main-action-button">Buscar</button>
        </label>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import DropDown from '@/components/DropDown.vue';
import DropDownItem from './DropDownItem.vue';

export default {
  components: {
    DropDown,
    DropDownItem
  }
}
</script>

<style>
#main-navigation {
  background-color: var(--bg-color);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
}

#main-navigation ul {
  list-style: none;
}

#main-navigation .container {
  grid-column: 2;
}

.search-bar, #main-navigation .container, .search-icon-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-bar {
  border-radius: 1000px;
  border: 2px solid var(--primary);
  padding: 0.5rem;
  padding-left: 0.75rem;
  min-width: 25vw;
}

.search-bar input {
  border: none;
  font-size: 1rem;
  outline: none;
  margin: 0 0.5rem;
}

.search-bar input::placeholder {
  color: var(--text-primary);
}

.search-bar .main-action-button {
  background-color: var(--accent);
}

.search-bar .main-action-button:hover {
  background-color: var(--dark-accent);
}


/*
.search-icon-wrapper {
  width: 3.5rem;
  height: 2.75rem;
  background-color: var(--primary);
  border-radius: 16px 0 0 16px;
}
*/
.nav-list {
  display: flex;
  flex-wrap: nowrap;
}
</style>