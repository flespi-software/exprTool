import { TFlespiExprError } from 'src/api/flespi'
import { EditorView, Decoration, DecorationSet } from '@codemirror/view'
import { StateField, StateEffect } from '@codemirror/state'

const addUnderline = StateEffect.define<{ from: number, to: number }>()
const removeUnderline = StateEffect.define<{ from: number, to: number }>()

const underlineField = StateField.define<DecorationSet>({
  create () {
    return Decoration.none
  },
  update (underlines, tr) {
    underlines = underlines.map(tr.changes)
    for (const e of tr.effects) {
      if (e.is(addUnderline)) {
        underlines = underlines.update({
          add: [underlineMark.range(e.value.from, e.value.to)]
        })
      } else if (e.is(removeUnderline)) {
        underlines = underlines.update({
          filter: (from, to, value) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return value.spec.class !== 'cm-underline'
          }
        })
      }
    }
    return underlines
  },
  provide: f => EditorView.decorations.from(f)
})

const underlineMark = Decoration.mark({ class: 'cm-underline' })

const underlineTheme = EditorView.baseTheme({
  '.cm-underline': { textDecoration: 'underline wavy red 1px' }
})

export function underlineErrorHighlight (view: EditorView, error: TFlespiExprError) {
  let from = error.column || 0
  const to = view.state.doc.length
  if (!to) { return false }
  if (from === to) { from = 0 }
  const effects: StateEffect<unknown>[] = [
    addUnderline.of({ from, to })
  ]

  if (!view.state.field(underlineField, false)) {
    effects.push(StateEffect.appendConfig.of([underlineField, underlineTheme]))
  }
  view.dispatch({ effects })
  return true
}

export function underlineErrorHighlightClear (view: EditorView, error: TFlespiExprError) {
  let from = error.column || 0
  const to = view.state.doc.length
  if (!to) { return false }
  if (from === to) { from = 0 }
  const effects: StateEffect<unknown>[] = [
    removeUnderline.of({ from, to })
  ]

  view.dispatch({ effects })
  return true
}
