import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { ExpressionsStateInterface } from './state'
import actions from './actions'
import mutations from './mutations'

const expressionModule: Module<ExpressionsStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  mutations,
  state
}

export default expressionModule
