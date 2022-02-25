import packageJson from '../../package.json'

export default () => {
  const version = packageJson.version

  let rest = '',
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
    } else if (window.location.pathname.indexOf('/tools') !== -1) {
      rest = `https://${window.location.host}`
      socket = `wss://${window.location.host}`
    }
  }

  const isDev = DEV || (PROD && window.location.host.indexOf('flespi.io') === -1)
  const mqttSettings = { protocolVersion: 5, wsOptions: { objectMode: false, perMessageDeflate: true } }
  const connectionConfig = {
    socketConfig: {
      server: socket,
      clientId: `flespi-tools-${version}${isDev ? '-dev' : ''}-${Math.random().toString(16).substr(2, 8)}`,
      mqttSettings
    },
    httpConfig: rest ? { server: rest } : undefined
  }
  return connectionConfig
}
