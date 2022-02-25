import { TFlespiMessage } from './../api/flespi.d'
import mitt, { Emitter, EventType, Handler } from 'mitt'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $integrationBus: IntegrationBus
  }
}

/*
  => EventExample({payload}) Message format: `FlespiTools|${postkey}|${eventName}=>${payload}`
  <= @CommandExample({payload})
*/

export interface ICommands {
  ready: void
  [propName: string]: unknown
}
export type TCommand = keyof ICommands
export type TCommandPayload = ICommands[TCommand]

export interface IEvents {
  ExpressionsSetData: TFlespiMessage|TFlespiMessage[]
  ExpressionsSetExpression: string
  ExpressionsSetColumns: string[]
  [propName: EventType]: unknown
}
export type TEvent = keyof IEvents
export type TEventPayload = IEvents[TEvent]

class IntegrationBus {
  bus: Emitter<IEvents>
  postkey: string
  constructor () {
    const bus = mitt<IEvents>()
    this.bus = bus
    this.postkey = window.name
    window.addEventListener('message', (event:MessageEvent) => {
      let cmd: TEvent,
        payload: TEventPayload
      if (typeof event.data === 'string' && event.data.indexOf('FlespiTools|') === 0) {
        let data = event.data.split('|')
        data = data[this.postkey ? 2 : 1].split('=>')
        cmd = data[0]
        try {
          payload = JSON.parse(data[1]) as TEventPayload
        } catch (e) {
          payload = data[1]
        }
        if (cmd) {
          this.bus.emit(cmd, payload)
        }
      }
    })
  }

  on (event: EventType, handler: Handler) {
    this.bus.on(event, handler)
  }

  send (cmd:TCommand, payload?:TCommandPayload) {
    cmd = `FlespiTools${this.postkey ? `|${this.postkey}` : ''}|${cmd}${payload ? `=>${JSON.stringify(payload)}` : ''}`
    window?.parent !== window && window?.parent.postMessage(cmd, '*')
    const opener = window.opener as Window
    opener?.postMessage(cmd, '*')
  }
}

const bus = new IntegrationBus()

export function useIntegrationBus () {
  return {
    bus
  }
}
