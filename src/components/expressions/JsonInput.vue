<template>
  <div ref="codeMirrorRef" class="code-editor__container" :class="{'code-editor__container--errors': error, [`code-editor__container--theme-${theme}`]: true}"></div>
</template>

<script lang="ts">
import { useDialogPluginComponent } from 'quasar'
import { defineComponent, toRefs, PropType, computed, onMounted, Ref, watch } from 'vue'
import { useCodeMirrorFeature, reconfigureMap } from '../codemirror/codemirror'
import { EditorView, ViewUpdate } from '@codemirror/view'
import { json } from '@codemirror/lang-json'
import { Panel, showPanel } from '@codemirror/panel'
import { useThemeFeature } from './codemirrorThemes'

function useCMPanelFeature (codeMirrorView: Ref<EditorView | undefined>, error: Ref<string | undefined>) {
  watch(error, (error) => {
    function errorsPanel (): Panel {
      const dom = document.createElement('div')
      dom.textContent = error || null
      dom.className = 'cm-panel-errors q-pa-xs text-italic text-weight-medium'
      return {
        dom
      }
    }
    codeMirrorView.value?.dispatch({
      effects: reconfigureMap.panel.reconfigure(error ? showPanel.of(errorsPanel) : [])
    })
  }, { immediate: true })
}

export default defineComponent({
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: '',
      required: true
    },
    error: {
      type: String as PropType<string>,
      default: ''
    },
    theme: {
      type: String as PropType<'dark'|'white'>,
      default: 'white'
    }
  },

  emits: [...useDialogPluginComponent.emits, 'update:modelValue'],

  setup (props, { emit }) {
    const { modelValue, error, theme } = toRefs(props)
    const isDark = computed<boolean>(() => props.theme === 'dark')

    const { codeMirrorRef, codeMirrorView } = useCodeMirrorFeature({
      initialDoc: modelValue.value,
      onChange (update: ViewUpdate) {
        if (update.docChanged) {
          emit('update:modelValue', update.state.doc.toString())
        }
      }
    })

    useCMPanelFeature(codeMirrorView, error)
    useThemeFeature(codeMirrorView, theme)

    onMounted(() => {
      codeMirrorView.value?.dispatch({
        effects: reconfigureMap.lang.reconfigure(json())
      })
    })

    return {
      isDark,
      codeMirrorRef,
      codeMirrorView
    }
  }
})
</script>

<style lang="sass">
.code-editor__container
  flex-grow: 1
  display: flex
  flex-direction: column
  overflow: auto
  width: 100%
  height: 100%
</style>
