import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { SystemStateInterface } from './state'
import connector from 'src/api/flespi-io'
import { TFlepsiLoginModel, TFlespiRegion, TFlespiRegions } from 'src/api/flespi'

const actions: ActionTree<SystemStateInterface, StateInterface> = {
  async setupTokenInfo ({ commit }) : Promise<boolean> {
    let result = false
    try {
      const tokenInfoResp = await connector.http.get('/auth/info')
      commit('setTokenInfo', tokenInfoResp.data.result[0])
      result = true
    } catch (e) {
      commit('reqFailed', e)
    }
    return result
  },
  async getRegions ({ commit }) : Promise<TFlespiRegions> {
    let regionsCollection = {}
    try {
      const resp = await connector.http.get<TFlespiRegion>('/auth/regions')
      const regions = resp.data.result
      regionsCollection = regions.reduce((regions, region) => {
        regions[region.name] = region
        return regions
      }, {} as TFlespiRegions)
      commit('setRegions', regionsCollection)
    } catch (e) {
      commit('reqFailed', e)
    }
    return regionsCollection
  },
  async login ({ state, commit, dispatch }, { token, region }: TFlepsiLoginModel) : Promise<boolean> {
    let regions = state.regions
    if (!state.regions) {
      regions = await dispatch('getRegions') as TFlespiRegions
    }
    if (!region) {
      for (const regName in regions) {
        if (regions[regName].default) {
          region = regions[regName]
        }
      }
    }
    commit('setRegion', region)
    commit('setToken', token)
    const loggedin = <boolean> await dispatch('setupTokenInfo')
    commit('setLogged', loggedin)
    return loggedin
  }
}

export default actions
