import { TFlespiMessage } from '../api/flespi'
import { useIntegrationBus } from './integrationBus'

const { bus } = useIntegrationBus()

export function busEventExpressionsSetData(
  callback: (data: TFlespiMessage[]) => void,
) {
  bus.on('ExpressionsSetData', (data) => {
    let messages = data as TFlespiMessage | TFlespiMessage[]
    if (!Array.isArray(messages)) {
      messages = [messages]
    }
    callback(messages)
  })
}

export function busEventExpressionsSetExpression(callback: (expr: string) => void) {
  bus.on('ExpressionsSetExpression', (expr) => {
    callback(expr as string)
  })
}

export function busEventExpressionsSetColumns(callback: (cols: string[]) => void) {
  bus.on('ExpressionsSetColumns', (cols) => {
    callback(cols as string[])
  })
}

export function busCommandReady() {
  bus.send('ready')
}
