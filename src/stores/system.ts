import { defineStore, acceptHMRUpdate } from 'pinia'
import { SessionStorage, Notify } from 'quasar'
import { IConnectorError } from 'src/api/flespi-io'
import {
  IFlespiResponse,
  TFlepsiLoginModel,
  TFlespiError,
  TFlespiRegion,
  TFlespiRegions,
  TFlespiTokenInfo,
} from 'src/api/flespi'

export type TAppSessionStorage = {
  [index: string]: unknown
  token?: string
  region?: TFlespiRegion
}

export interface ISystemState {
  token: string
  sessionKey: string
  socketOffline: boolean
  tokenInfo: TFlespiTokenInfo | null
  regions: TFlespiRegions | null
  errors: string[]
  logged: boolean
  sessionSettings: TAppSessionStorage
}

const sessionKey = `flespi-expr-tools-session-settings[${window.name || 'default'}]`

export const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    token: '',
    sessionKey,
    socketOffline: false,
    tokenInfo: null,
    regions: null,
    errors: [],
    logged: false,
    sessionSettings: SessionStorage.getItem<TAppSessionStorage>(sessionKey) || {},
  }),

  actions: {
    reqStart() {
      if (DEV) console.log('Start Request')
    },
    reqFailed(payload: IConnectorError<IFlespiResponse<unknown, TFlespiError>>) {
      if (DEV) {
        console.log('Failed Request')
        console.log(payload)
      }
      if (payload.response) {
        switch (payload.response.status) {
          case 401:
            this.clearToken()
            this.setSessionSettings({ token: undefined, region: undefined })
            break
          default:
            if (DEV) {
              console.log(`${payload.response.status} - ${payload.response.statusText}`)
            }
            if (payload.response.data?.errors?.length) {
              payload.response.data.errors.forEach((e) => this.addError(e.reason))
            }
        }
      }
    },
    setToken(val: string) {
      let token = val.replace('FlespiToken ', '')
      if (token === this.token) return false
      if (val && /^[a-z0-9]+$/i.exec(token)) {
        this.setSessionSettings({ token })
      } else {
        token = ''
        this.clearToken()
      }
      this.token = token
      this.$connector.token = `FlespiToken ${token}`
      this.clearErrors()
    },
    clearToken() {
      this.token = ''
      this.$connector.token = ''
      this.clearTokenInfo()
    },
    addError(message: string) {
      if (!this.token) return false
      if (DEV) console.trace()
      Notify.create({
        type: 'negative',
        icon: 'warning',
        message: `${message}`,
        timeout: 1000,
      })
      this.errors.push(message)
    },
    clearErrors() {
      this.errors = []
    },
    setTokenInfo(tokenInfo: TFlespiTokenInfo) {
      this.tokenInfo = tokenInfo
    },
    clearTokenInfo() {
      this.tokenInfo = null
    },
    setSessionSettings(data: TAppSessionStorage) {
      const sessionSettings = this.sessionSettings
      for (const field in data) {
        const value = data[field]
        if (value) {
          sessionSettings[field] = value
        } else {
          delete sessionSettings[field]
        }
      }
      this.sessionSettings = sessionSettings
      SessionStorage.set(this.sessionKey, sessionSettings)
    },
    setRegions(regions: TFlespiRegions) {
      this.regions = regions
    },
    setRegion(region: TFlespiRegion | undefined) {
      if (region) {
        this.setSessionSettings({ region })
      } else {
        this.setSessionSettings({ region: undefined })
      }
      if (region) this.$connector.setRegion(region)
    },
    setLogged(loggedFlag: boolean) {
      this.logged = loggedFlag
    },

    async setupTokenInfo(): Promise<boolean> {
      let result = false
      try {
        const tokenInfoResp = await this.$connector.http.get<TFlespiTokenInfo>(
          '/auth/info',
        )
        const info = tokenInfoResp.data.result[0]
        if (info) this.setTokenInfo(info)
        result = true
      } catch (e) {
        this.reqFailed(e as IConnectorError<IFlespiResponse<unknown, TFlespiError>>)
      }
      return result
    },
    async getRegions(): Promise<TFlespiRegions> {
      let regionsCollection: TFlespiRegions = {}
      try {
        const resp = await this.$connector.http.get<TFlespiRegion>('/auth/regions')
        regionsCollection = resp.data.result.reduce((regions, region) => {
          regions[region.name] = region
          return regions
        }, {} as TFlespiRegions)
        this.setRegions(regionsCollection)
      } catch (e) {
        this.reqFailed(e as IConnectorError<IFlespiResponse<unknown, TFlespiError>>)
      }
      return regionsCollection
    },
    async login({ token, region }: Partial<TFlepsiLoginModel>): Promise<boolean> {
      let regions = this.regions
      if (!this.regions) {
        regions = await this.getRegions()
      }
      let resolvedRegion = region
      if (!resolvedRegion && regions) {
        for (const regName in regions) {
          if (regions[regName]?.default) {
            resolvedRegion = regions[regName]
          }
        }
      }
      this.setRegion(resolvedRegion)
      this.setToken(token ?? '')
      const loggedin = await this.setupTokenInfo()
      this.setLogged(loggedin)
      return loggedin
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSystemStore, import.meta.hot))
}
