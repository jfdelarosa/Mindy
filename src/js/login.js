define(["app", "jquery"], function(app, $){
  app.login = {
    init: function(){
      console.log("awebo xd");
      app.functions.loadPage("login", true, function(){
        $(document).on("click", "#min-btn", function(e){
          app.mainWindow.minimize(); 
        });
        $(document).on("click", "#max-btn", function(e){
          if (!app.mainWindow.isMaximized()) {
            app.mainWindow.maximize();
          } else {
            app.mainWindow.unmaximize();
          }
        });
        $(document).on("click", "#close-btn", function(e){
          logout(function(){
            app.mainWindow.close(); 
          });
        });
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
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("login");
          app.functions.loadPage("main", true, function(){
            app.mainWindow.setSize(800, 600);
            app.functions.loadPage("index");
          });
        } else {
          console.log("logout");
        }
      });
    },
    logout: function(callback){
      firebase.auth().signOut().then(function() {
        console.log("logout 2");
        if(callback){
          callback();
        }
        loadPage("login", true, function(){
          app.mainWindow.setSize(300, 400);
        });
      }, function(error) {
        console.log(error);
      });
    }
  }
  console.log("login.js loaded");
});