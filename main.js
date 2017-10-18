const locals = {/* ...*/};

const electron = require('electron');
const pug = require('electron-pug')({pretty: true}, locals);
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
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'public/views/template.pug'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
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

