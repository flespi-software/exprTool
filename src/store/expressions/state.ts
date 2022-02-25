import { TFlespiExprFunction, TFlespiMessage, TTimezonesNames } from 'src/api/flespi'

export interface ExpressionsStateInterface {
  functions: TFlespiExprFunction[];
  expression: string,
  timezone: TTimezonesNames,
  input: TFlespiMessage[]
}

function state (): ExpressionsStateInterface {
  return {
    functions: [],
    expression: '',
    timezone: 'UTC',
    input: []
  }
}

export default state
