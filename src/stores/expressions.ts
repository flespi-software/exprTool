import { defineStore, acceptHMRUpdate } from 'pinia'
import { IConnectorError } from 'src/api/flespi-io'
import { useSystemStore } from './system'
import {
  IFlespiResponse,
  TFlespiError,
  TFlespiExprData,
  TFlespiExprError,
  TFlespiExprFunction,
  TFlespiExprValidationModel,
  TFlespiMessage,
  TTimezonesNames,
} from 'src/api/flespi'

export interface IExpressionsState {
  functions: TFlespiExprFunction[]
  expression: string
  timezone: TTimezonesNames
  input: TFlespiMessage[]
}

type TValidationResult = IFlespiResponse<TFlespiExprValidationModel, TFlespiExprError>

export const useExpressionsStore = defineStore('expressions', {
  state: (): IExpressionsState => ({
    functions: [],
    expression: '',
    timezone: 'UTC',
    input: [],
  }),

  actions: {
    setFunctions(functions: TFlespiExprFunction[]) {
      this.functions = functions
    },
    setExpr(expr: string) {
      this.expression = expr
    },
    setTimezone(timezone: TTimezonesNames) {
      this.timezone = timezone
    },
    setInput(input: TFlespiMessage[]) {
      this.input = input
    },
    updateCell({ index, name, data }: { index: number; name: string; data: unknown }) {
      const row = this.input[index]
      if (row) row[name] = data
    },

    async getExpressionFunctions(): Promise<TFlespiExprFunction[] | undefined> {
      let result: TFlespiExprFunction[] | undefined
      try {
        if (this.functions.length) return this.functions
        const functionsResp =
          await this.$connector.http.storage.expressions.functions.get()
        this.setFunctions(functionsResp.data.result)
        result = functionsResp.data.result
      } catch (e) {
        useSystemStore().reqFailed(
          e as IConnectorError<IFlespiResponse<unknown, TFlespiError>>,
        )
      }
      return result
    },

    async validateExpression(
      config: { onlyValidate?: boolean } = {},
    ): Promise<TValidationResult> {
      let result: TValidationResult = { result: [] }
      try {
        const data: TFlespiExprData = {
          expression: this.expression,
          timezone: this.timezone,
          input: config.onlyValidate ? [] : this.input,
        }
        const path = `/storage/expressions/test?data=${encodeURIComponent(JSON.stringify(data))}`
        const validationResp = await this.$connector.http.get<TFlespiExprValidationModel>(
          path,
        )
        result = validationResp.data as TValidationResult
      } catch (e) {
        type TRespError = IConnectorError<
          IFlespiResponse<TFlespiExprValidationModel, TFlespiExprError>
        >
        const err = e as TRespError
        if (err.response) {
          if (err.response.data) {
            result = err.response.data
          }
        } else if (e instanceof Error) {
          result.errors = [{ code: 3, reason: e.message }]
        } else {
          result.errors = [{ code: 3, reason: 'format data error' }]
        }
      }
      return result
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useExpressionsStore, import.meta.hot))
}
