import { MutationTree } from 'vuex'
import { SystemStateInterface, TAppSessionStorage } from './state'
import { Notify, SessionStorage } from 'quasar'
import { IFlespiResponse, TFlespiError, TFlespiRegion, TFlespiRegions, TFlespiTokenInfo } from '../../api/flespi'
import connector, { IConnectorError } from '../../api/flespi-io'

function reqStart () {
  if (DEV) {
    console.log('Start Request')
  }
}
function reqFailed (state: SystemStateInterface, payload: IConnectorError<IFlespiResponse<unknown, TFlespiError>>) {
  if (DEV) {
    console.log('Failed Request')
    console.log(payload)
  }
  if (payload.response) {
    switch (payload.response.status) {
      case 401: {
        clearToken(state)
        setSessionSettings(state, { token: undefined, region: undefined })
        break
      }
      default: {
        if (DEV) { console.log(`${payload.response.status} - ${payload.response.statusText}`) }
        if (payload.response.data && payload.response.data.errors && payload.response.data.errors.length) {
          payload.response.data.errors.forEach((e: TFlespiError) => { addError(state, e.reason) })
        }
      }
    }
  }
}
function setToken (state: SystemStateInterface, val: string) {
  let token = val.replace('FlespiToken ', '')
  if (token === state.token) { return false }
  if (val && (/^[a-z0-9]+$/i.exec(token))) {
    setSessionSettings(state, { token })
  } else {
    token = ''
    clearToken(state)
  }
  state.token = token
  connector.token = `FlespiToken ${token}`
  clearErrors(state)
}
function clearToken (state: SystemStateInterface) {
  state.token = ''
  connector.token = ''
  clearTokenInfo(state)
}
function addError (state: SystemStateInterface, message: string) {
  if (!state.token) { return false }
  DEV && console.trace()
  Notify.create({
    type: 'negative',
    icon: 'warning',
    message: `${message}`,
    timeout: 1000
  })
  state.errors.push(message)
}
function clearErrors (state: SystemStateInterface) {
  state.errors = []
}
function setTokenInfo (state: SystemStateInterface, tokenInfo: TFlespiTokenInfo) {
  state.tokenInfo = tokenInfo
  switch (tokenInfo.access.type) {
    // standart token
    case 0: { break }
    // master
    case 1: { break }
    // acl
    case 2: { break }
  }
}
function clearTokenInfo (state: SystemStateInterface) {
  state.tokenInfo = null
}
function setSessionSettings (state: SystemStateInterface, data: TAppSessionStorage) {
  const sessionSettings = state.sessionSettings
  for (const field in data) {
    const value = data[field]
    if (value) {
      sessionSettings[field] = value
    } else {
      delete sessionSettings[field]
    }
  }
  state.sessionSettings = sessionSettings
  SessionStorage.set(state.sessionKey, sessionSettings)
}

function setRegions (state: SystemStateInterface, regions: TFlespiRegions) {
  state.regions = regions
}

function setRegion (state: SystemStateInterface, region: TFlespiRegion) {
  if (region) {
    setSessionSettings(state, { region })
  } else {
    setSessionSettings(state, { region: undefined })
  }
  connector.setRegion(region)
}

function setLogged (state: SystemStateInterface, loggedFlag: boolean) {
  state.logged = loggedFlag
}

const mutation: MutationTree<SystemStateInterface> = {
  reqStart,
  reqFailed,
  setToken,
  clearToken,
  addError,
  clearErrors,
  setTokenInfo,
  clearTokenInfo,
  setSessionSettings,
  setRegions,
  setRegion,
  setLogged
}

export default mutation
