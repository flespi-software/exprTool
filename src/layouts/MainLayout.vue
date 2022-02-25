<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view v-if="logged"/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Store } from 'vuex'
import { StateInterface, useStore } from 'src/store'
import { TAppSessionStorage } from 'src/store/system/state'
import { defineComponent, computed } from 'vue'
import { useRouter, useRoute, Router, RouteLocationNormalizedLoaded } from 'vue-router'

function login ($store: Store<StateInterface>, $router: Router, $route: RouteLocationNormalizedLoaded) {
  const logged = computed<boolean>(() => $store.state.system.logged)
  const manualLogin = () => {
    $router.push('/login').catch(e => { console.log('Redirect to manual login failed', e) })
  }
  if (!logged.value) {
    const sessionSettings = computed<TAppSessionStorage>(() => $store.state.system.sessionSettings)
    const sessionStorageToken = sessionSettings.value.token
    const sessionStorageRegion = sessionSettings.value.region
    if ($route.query.token) {
      $store.dispatch('system/login', { token: $route.query.token })
        .then((loggedin) => { if (!loggedin) { manualLogin() } })
        .catch(e => { console.log('Login by router failed', e) })
    } else if (sessionStorageToken) {
      $store.dispatch('system/login', { token: sessionStorageToken, region: sessionStorageRegion })
        .then((loggedin) => { if (!loggedin) { manualLogin() } })
        .catch(e => { console.log('Session restore failed', e) })
    } else {
      manualLogin()
    }
  }
  return { logged }
}

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const $store = useStore()
    const $router = useRouter()
    const $route = useRoute()

    const loginData = login($store, $router, $route)

    return { ...loginData }
  }
})
</script>
