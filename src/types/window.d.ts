import IIpc from "./ipc"

export {}

declare global {
  interface Window { 
    ipc: IIpc
  }
}