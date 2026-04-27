<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view v-if="logged" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSystemStore } from 'src/stores/system'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const system = useSystemStore()
    const $router = useRouter()
    const $route = useRoute()

    const { logged, sessionSettings } = storeToRefs(system)

    const manualLogin = () => {
      $router.push('/login').catch((e) => console.log('Redirect to manual login failed', e))
    }

    if (!logged.value) {
      const sessionStorageToken = sessionSettings.value.token
      const sessionStorageRegion = sessionSettings.value.region
      if ($route.query.token) {
        system
          .login({ token: $route.query.token as string })
          .then((loggedin) => {
            if (!loggedin) manualLogin()
          })
          .catch((e) => console.log('Login by router failed', e))
      } else if (sessionStorageToken) {
        system
          .login({ token: sessionStorageToken, region: sessionStorageRegion })
          .then((loggedin) => {
            if (!loggedin) manualLogin()
          })
          .catch((e) => console.log('Session restore failed', e))
      } else {
        manualLogin()
      }
    }

    const loggedComputed = computed(() => logged.value)
    return { logged: loggedComputed }
  },
})
</script>
