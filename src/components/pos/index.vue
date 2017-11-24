<template lang="pug">
#pos.padded-more
  .grid.top
    .cell.two-thirds
      form
        mindy-autocomplete(placeholder='Buscar producto...',
        url="http://5a1123312437c900125827c7.mockapi.io/api/v1/items",
        anchor="nombre",
        label="unidad",
        param="filter",
        :classes="{input: 'form-control'}",
        :debounce="500")
      .grid(style="padding-top: 1rem;")
        .cell.one-third.nav
          .tit Categorías
          .nav-item.active
            |  Categoría 1
          .nav-item
            |  Categoría 2
          .nav-item
            |  Categoría 3
          .nav-item
            |  Categoría 4
          .nav-item
            |  Categoría 5
        .cell
          .grid
            .cell
              .card hola
            .cell
              .card hola
            .cell
              .card hola
    .cell.one-third
      .card
        p Detalles de la venta
</template>

<script>
require('vue2-autocomplete-js/dist/style/vue2-autocomplete.css');
import Autocomplete from 'vue2-autocomplete-js'
export default {
  components: {
    'mindy-autocomplete': Autocomplete
  }
}
</script>
