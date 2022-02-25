import { Ref, onMounted } from 'vue'
import { EditorView } from '@codemirror/view'
import { tags, HighlightStyle } from '@codemirror/highlight'
import { reconfigureMap } from '../codemirror/codemirror'
import { StateEffect } from '@codemirror/state'
export function useThemeFeature (codeMirrorView: Ref<EditorView | undefined>, theme: Ref<'dark'|'white'>) {
  const effects: StateEffect<unknown>[] = []
  const whiteTheme = EditorView.theme({
    '&': {
      height: '100%',
      color: '#424242',
      backgroundColor: 'white',
      borderRadius: '4px'
    },
    '&:focus': {
      outline: 'none !important'
    },
    '.cm-gutters': {
      borderRadius: '4px'
    },
    '.cm-panels-bottom': {
      borderBottomRightRadius: '4px',
      borderBottomLeftRadius: '4px'
    },
    '.cm-panel-errors': {
      borderBottomRightRadius: '4px',
      borderBottomLeftRadius: '4px',
      backgroundColor: '#ffcdd2'
    }
  })
  const darkTheme = EditorView.theme({
    '&': {
      height: '100%',
      color: 'white',
      backgroundColor: '#616161',
      borderRadius: '4px'
    },
    '&:focus': {
      outline: 'none !important'
    },
    '.cm-content': {
      caretColor: '#f5f5f5'
    },
    '&.cm-focused .cm-cursor': {
      borderLeftColor: '#f5f5f5'
    },
    '&.cm-focused .cm-selectionBackground, ::selection': {
      backgroundColor: '#212121'
    },
    '.cm-activeLine': {
      backgroundColor: '#616161'
    },
    '.cm-gutters': {
      color: '#aaa',
      backgroundColor: '#616161',
      border: 'none',
      borderRadius: '4px'
    },
    '.cm-activeLineGutter': {
      backgroundColor: '#616161',
      color: '#fff'
    },
    '.cm-panels-bottom': {
      borderBottomRightRadius: '4px',
      borderBottomLeftRadius: '4px'
    },
    '.cm-panel-errors': {
      borderBottomRightRadius: '4px',
      borderBottomLeftRadius: '4px',
      backgroundColor: '#d32f2f'
    }
  }, { dark: true })
  effects.push(reconfigureMap.theme.reconfigure(theme.value === 'dark' ? darkTheme : whiteTheme))
  if (theme.value === 'dark') {
    const darkHighlightStyle = HighlightStyle.define([
      { tag: tags.string, color: '#ff9898' },
      { tag: tags.number, color: '#83f1ff' },
      { tag: tags.bool, color: '#cfc8ff' }
    ])
    effects.push(reconfigureMap.highlight.reconfigure(darkHighlightStyle))
  }
  onMounted(() => {
    codeMirrorView.value?.dispatch({
      effects: effects
    })
  })
}
