<template lang="pug">
div
  .toolbar-actions.on-top
    router-link.btn.btn-default.btn-outline(v-bind:to="{name: 'Inventario.agregar' }")
      span.icon.icon-plus
      | Agregar elemento
  table.table-striped#items
    thead
      tr
        th Nombre
        th Costo
        th Precio
        th Existencia
        th Unidad
        th Acciones
    tbody
      tr(v-for="item in items")
        td {{item.nombre}}
        td {{item.costo}}
        td {{item.precio}}
        td {{item.existencia}}
        td {{item.unidad}}
        td
          .btn-group
            router-link.btn.btn-mini.btn-positive(v-bind:to="{ name: 'Inventario.historial', params: { id: item.id }}")
              span.icon.icon-search
            button.btn.btn-mini.btn-primary
              span.icon.icon-pencil
            button.btn.btn-mini.btn-negative.eliminar(data-id="1")
              span.icon.icon-trash
</template>

<script>
export default {
  data(){
    return {
      items: {}
    }
  },
  created(){
    this.$http.get('items').then(function(res){
      this.items = res.body;
    }, (e) => {
      console.log('¡Error!', e);
    });
  }
}
</script>
