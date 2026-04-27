import {
  IFlespiResponse,
  TFlespiError,
  TFlespiExprFunction,
  TFlespiExprData,
  TFlespiRegion,
  TFlespiExprValidationModel,
  TFlespiTokenInfo,
} from './flespi'
import getConnectionConfig from './getConnectionConfig'
import { AxiosResponse, AxiosError } from 'axios'

export interface IConnectorResponse<T> extends AxiosResponse<T> {
  data: T
}
export interface IConnectorError<T> extends AxiosError<T> {
  response?: AxiosResponse<T>
}

export interface IRestConnectionConfig {
  server?: string
  token?: string
  flespiApp?: string
}

export interface IConnector {
  [prop: string]: unknown
  token: string
  config: IRestConnectionConfig
  setRegion(region: TFlespiRegion): void
  http: {
    get<T>(
      path: string,
    ): Promise<IConnectorResponse<IFlespiResponse<T, TFlespiError>>>
    platform: {
      customer: {
        tokens: {
          get(
            selector: string,
            params?: { fields: string },
          ): Promise<IConnectorResponse<IFlespiResponse<TFlespiTokenInfo, TFlespiError>>>
        }
      }
    }
    storage: {
      expressions: {
        functions: {
          get(): Promise<
            IConnectorResponse<IFlespiResponse<TFlespiExprFunction, TFlespiError>>
          >
        }
        test: {
          post(
            data: TFlespiExprData,
          ): Promise<
            IConnectorResponse<IFlespiResponse<TFlespiExprValidationModel, TFlespiError>>
          >
        }
      }
    }
  }
}

/**
 * Pre-computed HTTP config (server URL + flespiApp client-id).
 * Used for deriving `authHost` in Login.vue without touching the $connector.
 * The actual runtime Connection instance is created by `src/boot/flespi-io.ts`
 * via `ConnectionPlugin` and exposed as `this.$connector` in Pinia stores.
 */
export const config: IRestConnectionConfig = getConnectionConfig().httpConfig
