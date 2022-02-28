<template>
  <q-dialog ref="dialogRef" @hide="onHide" @show="showCode" full-width full-height>
    <q-card class="q-dialog-plugin" :class="{'bg-grey-9': isDark}">
      <q-card-section class="q-pa-none" style="height: calc(100% - 50px);">
        <json-input v-if="isCodeVisible" v-model="input" :theme="theme"/>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="OK" @click="onOKClick" :color="isDark ? 'white' : ''"/>
        <q-btn flat label="Cancel" @click="onCancelClick" :color="isDark ? 'white' : ''"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { TFlespiMessage } from '../../api/flespi'
import { useDialogPluginComponent } from 'quasar'
import { defineComponent, toRefs, ref, PropType, computed } from 'vue'
import JsonInput from './JsonInput.vue'

const parseData = (input: string) => {
  const result = {} as {result?: TFlespiMessage[], error?: string}
  try {
    let messages = JSON.parse(input) as (TFlespiMessage | TFlespiMessage[])
    if (!Array.isArray(messages)) {
      messages = [messages]
    }
    result.result = messages
  } catch (e) {
    result.error = (e as Error).message
  }
  return result
}

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<TFlespiMessage[]>,
      default: () => [],
      required: true
    },
    theme: {
      type: String as PropType<'dark'|'white'>,
      default: 'white'
    }
  },

  emits: [...useDialogPluginComponent.emits],
  components: { JsonInput },

  setup (props) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    const { data } = toRefs(props)
    const input = ref<string>(JSON.stringify(data.value, undefined, 2))
    const error = ref<string>('')
    const isDark = computed<boolean>(() => props.theme === 'dark')
    const isCodeVisible = ref<boolean>(false)

    const showCode = () => { isCodeVisible.value = true }

    return {
      input,
      error,
      isDark,
      isCodeVisible,
      showCode,
      dialogRef,
      onHide () { onDialogHide() },
      onOKClick () {
        const resp = parseData(input.value)
        if (resp.error) {
          error.value = resp.error
        } else {
          onDialogOK(resp.result)
        }
      },
      onCancelClick: onDialogCancel
    }
  }
})
</script>
