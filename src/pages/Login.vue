<template>
  <div class="login-page window-height window-width bg-light column items-center no-wrap">
    <div class="login-back flex items-center justify-center">
      <div class="login-code flex justify-center">
        <div v-if="!$route.params.token">
          <div v-if="!canLogin || $q.platform.within.iframe" class="login-card shadow-4 bg-white column items-center justify-center no-wrap">
            <div class="row full-width">
              <div class="col-12 text-center text-red text-bold">
                <span>Token has been expired or revoked</span>
              </div>
            </div>
          </div>
          <div v-else class="login-card shadow-4 bg-white column items-center justify-center no-wrap">
            <img src="tools.png" alt="Tools">
            <p class="text-center text-grey-9 text-bold">exprTool</p>
            <div class="row full-width">
              <div class="col-12 text-center">
                <q-btn @click="openWindow(`${authHost}/login/#/providers`)" icon="mdi-account-circle" color="red-7" rounded label="login / register" :size="$q.platform.is.mobile ? 'md' : 'lg'"/>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="login-card shadow-4 bg-white column items-center justify-center no-wrap">
            <q-circular-progress indeterminate color="green-6" style="width: 100%; height: 45px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TFlespiRegion } from 'src/api/flespi'
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'src/store'
import { config } from '../api/flespi-io'

function openWindow (url: string, title = 'auth') {
  const w = 500, h = 600
  const dualScreenLeft = window.screenLeft
  const dualScreenTop = window.screenTop

  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

  const left = ((width / 2) - (w / 2)) + dualScreenLeft
  const top = ((height / 2) - (h / 2)) + dualScreenTop
  const newWindow = window.open(url, title, `toolbar=no,location=no,status=yes,resizable=yes,scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`)

  // Puts focus on the newWindow
  if (newWindow) {
    newWindow.focus()
  }
}

function manualLogin (callback: (loginModel: { token: string, region: TFlespiRegion }) => unknown) {
  const tokenHandler = (event: MessageEvent) => {
    if (typeof event.data === 'string' && ~event.data.indexOf('FlespiLogin|token:')) {
      window.removeEventListener('message', tokenHandler)
      let payload = event.data
      payload = payload.replace('FlespiLogin|token:', '')
      const loginModel = JSON.parse(payload) as { token: string, region: TFlespiRegion }
      callback(loginModel)
    }
  }
  window.addEventListener('message', tokenHandler)
}

export default defineComponent({
  setup () {
    const canLogin = ref(true)
    const $store = useStore()
    const $route = useRoute()
    const $router = useRouter()

    manualLogin(
      loginModel => {
        $store.dispatch('system/login', loginModel)
          .then(() => {
            $router.push($route.params.goto as string || '/').catch(e => console.log(e))
          }).catch(e => console.log('Login failed', e))
      }
    )

    return {
      canLogin,
      openWindow,
      authHost: config?.server || 'https://flespi.io'
    }
  }
})
</script>

<style lang="scss">
  .row__wrapper {
    height: 80px;
  }
  .login-page {
    .login-back {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      padding-top: 15vh;
      background-image: url(../../public/mountain.svg);
      background-position: center 100px;
      background-size: contain;
      background-repeat: no-repeat;
      background-color: #333;
      color: rgba(255,255,255,0.7);
      .login-code {
        width: 80vw;
        max-width: 600px;
      }
    }
    .login-card {
      border-radius: 2px;
      width: 80vw;
      max-width: 600px;
      padding: 25px;
      > i {
        font-size: 5rem;
      }
    }
  }
</style>
