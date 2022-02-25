import { SessionStorage } from 'quasar'
import { TFlespiRegion, TFlespiRegions, TFlespiTokenInfo } from 'src/api/flespi'

export type TAppSessionStorage = {
  [index: string]: unknown
  token?: string
  region?: TFlespiRegion
}

export interface SystemStateInterface {
  token: string,
  sessionKey: string,
  socketOffline: boolean,
  tokenInfo: TFlespiTokenInfo | null,
  regions: TFlespiRegions | null,
  errors: Array<string>,
  logged: boolean,
  sessionSettings: TAppSessionStorage,
}

const sessionKey = `flespi-ex-tools-session-settings[${window.name || 'default'}]`

function state (): SystemStateInterface {
  return {
    token: '',
    sessionKey,
    socketOffline: false,
    tokenInfo: null,
    regions: null,
    errors: [],
    logged: false,
    sessionSettings: SessionStorage.getItem(sessionKey) || {}
  }
}

export default state
