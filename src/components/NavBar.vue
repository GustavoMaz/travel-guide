<template>
<nav>
  <ul>
    <li><RouterLink to="#">Ínicio</RouterLink></li>
    <li><RouterLink to="#">Sobre nós</RouterLink></li>
    <li>
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
    <li>
      <img src="@/assets/search.png">
      <input type="text" name="search" id="search" placeholder="Para onde você quer ir?">
      <label for="search"><button>Buscar</button></label>
    </li>
  </ul>
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