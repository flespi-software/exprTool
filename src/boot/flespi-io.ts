import ConnectionPlugin from 'flespi-io-js/dist/vue3-plugin'
import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'
import getConnectionConfig from 'src/api/getConnectionConfig'
import { IConnector } from 'src/api/flespi-io'

export default defineBoot(({ app, store }) => {
  const connectionConfig = getConnectionConfig()
  app.use(ConnectionPlugin, connectionConfig)

  const $connector = app.config.globalProperties.$connector as IConnector
  store.use(() => ({ $connector }))

  app.config.globalProperties.$axios = axios

  if (window) {
    window.addEventListener('beforeunload', () => {
      const c = app.config.globalProperties.$connector as
        | { socket?: { close?: (force: boolean) => void } }
        | undefined
      c?.socket?.close?.(true)
    })
  }
})
