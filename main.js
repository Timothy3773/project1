const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const myPC = require('pc');
var mainWindow
let settings = {
    width: 800,
    height: 800,
    frame: false,
    center: true,
    show: true
}



app.on('ready', theApp => {
    mainWindow = new BrowserWindow({
        width: settings.width,
        height: settings.height,
        icon: "./wumpus_icon_by_discordapp.com.png",
        title: myPC.hostname().name,
        movable: true,
        fullscreenable: true,
        webPreferences: {
            devTools: true
        },
        darkTheme: true,
        backgroundColor: '#666666',
        center: settings.center,
        frame: settings.frame
    })
    mainWindow.loadFile(path.join(__dirname, 'pages/main.html'))
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    ipcMain.on('invokeAction', function (event, data) {
        if (data == "closeApp") {
            app.quit()
        }
    })
})






