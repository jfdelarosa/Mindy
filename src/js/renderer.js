let goTo, logout;
(function () {
      
  const remote = require('electron').remote; 
  const shell = require('electron').shell;
  const mainWindow = remote.getCurrentWindow();

  function loadPage(url, full = false, callback) {
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
  }


  logout = function(callback){
    firebase.auth().signOut().then(function() {
      console.log("logout 2");
      if(callback){
        callback();
      }
      loadPage("login", true, function(){
        mainWindow.setSize(300, 400);
      });
    }, function(error) {
      console.log(error);
    });
  };

  goTo = function(url){
    shell.openExternal(url);
  };

  function init() { 
    
    loadPage("login", true, function(){
      $(document).on("click", "#min-btn", function(e){
        mainWindow.minimize(); 
      });
      $(document).on("click", "#max-btn", function(e){
        if (!mainWindow.isMaximized()) {
          mainWindow.maximize();
        } else {
          mainWindow.unmaximize();
        }
      });
      $(document).on("click", "#close-btn", function(e){
        logout(function(){
          mainWindow.close(); 
        });
      });
    });
    $(document).on("click", "a", function(e){
      e.preventDefault();
      loadPage($(this).attr("href"));
    });
    $(document).on("click", ".nav-group a", function(e){
      $(".nav-group a").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("submit", "#login form", function(e){
      e.preventDefault();
      const login = {
        email: $("#login form [name='email']").val() || "",
        password: $("#login form [name='password']").val() || ""
      }
      firebase.auth().signInWithEmailAndPassword(login.email, login.password).catch(function(error) {
        console.log(error);
        $("#login .alert").html(error.message);
        $("#login .alert").fadeIn(500);
      });
    });
    $(document).on("sumbit", "form#producto", function(e){
      console.log("form agregar producto");
      //e.preventDefault();
      product.create($("[name='nombre']").val(), $("[name='producto']").val(), $("[name='existencia']").val(), $("[name='desc']").val());
      return false;
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        //login
        console.log("login");
        loadPage("main", true, function(){
          mainWindow.setSize(800, 600);
          loadPage("index");
        });
      } else {
        // logout
        console.log("logout");
      }
    });   
  }; 
  
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      init(); 
    }
  };
})();