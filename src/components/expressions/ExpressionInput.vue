<template>
  <div ref="codeMirrorRef" class="code-editor__container" :class="{'code-editor__container--errors': errors, [`code-editor__container--theme-${theme}`]: true}"></div>
</template>

<script lang="ts">
import { useCodeMirrorFeature, reconfigureMap } from '../codemirror/codemirror'
import { TFlespiExprError, TFlespiExprFunction } from 'src/api/flespi'
import { computed, toRefs, defineComponent, PropType, watch, Ref, onMounted } from 'vue'
import { debounce } from 'quasar'
import { EditorView, ViewUpdate } from '@codemirror/view'
import { autocompletion, CompletionContext, Completion } from '@codemirror/autocomplete'
import { Panel, showPanel } from '@codemirror/panel'
import { expr } from './exprlang'
import { useThemeFeature } from './codemirrorThemes'
import { underlineErrorHighlight, underlineErrorHighlightClear } from './underline'

function useCMPanelFeature (codeMirrorView: Ref<EditorView | undefined>, errors: Ref<TFlespiExprError[] | undefined>) {
  watch(errors, (errors) => {
    function errorsPanel (): Panel {
      const dom = document.createElement('div')
      const errorsStr = () => errors?.map(e => e.reason).join(', ') || null
      dom.textContent = errorsStr()
      dom.className = 'cm-panel-errors q-pa-xs text-italic text-weight-medium'
      return {
        dom
      }
    }
    codeMirrorView.value?.dispatch({
      effects: reconfigureMap.panel.reconfigure(errors ? showPanel.of(errorsPanel) : [])
    })
  }, { immediate: true })
}

function useCMAutocompliteFeature (codeMirrorView: Ref<EditorView | undefined>, functions: Ref<TFlespiExprFunction[] | undefined>, cols: Ref<string[]>) {
  const getHints = function () {
    const funcsHints = functions.value?.reduce((result: Completion[], func) => {
      result.push({ label: func.name, type: 'function', apply: func.usage, detail: func.description })
      return result
    }, [] as Completion[])
    const fieldsHints = cols.value?.reduce((result: Completion[], field) => {
      result.push({ label: field, type: 'keyword' })
      return result
    }, [] as Completion[])
    return [...(funcsHints || []), ...(fieldsHints || [])] as Completion[]
  }
  const updateComplition = () => {
    codeMirrorView.value?.dispatch({
      effects: reconfigureMap.autocomplition.reconfigure(autocompletion({
        override: [
          (context: CompletionContext) => {
            const word = context.matchBefore(/\w*/)
            if (!word || (word.from === word.to && !context.explicit)) {
              return null
            }
            return {
              from: word.from,
              options: getHints() || []
            }
          }
        ]
      }))
    })
  }
  watch(functions, updateComplition)
}

function useLangFeature (codeMirrorView: Ref<EditorView | undefined>) {
  onMounted(() => {
    codeMirrorView.value?.dispatch({
      effects: reconfigureMap.lang.reconfigure(expr())
    })
  })
}

function useCMDocUpdateFeature (codeMirrorView: Ref<EditorView | undefined>, modelValue: Ref<string|undefined>) {
  watch(modelValue, (expression) => {
    const doc = codeMirrorView.value?.state.doc.toString()
    if (expression !== doc) {
      codeMirrorView.value?.dispatch({
        changes: { from: 0, to: doc?.length, insert: expression }
      })
    }
  })
}

function useUnderlineFeature (codeMirrorView: Ref<EditorView | undefined>, errors: Ref<TFlespiExprError[] | undefined>) {
  watch(errors, (errors, prevErrors) => {
    if (codeMirrorView.value) {
      if (prevErrors && prevErrors.length) {
        underlineErrorHighlightClear(codeMirrorView.value, prevErrors[0])
      }
      if (errors && errors.length) {
        underlineErrorHighlight(codeMirrorView.value, errors[0])
      }
    }
  })
}

function useAutofocusFeature (codeMirrorView: Ref<EditorView | undefined>) {
  const timer = setInterval(() => {
    if (codeMirrorView.value) {
      codeMirrorView.value.focus()
      if (codeMirrorView.value.hasFocus) clearInterval(timer)
    }
  }, 500)
}

export default defineComponent({
  name: 'ExpressionInput',
  props: {
    modelValue: String as PropType<string>,
    errors: {
      type: Array as PropType<TFlespiExprError[] | undefined>
    },
    functions: {
      type: Array as PropType<TFlespiExprFunction[]>
    },
    cols: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: true
    },
    theme: {
      type: String as PropType<'dark'|'white'>,
      default: 'white'
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const { modelValue, functions, errors, cols, theme } = toRefs(props)
    const expression = computed<string>({
      get () { return modelValue.value || '' },
      set: debounce((val) => { emit('update:modelValue', val) })
    })
    const { codeMirrorRef, codeMirrorView } = useCodeMirrorFeature({
      initialDoc: expression.value,
      onChange (update: ViewUpdate) {
        if (update.docChanged) {
          expression.value = update.state.doc.toString()
        }
      }
    })

    useCMPanelFeature(codeMirrorView, errors)
    useCMAutocompliteFeature(codeMirrorView, functions, cols)
    useLangFeature(codeMirrorView)
    useThemeFeature(codeMirrorView, theme)
    useCMDocUpdateFeature(codeMirrorView, modelValue)
    useUnderlineFeature(codeMirrorView, errors)
    useAutofocusFeature(codeMirrorView)
    return {
      expression, codeMirrorRef, codeMirrorView
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
