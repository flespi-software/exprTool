<template>
  <div class="q-pa-sm window-height" :class="{ 'bg-grey-9': theme === 'dark' }">
    <div class="q-pb-sm" style="height: 120px;">
      <expression-input v-model="expression" :errors="dataMappedErrors || errors" :functions="functions" :cols="messagesFields" :theme="theme"/>
      <q-btn round flat :color="theme === 'dark' ? 'white' : ''" icon="mdi-information-outline" @click="showFunctions" class="absolute-top-right" style="right: 8px; top: 8px;">
        <q-tooltip>Show all functions</q-tooltip>
      </q-btn>
    </div>
    <messages-table
      style="height: calc(100% - 120px);"
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
import { IFlespiResponse, TFlespiExprDataError, TFlespiExprError, TFlespiExprFunction, TFlespiExprValidationModel, TFlespiMessage } from 'src/api/flespi'
import { useStore } from 'src/store'
import { useQuasar } from 'quasar'
import { debounceAsync } from '../tools/debounceAsync'
import { defineComponent, computed, watch, ref, toRefs, PropType, onMounted } from 'vue'
import MessagesTable from 'src/components/expressions/MessagesTable.vue'
import FunctionsDialog from 'src/components/expressions/FunctionsDialog.vue'
import ExpressionInput from 'src/components/expressions/ExpressionInput.vue'
import { busEventExpressionsSetData, busCommandReady, busEventExpressionsSetExpression, busEventExpressionsSetColumns } from '../bus'

export default defineComponent({
  props: {
    theme: {
      type: String as PropType<'dark'|'white'>,
      default: 'white'
    }
  },
  components: { MessagesTable, ExpressionInput },
  setup (props) {
    const { theme } = toRefs(props)
    const $q = useQuasar()
    const $store = useStore()
    const validation = ref<TFlespiExprValidationModel[]>([])
    const errors = ref<TFlespiExprError[] | undefined>([])
    const cols = ref<string[]|undefined>()
    const expression = computed<string>({
      get () { return $store.state.expressions.expression },
      set (expr: string): void {
        $store.commit('expressions/setExpr', expr)
      }
    })
    const input = computed<TFlespiMessage[]>({
      get () { return $store.state.expressions.input },
      set (input: TFlespiMessage[]): void {
        $store.commit('expressions/setInput', input)
      }
    })

    const messagesFields = computed<string[]>(() => {
      return Object.keys(input.value.reduce((result, message) => {
        return { ...result, ...message }
      }, {}))
    })

    const functions = computed<TFlespiExprFunction[]>(() => $store.state.expressions.functions)
    const showFunctions = () => {
      $q.dialog({
        component: FunctionsDialog,
        componentProps: {
          functions: functions.value,
          theme: theme.value
        }
      })
    }
    type TFlespiExprValidResp = IFlespiResponse<TFlespiExprValidationModel, TFlespiExprError>
    const validateData = debounceAsync(() => $store.dispatch('expressions/validateExpression'), 3000)
    const validateExpr = () => $store.dispatch('expressions/validateExpression', { onlyValidate: true })
    const validate = async (): Promise<void> => {
      const validExpr = await validateExpr() as TFlespiExprValidResp
      errors.value = validExpr.errors
      if (!validExpr.errors) {
        const validData = await validateData() as TFlespiExprValidResp
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
      $store.commit('expressions/updateCell', { index, name, data })
      void validate()
    }
    void $store.dispatch('expressions/getExpressionFunctions')
    watch([expression, input], validate, { immediate: true })

    busEventExpressionsSetData(updateInput)
    busEventExpressionsSetExpression((expr) => { expression.value = expr })
    busEventExpressionsSetColumns(columns => { cols.value = columns })
    onMounted(() => {
      busCommandReady()
    })

    const dataError = ref<TFlespiExprDataError|undefined>()
    const dataMappedErrors = computed<TFlespiExprError[]|undefined>(() => {
      let res
      if (dataError.value) {
        res = [{
          code: 2,
          reason: dataError.value.reason,
          column: dataError.value.column
        }]
      }
      return res
    })
    function setDataError (error:TFlespiExprDataError|undefined) {
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
      dataMappedErrors
    }
  }
})
</script>
