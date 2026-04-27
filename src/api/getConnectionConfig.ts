import { IRestConnectionConfig } from './flespi-io'

export interface ISocketConnectionConfig {
  server: string
  clientId: string
  mqttSettings: {
    protocolVersion: number
    wsOptions: { objectMode: boolean; perMessageDeflate: boolean }
  }
}

export interface IConnectionConfig {
  socketConfig: ISocketConnectionConfig
  httpConfig: IRestConnectionConfig
}

export default (): IConnectionConfig => {
  let rest: string | undefined,
    socket = ''
  /* if local dev build */
  if (DEV && LOCAL) {
    if (window.location.host.indexOf('localhost') !== -1) {
      rest = 'https://localhost:9005'
      socket = 'wss://localhost:9017'
    }
  } else if (PROD) {
    if (window.location.host.indexOf('flespi.io') === -1) {
      rest = `https://${window.location.hostname}:9005`
      socket = `wss://${window.location.hostname}:9017`
    } else if (window.location.pathname.indexOf('/exprtools') !== -1) {
      rest = `https://${window.location.host}`
      socket = `wss://${window.location.host}`
    }
  }

  const isDev = DEV || (PROD && window.location.host.indexOf('flespi.io') === -1)
  const mqttSettings = {
    protocolVersion: 5,
    wsOptions: { objectMode: false, perMessageDeflate: true },
  }
  const clientId = `flespi-expr-tools-${__APP_VERSION__}${
    isDev ? '-dev' : ''
  }-${Math.random().toString(16).substring(2, 10)}`
  return {
    socketConfig: {
      server: socket,
      clientId,
      mqttSettings,
    },
    httpConfig: { server: rest, flespiApp: clientId },
  }
}
