<template>
<nav id="main-navigation">
  <div class="container">
    <div class="logo">LOGO</div>
    <ul class="nav-list">
      <li class="nav-item"><a href="#">Ínicio</a></li>
      <li class="nav-item">
        <DropDown>
          <template v-slot:title>
            <RouterLink to="#">Destinos &#9662;</RouterLink>
          </template>
          <DropDownItem>Mais visitados</DropDownItem>
          <DropDownItem>Temporada</DropDownItem>
          <DropDownItem>Perto de mim</DropDownItem>
          <DropDownItem>
            <DropDown subMenuLevel="1">
              <template v-slot:title>
                <RouterLink to="#">Continentes &#9662;</RouterLink>
              </template>
              <DropDownItem>África</DropDownItem>
              <DropDownItem>América</DropDownItem>
              <DropDownItem>Ásia</DropDownItem>
              <DropDownItem>Europa</DropDownItem>
              <DropDownItem>Oceania</DropDownItem>
            </DropDown>
          </DropDownItem>
        </DropDown>
      </li>
      <li class="nav-item"><RouterLink to="/about">Sobre nós</RouterLink></li>
      <li class="nav-item search-bar">
        <div class="search-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--text-primary)" class="bi bi-search search-icon" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          <input type="text" name="search" id="search" placeholder="Para onde você quer ir?" autocomplete="off">
        </div>
        <label for="search">
          <button class="main-action-button bg-accent">Buscar</button>
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
  white-space: nowrap;
  position: sticky;
  top: 0;
  border-bottom: 1px solid var(--light-primary);
  z-index: 999;
  padding: 0.5rem 2rem;
  box-sizing: border-box;
}

#main-navigation .container {
  margin: auto;  
  width: 100%;
}

.search-bar, 
#main-navigation .container,
.search-icon-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.nav-item {
  margin-left: 2vw;
  position: relative;
}

.dropdown-title a {
  line-height: 19px;
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

.nav-item a {
  
  color: var(--primary);
  font-weight: 500;
  display: block;
}

.dropdown {
  background-color: var(--dark-bg-color);
  padding: 1.2rem 1.5rem;
  position: absolute;
  width: 11rem;
  box-sizing: border-box;
  border-radius: 16px;
}

.dropdown li a { 
  color: var(--text-primary);
}

.dropdown li {
  margin-left: 0;
}

.dropdown li:not(:last-of-type) {
  margin-bottom: var(--m-bottom-m);
}

.dropdown.level-1 {
  left: calc(11rem - 3rem);
  top: -1rem;
}
</style>