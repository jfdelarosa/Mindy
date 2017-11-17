const locals = {/* ...*/};

const electron = require('electron');
const path = require('path');
const url = require('url');

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 400,
    backgroundColor: '#F5F5F5'
    // icon: __dirname + '/images/neutron.png',
  });
  mainWindow.setMenu(null);
  mainWindow.loadURL('http://localhost:8080');

  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})