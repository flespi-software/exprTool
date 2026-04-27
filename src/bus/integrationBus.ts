import { TFlespiMessage } from '../api/flespi'
import mitt, { Emitter, EventType, Handler } from 'mitt'

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

export interface IEvents extends Record<EventType, unknown> {
  ExpressionsSetData: TFlespiMessage | TFlespiMessage[]
  ExpressionsSetExpression: string
  ExpressionsSetColumns: string[]
}
export type TEvent = keyof IEvents
export type TEventPayload = IEvents[TEvent]

class IntegrationBus {
  bus: Emitter<IEvents>
  postkey: string
  constructor() {
    this.bus = mitt<IEvents>()
    this.postkey = window.name
    window.addEventListener('message', (event: MessageEvent) => {
      if (typeof event.data === 'string' && event.data.indexOf('FlespiTools|') === 0) {
        const parts = (event.data as string).split('|')
        const tail = parts[this.postkey ? 2 : 1]
        if (!tail) return
        const sub = tail.split('=>')
        const cmd = sub[0] as TEvent
        let payload: TEventPayload
        try {
          payload = JSON.parse(sub[1] ?? '') as TEventPayload
        } catch {
          payload = sub[1] as TEventPayload
        }
        if (cmd) {
          this.bus.emit(cmd, payload)
        }
      }
    })
  }

  on(event: EventType, handler: Handler) {
    this.bus.on(event, handler)
  }

  send(cmd: TCommand, payload?: TCommandPayload) {
    const message = `FlespiTools${this.postkey ? `|${this.postkey}` : ''}|${cmd as string}${
      payload ? `=>${JSON.stringify(payload)}` : ''
    }`
    if (window?.parent !== window) {
      window?.parent.postMessage(message, '*')
    }
    const opener = window.opener as Window | null
    opener?.postMessage(message, '*')
  }
}

const bus = new IntegrationBus()

export function useIntegrationBus() {
  return { bus }
}
