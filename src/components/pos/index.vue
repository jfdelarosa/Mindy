<template lang="pug">
#pos.padded-more
  .grid.top
    .cell.one-fourth
      form
        autocomplete(placeholder='Buscar producto...',
        url="http://5a1123312437c900125827c7.mockapi.io/api/v1/items",
        anchor="nombre",
        label="unidad",
        param="filter",
        :classes="{input: 'form-control'}",
        :onSelect="addToCart",
        :debounce="100")
      .nav
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
    .cell.one-half
      table.table-striped.table-bordered.table-fixed#items
        thead
          tr
            th Nombre
            th Precio
            th Cantidad
            th Subtotal
            th Acciones
        tbody
          tr(v-for="(item, index) in items")
            td {{item.nombre}}
            td {{item.precio}}
            td
              input.form-control(type="number" v-model="item.cantidad" min="1")
            td {{item.cantidad * item.precio}}
            td
              button.btn.btn-mini.btn-negative(v-on:click="deleteFromCart(index)")
                span.icon.icon-trash
    .cell.one-fourth
      .card
        table
          tr
            td Total:
            td {{totalC}}
        button.btn.btn-positive.btn-block Completar venta
</template>

<script>
require('vue2-autocomplete-js/dist/style/vue2-autocomplete.css');
import Autocomplete from 'vue2-autocomplete-js'
export default {
  components: {
    Autocomplete
  },
  methods: {
    addToCart(obj){
      obj.cantidad = 1;
      this.items.push(obj);
      this.total += obj.precio;
    },
    deleteFromCart(index){
      this.total -= this.items[index].precio;
      this.items.splice(index, 1);
    }
  },
  computed: {
    totalC: function(){
      var total = 0;
      for (var i = 0; i < this.items.length; i++) {
        total += this.items[i].cantidad * this.items[i].precio;
      }
      return '$ ' + total.toFixed(2).replace(/./g, function(c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
      });
    }
  },
  data(){
    return {
      items: [],
      total: 0
    }
  }
}
</script>

<style lang="scss">
  .autocomplete ul{
    &::before{
      border-bottom: 10px solid white;
    }
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    li a{
      background: white;
    }
  }
</style>
