const URL = 'wss://ya-praktikum.tech/ws/chats'

enum Listeners {
  OPEN = 'open',
  CLOSE = 'close',
  MESSAGE = 'message',
  ERROR = 'error',
}

interface SocketConnectionProps {
  url: string
}

type CreateConnectionFunc = (props: SocketConnectionProps) => WebSocket

export class Socket {
  socket: WebSocket

  constructor(props: SocketConnectionProps) {
    this.socket = this._createConnection(props)
  }

  private _createConnection: CreateConnectionFunc = ({ url }) => {
    return new WebSocket(url)
  }

  open = (callBack: () => void) => {
    this.socket?.addEventListener(Listeners.OPEN, callBack)
  }

  close(callBack: (event: CloseEvent) => void) {
    const funk = (event: CloseEvent) => {
      callBack(event)
    }
    this.socket?.addEventListener(Listeners.CLOSE, funk)
  }

  message(callBack: (event: MessageEvent) => void) {
    const funk = (event: MessageEvent) => {
      callBack(event)
    }
    this.socket?.addEventListener(Listeners.MESSAGE, funk)
  }

  error(callBack: (event: Event) => void) {
    this.socket?.addEventListener(Listeners.ERROR, callBack)
  }

  send(json: string) {
    this.socket.send(json)
  }

  pingPong() {
    setInterval(() => this.socket.send(JSON.stringify({ type: 'ping' })), 10000)
  }
}
