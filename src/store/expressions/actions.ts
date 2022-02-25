import { IConnectorError } from './../../api/flespi-io'
import { IFlespiResponse } from './../../api/flespi.d'
import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ExpressionsStateInterface } from './state'
import connector from '../../api/flespi-io'
import { TFlespiExprData, TFlespiExprValidationModel, TFlespiExprError } from 'src/api/flespi'

const actions: ActionTree<ExpressionsStateInterface, StateInterface> = {
  async getExpressionFunctions ({ state, commit }) {
    let result
    try {
      if (state.functions.length) { return state.functions }
      const functionsResp = await connector.http.storage.expressions.functions.get()
      commit('setFunctions', functionsResp.data.result)
      result = functionsResp.data.result
    } catch (e) {
      commit('system/reqFailed', e, { root: true })
    }
    return result
  },
  async validateExpression ({ state }, config: { onlyValidate?: boolean } = {}) {
    let result: IFlespiResponse<TFlespiExprValidationModel, TFlespiExprError> = { result: [] }
    try {
      const data: TFlespiExprData = {
        expression: state.expression,
        timezone: state.timezone,
        input: config.onlyValidate ? [] : state.input
      }
      const validationResp = await connector.http.storage.expressions.test.post(data)
      result = validationResp.data
    } catch (e) {
      type TExprRespError = IConnectorError<IFlespiResponse<TFlespiExprValidationModel, TFlespiExprError>>
      if ((e as TExprRespError).response) {
        const resp = (e as TExprRespError).response
        if (resp && resp.data) {
          result = resp.data
        }
      } else if (e instanceof Error) {
        result.errors = [{ code: 3, reason: e.message }]
      } else {
        result.errors = [{ code: 3, reason: 'format data error' }]
      }
    }
    return result
  }
}

export default actions
