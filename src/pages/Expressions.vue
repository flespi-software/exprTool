<template>
  <div class="q-pa-sm window-height" :class="{ 'bg-grey-9': theme === 'dark' }">
    <div class="q-pb-sm" style="height: 120px">
      <expression-input
        v-model="expression"
        :errors="dataMappedErrors || errors"
        :functions="functions"
        :cols="messagesFields"
        :theme="theme"
      />
      <q-btn
        round
        flat
        :color="theme === 'dark' ? 'white' : ''"
        icon="mdi-information-outline"
        @click="showFunctions"
        class="absolute-top-right"
        style="right: 8px; top: 8px"
      >
        <q-tooltip>Show all functions</q-tooltip>
      </q-btn>
    </div>
    <messages-table
      style="height: calc(100% - 120px)"
      :messages="input"
      :cols="cols || messagesFields"
      :validate-models="validation"
      :theme="theme"
      @update:cell="updateCellHandler"
      @update:messages="updateInput"
      @show:error="setDataError"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref, toRefs, PropType, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { debounceAsync } from '../tools/debounceAsync'
import MessagesTable from 'src/components/expressions/MessagesTable.vue'
import FunctionsDialog from 'src/components/expressions/FunctionsDialog.vue'
import ExpressionInput from 'src/components/expressions/ExpressionInput.vue'
import {
  busEventExpressionsSetData,
  busCommandReady,
  busEventExpressionsSetExpression,
  busEventExpressionsSetColumns,
} from '../bus'
import { useExpressionsStore } from 'src/stores/expressions'
import {
  TFlespiExprDataError,
  TFlespiExprError,
  TFlespiExprFunction,
  TFlespiExprValidationModel,
  TFlespiMessage,
} from 'src/api/flespi'

export default defineComponent({
  name: 'ExpressionsPage',
  props: {
    theme: {
      type: String as PropType<'dark' | 'white'>,
      default: 'white',
    },
  },
  components: { MessagesTable, ExpressionInput },
  setup(props) {
    const { theme } = toRefs(props)
    const $q = useQuasar()
    const expressions = useExpressionsStore()
    const validation = ref<TFlespiExprValidationModel[]>([])
    const errors = ref<TFlespiExprError[] | undefined>([])
    const cols = ref<string[] | undefined>()

    const expression = computed<string>({
      get() {
        return expressions.expression
      },
      set(expr: string) {
        expressions.setExpr(expr)
      },
    })
    const input = computed<TFlespiMessage[]>({
      get() {
        return expressions.input
      },
      set(val: TFlespiMessage[]) {
        expressions.setInput(val)
      },
    })

    const messagesFields = computed<string[]>(() =>
      Object.keys(
        input.value.reduce(
          (result, message) => ({ ...result, ...message }),
          {} as TFlespiMessage,
        ),
      ),
    )

    const functions = computed<TFlespiExprFunction[]>(() => expressions.functions)
    const showFunctions = () => {
      $q.dialog({
        component: FunctionsDialog,
        componentProps: {
          functions: functions.value,
          theme: theme.value,
        },
      })
    }

    const validateData = debounceAsync(() => expressions.validateExpression(), 3000)
    const validateExpr = () => expressions.validateExpression({ onlyValidate: true })
    const validate = async (): Promise<void> => {
      const validExpr = await validateExpr()
      errors.value = validExpr.errors
      if (!validExpr.errors) {
        const validData = await validateData()
        validation.value = validData.result
        errors.value = validData.errors
      } else {
        validation.value = []
      }
    }
    const updateInput = (messages: TFlespiMessage[]) => {
      input.value = messages
    }
    const updateCellHandler = (name: string, index: number, data: unknown) => {
      expressions.updateCell({ index, name, data })
      void validate()
    }
    void expressions.getExpressionFunctions()
    watch([expression, input], validate, { immediate: true })

    busEventExpressionsSetData(updateInput)
    busEventExpressionsSetExpression((expr) => {
      expression.value = expr
    })
    busEventExpressionsSetColumns((columns) => {
      cols.value = columns
    })
    onMounted(() => {
      busCommandReady()
    })

    const dataError = ref<TFlespiExprDataError | undefined>()
    const dataMappedErrors = computed<TFlespiExprError[] | undefined>(() => {
      if (dataError.value) {
        return [
          {
            code: 2,
            reason: dataError.value.reason,
            column: dataError.value.column,
          },
        ]
      }
      return undefined
    })
    function setDataError(error: TFlespiExprDataError | undefined) {
      dataError.value = error
    }

    return {
      expression,
      input,
      functions,
      updateInput,
      validation,
      errors,
      updateCellHandler,
      showFunctions,
      messagesFields,
      cols,
      setDataError,
      dataMappedErrors,
    }
  },
})
</script>
