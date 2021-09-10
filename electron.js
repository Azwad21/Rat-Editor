const { app, BrowserWindow , ipcMain, screen} = require('electron')
const path = require('path');
const url = require("url");
const directoryTree = require("directory-tree");

ipcMain.on("message", (evetn, data) => {
    console.log(data);
})

var mainWindow;
function createWindow() {
    const {width, height} = screen.getPrimaryDisplay().workAreaSize;
    let dWidth = parseInt((80 / 100) * width); 
    let dHeight = parseInt((90 / 100) * height); 
    mainWindow = new BrowserWindow({
        width: dWidth,
        height: dHeight,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false
        }
    })
    

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, 'build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    mainWindow.loadURL(startUrl);

    const pathData = directoryTree(process.cwd(), {
        exclude: [/node_modules/, /.git/]
    })

    mainWindow.once('ready-to-show', () => {
        mainWindow.webContents.send("path:data", pathData)
    })

    //Test section (to be removed)

    ipcMain.on("test:path:data:request", () => mainWindow.webContents.send("path:data", pathData));

    // ####################

    // Open the DevTools.
    mainWindow.webContents.openDevTools()
}




app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})