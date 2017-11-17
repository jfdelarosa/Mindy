<template lang="pug">
.padded-more
  .grid
    .cell
      .grid.card
        .cell
          span.big.icon.icon-basket
        .cell ventas
    .cell
      .grid.card
        .cell
          span.big.icon.icon-users
        .cell Clientes
    .cell
      .grid.card
        .cell
          span.big.icon.icon-bag
        .cell Productos vendidos
</template>
<script>
export default {
  name: 'main'
}
</script>