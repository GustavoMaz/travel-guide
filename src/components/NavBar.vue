<template>
<nav id="main-navigation">
  <div class="container">
    <button class="menu-toggle" @click="toggleMenu">
      <img src="../assets/menu.png" class="menu-img">
    </button>
    <a href="#"><img src="../assets/logo.png" class="logo"></a>
    <ul class="nav-list">
      <li class="nav-item"><RouterLink to="/">Ínicio</RouterLink></li>
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
  },

  setup() {

    const toggleMenu = () => {
      const menu = document.querySelector('#main-navigation .nav-list');
      menu.classList.toggle('active');
    }

    return {
      toggleMenu
    }
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

.logo, a:has(> .logo) {
  height: 3.25rem;
  aspect-ratio: 1 / 1;
}

.menu-toggle {
  display: none;
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
  background-color: var(--bg-color);
  border: 2px solid var(--alternative-bg-color);
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

.dropdown li:not(:last-of-type)::after {
  background-color: var(--alternative-bg-color); 
  width: 8rem;
  height: 1px;
  content: ' ';
  position: absolute;
  /*top: var(--m-bottom-xs);*/
  bottom: -50%;
}

.dropdown.level-1 {
  left: calc(11rem - 3rem);
  top: -1rem;
}

@media only screen and (max-width: 765px) {
  .search-bar {
    display: none;
  }

  #main-navigation .nav-list {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: 100vh;
    top: 68px;
    left: -300px;
    width: 237px;
    box-sizing: border-box;
    background-color: var(--bg-color);
    padding: 1rem 2rem 2rem 1rem;
    transition: .2s;
  }

  #main-navigation .nav-list.active {
    left: 0;
  }
  
  #main-navigation .nav-item {
    margin-bottom: var(--m-bottom-m);
  }
  
  .menu-toggle {
    display: block;
    background-color: transparent;
    border: none;
  }

  .dropdown {
    position: static;
    border: none;
    list-style-type: disc;
    
  }

  .dropdown, .dropdown li a {
    color: var(--text-secondary);
  }
}

</style>