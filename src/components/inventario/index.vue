<template lang="pug">
div
  .toolbar-actions.on-top
    router-link.btn.btn-default.btn-outline(to="/inventario/agregar")
      span.icon.icon-plus
      | Agregar elemento
  table.table-striped#items
    thead
      tr
        th Nombre
        th Existencia
        th Unidad
        th Acciones
    tbody
</template>

<script>
export default {

}
</script>