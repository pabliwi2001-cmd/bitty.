const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function crear() {
  const win = new BrowserWindow({
    width: 560,
    height: 900,
    minWidth: 400,
    minHeight: 600,
    title: "Bitty",
    backgroundColor: "#ede9ff",
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(crear);
app.on("window-all-closed", () => app.quit());
app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) crear(); });
