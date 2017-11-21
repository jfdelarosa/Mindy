<template lang="pug">

#pos.padded-more
  mindy-autocomplete(data="http://5a1123312437c900125827c7.mockapi.io/api/v1/items")
  .grid.top
    .cell.two-thirds
      form
        input.form-control.search(type='text' placeholder='Buscar producto...' name='nombre')
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
export default {

}
</script>