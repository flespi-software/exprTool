import { IFlespiResponse, TFlespiError, TFlespiExprFunction, TFlespiExprData, TFlespiRegion, TFlespiExprValidationModel, TFlespiTokenInfo } from './flespi'
import Connection from 'flespi-io-js/dist/rest'
import getConnectionConfig from './getConnectionConfig'
import { AxiosResponse, AxiosError } from 'axios'

export interface IConnectorResponse<T> extends AxiosResponse<T> {
  data: T
}
export interface IConnectorError<T> extends AxiosError<T> {
  response?: AxiosResponse<T>
}

export interface IRestConnectionConfig {
  server: string,
  token?: string
}

export interface IConnector {
  [prop: string]: unknown,
  token: string,
  config: IRestConnectionConfig,
  setRegion (region: TFlespiRegion): void,
  http: {
    get <T>(path: string) : Promise<IConnectorResponse<IFlespiResponse<T, TFlespiError>>>
    platform: {
      customer: {
        tokens: {
          get (selector: string, params?: { fields: string }): Promise<IConnectorResponse<IFlespiResponse<TFlespiTokenInfo, TFlespiError>>>
        }
      }
    },
    storage: {
      expressions: {
        functions: {
          get (): Promise<IConnectorResponse<IFlespiResponse<TFlespiExprFunction, TFlespiError>>>
        },
        test: {
          post (data: TFlespiExprData): Promise<IConnectorResponse<IFlespiResponse<TFlespiExprValidationModel, TFlespiError>>>
        }
      }
    }
  }
}

export const config = getConnectionConfig().httpConfig
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const connector = new Connection(config) as IConnector
export default connector
