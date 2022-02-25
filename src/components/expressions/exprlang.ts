import { parser } from '@lezer/javascript'
import { LRLanguage, LanguageSupport } from '@codemirror/language'
import { styleTags, tags as t } from '@codemirror/highlight'
import { completeFromList, Completion } from '@codemirror/autocomplete'

export const exprlang = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        BooleanLiteral: t.bool,
        null: t.null,
        VariableName: t.variableName,
        'CallExpression/VariableName TaggedTemplateExpression/VariableName': t.function(t.variableName),
        VariableDefinition: t.definition(t.variableName),
        Label: t.labelName,
        PropertyName: t.propertyName,
        PrivatePropertyName: t.special(t.propertyName),
        'CallExpression/MemberExpression/PropertyName': t.function(t.propertyName),
        'FunctionDeclaration/VariableDefinition': t.function(t.definition(t.variableName)),
        'ClassDeclaration/VariableDefinition': t.definition(t.className),
        PropertyDefinition: t.definition(t.propertyName),
        PrivatePropertyDefinition: t.definition(t.special(t.propertyName)),
        UpdateOp: t.updateOperator,
        LineComment: t.lineComment,
        BlockComment: t.blockComment,
        Number: t.number,
        String: t.string,
        ArithOp: t.arithmeticOperator,
        LogicOp: t.logicOperator,
        BitOp: t.bitwiseOperator,
        CompareOp: t.compareOperator,
        RegExp: t.regexp,
        Equals: t.definitionOperator,
        'Arrow : Spread': t.punctuation,
        '( )': t.paren,
        '[ ]': t.squareBracket,
        '{ }': t.brace,
        'InterpolationStart InterpolationEnd': t.special(t.brace),
        '.': t.derefOperator,
        ', ;': t.separator
      })
    ]
  }),
  languageData: {
    closeBrackets: { brackets: ['(', '[', '{', "'", '"'] },
    wordChars: '$#'
  }
})

export function expr (config: { complitions?: Completion[] } = {}) {
  return new LanguageSupport(exprlang, exprlang.data.of({
    autocomplete: completeFromList(config.complitions || [])
  }))
}
