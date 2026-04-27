import {
  acceptCompletion,
  autocompletion,
  completionKeymap,
  startCompletion,
} from '@codemirror/autocomplete'
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands'
import {
  bracketMatching,
  defaultHighlightStyle,
  indentOnInput,
  syntaxHighlighting,
} from '@codemirror/language'
import { Compartment, EditorState } from '@codemirror/state'
import {
  EditorView,
  KeyBinding,
  ViewUpdate,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers,
} from '@codemirror/view'
import { Ref, onMounted, ref } from 'vue'

export const baseTheme = EditorView.theme({
  '&': {
    height: '100%',
  },
  '&:focus': {
    outline: 'none !important',
  },
})

const customKeyMap: KeyBinding[] = [
  {
    key: 'Tab',
    run(target) {
      return acceptCompletion(target)
    },
  },
  {
    key: 'Shift-Space',
    run: startCompletion,
  },
]

interface IProps {
  initialDoc: string
  onChange?: (state: ViewUpdate) => void
}

export interface ICodeMirrorMount<T> {
  codeMirrorRef: Ref<T | undefined>
  codeMirrorView: Ref<EditorView | undefined>
}

export const reconfigureMap = {
  defaultKeymap: new Compartment(),
  historyKeymap: new Compartment(),
  completionKeymap: new Compartment(),
  customKeyMap: new Compartment(),
  theme: new Compartment(),
  highlight: new Compartment(),
  autocomplition: new Compartment(),
  panel: new Compartment(),
  lang: new Compartment(),
}

export const extensions = [
  reconfigureMap.defaultKeymap.of(keymap.of(defaultKeymap)),
  reconfigureMap.historyKeymap.of(keymap.of(historyKeymap)),
  reconfigureMap.customKeyMap.of(keymap.of(customKeyMap)),
  reconfigureMap.completionKeymap.of(keymap.of(completionKeymap)),
  reconfigureMap.autocomplition.of(
    autocompletion({
      activateOnTyping: true,
      defaultKeymap: true,
    }),
  ),
  reconfigureMap.panel.of([]),
  reconfigureMap.highlight.of(syntaxHighlighting(defaultHighlightStyle)),
  reconfigureMap.theme.of(baseTheme),
  reconfigureMap.lang.of([]),
]

export function useCodeMirrorFeature<T extends Element>(
  props: IProps,
): ICodeMirrorMount<T> {
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
          if (onChange) onChange(update)
        }),
      ],
    })

    const view = new EditorView({
      state: startState,
      parent: refContainer.value,
    })

    editorView.value = view
  })

  return { codeMirrorRef: refContainer, codeMirrorView: editorView }
}
