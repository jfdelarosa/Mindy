<template lang="pug">
div
  .toolbar-actions.on-top
    router-link.btn.btn-default.btn-outline(to="/inventario/")
      span.icon.icon-left-open
      | Regresar
  form#producto.padded-more(method="POST")
    .grid
      .cell
        .form-group
          label Nombre del producto
          input.form-control(type='text' placeholder='Nombre del producto' name='nombre')
      .cell
        .form-group
          label Existencia
          input.form-control(type='numbrer' value='0' name='existencia')
      .cell
        .form-group
          label Unidad de medida
          select.form-control(name='unidad')
            optgroup(label="unidades")
              option unidades
              option paquetes
              option cajas
            optgroup(label="masa")
              option kilos
              option gramos
              option libras
            optgroup(label="volumen")
              option mililitros
              option litros
              option galones
            optgroup(label="distancia")
              option metros
              option centimetros
    .form-group
      label Description
      textarea.form-control(rows='3' name='desc')
    .form-actions
      .grid
        .cell
          button.btn.btn-block.btn-primary(type='submit') Agregar producto
        .cell.one-third
          a.btn.btn-block.btn-negative(href='./inventario/index') Cancelar
</template>
<script>
export default {
  name: 'inventarioAgregar',
}
</script>