import { contextBridge, ipcRenderer } from "electron";
import type IIpc from "../types/ipc"

console.log("Preload initilized!");

contextBridge.exposeInMainWorld('ipc', {
  getOs: () => ipcRenderer.invoke('getOs') as Promise<string>,
  onPong: (callback: () => void) => {
    ipcRenderer.on("fromMain", callback);
  },
  clearOnPong: (callback: () => void) => {
    ipcRenderer.removeListener("fromMain", callback)
  }
} as IIpc);