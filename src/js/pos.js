define(["app"], function(app){
  app.pos = {
    init: function(){
      var tienda = 1;
      $(document).on("keyup", ".search", function(){
        var ref = firebase.database().ref('tienda/'+tienda+'/productos');
        ref.child("nombre").startAt($(this).val()).once('value', function(res){
          console.log("res", res);
          console.log("val", res.val());
          res.forEach(function(item){
            console.log("item", item);
          })
        });
      });
    },
    create: function(){},
    read: function(){},
    update: function(){},
    delete: function(){}
  }
  console.log("pos.js loaded");

});

