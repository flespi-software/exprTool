declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined
    VUE_ROUTER_BASE: string | undefined
  }
}

declare const DEV: boolean
declare const PROD: boolean
declare const LOCAL: boolean
declare const __APP_VERSION__: string
declare const __APP_NAME__: string
declare const __APP_PRODUCT__: string
