import { TFlespiMessage } from './../api/flespi.d'
import { useIntegrationBus } from './integrationBus'

const { bus } = useIntegrationBus()

export function busEventExpressionsSetData (callback: (data:TFlespiMessage[]) => void) {
  bus.on('ExpressionsSetData', (data) => {
    let messages = data as TFlespiMessage|TFlespiMessage[]
    if (!Array.isArray(messages)) {
      messages = [messages]
    }
    callback(messages)
  })
}

export function busEventExpressionsSetExpression (callback: (expr: string) => void) {
  bus.on('ExpressionsSetExpression', (expr) => {
    const expression = expr as string
    callback(expression)
  })
}

export function busEventExpressionsSetColumns (callback: (cols: string[]) => void) {
  bus.on('ExpressionsSetColumns', (cols) => {
    const columns = cols as string[]
    callback(columns)
  })
}

export function busCommandReady () {
  bus.send('ready')
}
