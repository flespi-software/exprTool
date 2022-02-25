import {
  acceptCompletion,
  autocompletion,
  completionKeymap,
  startCompletion
} from '@codemirror/autocomplete'
import { defaultKeymap } from '@codemirror/commands'
import { commentKeymap } from '@codemirror/comment'
import { highlightActiveLineGutter, lineNumbers } from '@codemirror/gutter'
import { defaultHighlightStyle } from '@codemirror/highlight'
import { history, historyKeymap } from '@codemirror/history'
import { indentOnInput } from '@codemirror/language'
import { bracketMatching } from '@codemirror/matchbrackets'
import { Compartment, EditorState } from '@codemirror/state'
import {
  EditorView,
  highlightActiveLine,
  KeyBinding,
  keymap,
  ViewUpdate
} from '@codemirror/view'
import { onMounted, ref, Ref } from 'vue'

export const baseTheme = EditorView.theme({
  '&': {
    height: '100%'
  },
  '&:focus': {
    outline: 'none !important'
  }
})

const customKeyMap: KeyBinding[] = [
  {
    key: 'Tab',
    run (target) {
      return acceptCompletion(target)
    }
  },
  {
    key: 'Shift-Space',
    run: startCompletion
  }
]

interface IProps {
  initialDoc: string,
  onChange?: (state: ViewUpdate) => void
}

export interface ICodeMirrorMount<T> {
  codeMirrorRef: Ref<T | undefined>,
  codeMirrorView: Ref<EditorView | undefined>
}

export const reconfigureMap = {
  defaultKeymap: new Compartment(),
  historyKeymap: new Compartment(),
  completionKeymap: new Compartment(),
  commentKeymap: new Compartment(),
  customKeyMap: new Compartment(),
  theme: new Compartment(),
  highlight: new Compartment(),
  autocomplition: new Compartment(),
  panel: new Compartment(),
  lang: new Compartment()
}
export const extensions = [
  reconfigureMap.defaultKeymap.of(keymap.of(defaultKeymap)),
  reconfigureMap.historyKeymap.of(keymap.of(historyKeymap)),
  reconfigureMap.customKeyMap.of(keymap.of(customKeyMap)),
  reconfigureMap.completionKeymap.of(keymap.of(completionKeymap)),
  reconfigureMap.commentKeymap.of(keymap.of(commentKeymap)),
  reconfigureMap.autocomplition.of(autocompletion({
    activateOnTyping: true,
    defaultKeymap: true
  })),
  reconfigureMap.panel.of([]),
  reconfigureMap.highlight.of(defaultHighlightStyle),
  reconfigureMap.theme.of(baseTheme),
  reconfigureMap.lang.of([])
]

export function useCodeMirrorFeature<T extends Element> (props: IProps) : ICodeMirrorMount<T> {
  const refContainer = ref<T>()
  const editorView = ref<EditorView>()
  const { onChange } = props

  onMounted(() => {
    if (!refContainer.value) return

    const startState = EditorState.create({
      doc: props.initialDoc,
      extensions: [
        ...extensions,
        lineNumbers(),
        highlightActiveLineGutter(),
        history(),
        indentOnInput(),
        bracketMatching(),
        highlightActiveLine(),
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          onChange && onChange(update)
        })
      ]
    })

    const view = new EditorView({
      state: startState,
      parent: refContainer.value
    })

    editorView.value = view
  })

  return { codeMirrorRef: refContainer, codeMirrorView: editorView }
}
