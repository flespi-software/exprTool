import 'pinia'
import { IConnector } from 'src/api/flespi-io'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $connector: IConnector
  }
}
