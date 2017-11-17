define(["jquery", "firebase"], function($, firebase){
  var app = {
    init: function(mainWindow){
      this.mainWindow = mainWindow;
      this.login.init();
      this.bindEvents();
    },
    bindEvents: function(){
      var that = this;
      $(document).on("click", "a", function(e){
        e.preventDefault();
        var url = $(this).attr("href");
        that.functions.loadPage(url, false, function(){
          var module = url.split("/")[1],
          submodule = url.split("/")[2];
          console.log(module, submodule);
          if(module != "" && submodule == "index"){
            that[module].init();
          }else if(module != "" && module != undefined && submodule != "index"){
            that[module]["sub_"+submodule]();
          }
        });
      });
      $(document).on("click", ".nav-group a", function(e){
        $(".nav-group a").removeClass("active");
        $(this).addClass("active");
      });
      document.addEventListener("keydown", function (e) {
        if (e.which === 123) {
          require('remote').getCurrentWindow().toggleDevTools();
        } else if (e.which === 116) {
          location.reload();
        }
      });
    },
    functions: {
      loadPage: function(url, full = false, callback){
        var module = url.split("/")[0];
        $.ajax({
          url: 'views/' + url + ".pug",
          type: 'GET',
          dataType: 'text',
          success: function(r) {
            if (full) {
              $(".window").html(r);
            } else {
              $("#content").html(r);
            }
            if (callback) {
              callback();
            }
            console.log(url, "loaded");
          },
          error: function(r) {
            console.log(url, "not loaded");
          }
        });
      },
      goTo: function(url){
        shell.openExternal(url);
      }
    },
    login: {},
    users: {},
    config: {},
    inventario: {}
  }
  return app;
  console.log("app.js loaded");

});