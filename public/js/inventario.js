define(["app"], function(app){
  app.inventario = {
    init: function(){
      this.read();
    },
    create: function(postData){
      console.log(postData);
      var tienda = 1;
      firebase.database().ref('tienda/'+tienda+'/productos/').push(postData);
    },
    read: function(){
      var that = this,
      tienda = 1;

      firebase.database().ref('tienda/'+tienda+'/productos').on('value', function(res){
        var html = "";
        res.forEach(function(item){
          html += '<tr>'
            + '<td>' + item.val().nombre + '</td>'
            + '<td>' + item.val().existencia + '</td>'
            + '<td>' + item.val().unidad + '</td>'
            + '<td>'
              + '<div class="btn-group">'
                + '<button class="btn btn-mini btn-primary"><span class="icon icon-pencil"></span></button>'
                + '<button class="btn btn-mini btn-negative"><span class="icon icon-trash"></span></button>'
              + '</div>'
            + '</td>'
          + '</tr>'
        });
        $("table tbody").html(html);
      });
    },
    update: function(){},
    delete: function(){},
    sub_agregar: function(){
      var that = this;
      $(document).off("submit", "form#producto");
      $(document).on("submit", "form#producto", function(e){
        //validar
        var postData = {
          nombre:     $("[name='nombre']").val(),
          existencia: $("[name='existencia']").val(),
          unidad:     $("[name='unidad']").val(),
          desc:       $("[name='desc']").val()
        }
        that.create(postData);
        e.preventDefault();
      });
    }
  }
  console.log("inventario.js loaded");

});

