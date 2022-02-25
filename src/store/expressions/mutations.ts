import { TFlespiMessage } from './../../api/flespi.d'
import { TFlespiExprFunction, TTimezonesNames } from 'src/api/flespi'
import { MutationTree } from 'vuex'
import { ExpressionsStateInterface } from './state'

const mutation: MutationTree<ExpressionsStateInterface> = {
  setFunctions (state, functions: TFlespiExprFunction[]) {
    state.functions = functions
  },
  setExpr (state, expr: string) {
    state.expression = expr
  },
  setTimezone (state, timezone: TTimezonesNames) {
    state.timezone = timezone
  },
  setInput (state, input: TFlespiMessage[]) {
    state.input = input
  },
  updateCell (state, { index, name, data }: {index: number, name: string, data: unknown}) {
    state.input[index][name] = data
  }
}

export default mutation
