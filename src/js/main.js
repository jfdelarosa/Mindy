require.config({
  paths: {
    'app':      "../js/app",
    'jquery':   "../libs/jquery/dist/jquery.min",
    'firebase': "https://gstatic.com/firebasejs/3.6.10/firebase",
    'inventario':  "../js/inventario",
    'pos':  "../js/pos"
  },
  shim: {
    'firebase': {
      exports: 'firebase'
    },
    'jquery': {
      exports: 'jquery'
    }
  }
});
require(["app", "login", "inventario", "pos"], function(app){
  
  var electron = nodeRequire('electron');
  var remote = electron.remote; 
  var shell = electron.shell;
  var mainWindow = remote.getCurrentWindow();
      
  var config = {
    apiKey: "AIzaSyDutz5jWxgrKeN03loOYU1Up1AZn8WuwDM",
    authDomain: "mindy-df862.firebaseapp.com",
    databaseURL: "https://mindy-df862.firebaseio.com",
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  app.init(mainWindow);
  console.log(app);
})