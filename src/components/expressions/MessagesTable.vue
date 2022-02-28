<template>
  <q-table
    class="messages-table"
    :class="{'messages-table--col-info': validateModels.length, 'bg-grey-9': isDark, 'messages-table--dark-theme': isDark}"
    title="Messages"
    :rows="filteredMessages"
    :dense="messages.length > 20"
    :columns="columns"
    row-key="name"
    hide-pagination
    :rows-per-page-options="[0]"
    :dark="isDark"
  >
    <template v-slot:top>
      <div class="q-table__title">Messages</div>
      <q-space />
      <q-file class="hidden" ref="fileCtrl" v-model="file" accept=".json"/>
      <q-toggle flat round icon="mdi-format-list-bulleted-square" :disable="!validateModels.length" v-model="needFilterByResult">
        <q-tooltip>Show messages with result</q-tooltip>
      </q-toggle>
      <q-btn flat round icon="mdi-playlist-plus" @click="e => importJson(e as Event)">
        <q-tooltip>Import</q-tooltip>
      </q-btn>
      <q-btn round class="q-ml-sm" flat @click="showEditDialog" icon="mdi-code-braces">
        <q-tooltip>Edit JSON</q-tooltip>
      </q-btn>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props" @mouseover="setHoveredMessage(props.rowIndex)" @mouseleave="removeHoveredMessage()">
        <q-td v-for="col in props.cols" :key="col.name" :props="props" :class="[highlightCol(col, props.rowIndex)]">
          <template v-if="col.field === '__result'">
            <span class="text-bold text-italic" v-if="filteredValidateModels[props.rowIndex]?.result === undefined">
              {{filteredValidateModels[props.rowIndex].error?.reason}}
            </span>
            <span class="text-bold" v-else>{{filteredValidateModels[props.rowIndex]?.result}}</span>
          </template>
          <template v-else>
            {{ props.row[col.name] }}
            <q-popup-edit
              v-slot="scope" :color="isDark ? 'grey-9' : ''"
              :model-value="getEditValue(props.row[col.name])"
              @update:model-value="val => $emit('update:cell', ...updateCell(col.name, props.rowIndex, val))"
              :title="`Update ${col.name}`"
              buttons persistent
            >
              <q-input v-model="scope.value" dense autofocus :color="isDark ? 'grey-9' : ''" />
            </q-popup-edit>
          </template>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script lang="ts">
import { TFlespiExprValidationModel, TFlespiMessage } from 'src/api/flespi'
import { defineComponent, toRefs, ref, computed, watch, PropType, Ref, getCurrentInstance } from 'vue'
import { useQuasar, QTableProps, QFileProps, QFile } from 'quasar'
import JsonEditDialog from './JsonEditDialog.vue'
import { Flatten } from 'src/global'

function getCols (
  columns: Ref<string[]>,
  validations: Ref<TFlespiExprValidationModel[]>
) : QTableProps['columns'] {
  const cols = columns.value.reduce((result: QTableProps['columns'] = [], fieldName) => {
    result.push({
      name: fieldName,
      label: fieldName,
      align: 'center',
      field: fieldName
    })
    return result
  }, [])
  if (columns.value.length && validations.value.length) {
    cols?.unshift(
      {
        name: 'Expression result',
        label: 'Expression result',
        align: 'center',
        field: '__result',
        classes: 'result-col',
        headerClasses: 'result-col result-col__header'
      }
    )
  }
  return cols
}
type THighlightLevel = {
  data: number,
  results: number
}
function useHighlightRowsFeature (validations: Ref<TFlespiExprValidationModel[]>, theme: Ref<'dark'|'white'>) {
  const highlightLevels = computed<THighlightLevel>(() => {
    let res = {
      data: 2,
      results: 3
    }
    if (theme.value === 'dark') {
      res = {
        data: 8,
        results: 9
      }
    }
    return res
  })

  const getHighlightClasses = (data: TFlespiExprValidationModel, level = 2) => {
    let classes = ''
    if (data) {
      if (data.result !== undefined) {
        classes = `bg-purple-${level}`
      } else {
        classes = `bg-${theme.value === 'dark' ? 'grey-9' : 'white'}`
      }
    }
    return classes
  }

  function highlightCol (col: Flatten<QTableProps['columns']>, index: number) {
    const validateModel = validations.value[index]
    let res
    if (col?.field === '__result') {
      res = getHighlightClasses(validateModel, highlightLevels.value.results)
    } else {
      res = getHighlightClasses(validateModel, highlightLevels.value.data)
    }
    return res
  }

  return {
    highlightLevels,
    highlightCol
  }
}

function useUpdateCellFeature (messages: Ref<TFlespiMessage[]>) {
  const getEditValue = (value: unknown) => {
    return typeof value === 'string'
      ? value
      : JSON.stringify(value)
  }
  const updateCell = (name: string, index: number, value: string) => {
    const dataType = typeof messages.value[index][name]
    let data: unknown = value
    if (dataType !== 'string') {
      try {
        data = JSON.parse(value) as unknown
      } catch (e) {
        data = undefined
      }
    }
    return [name, index, data]
  }
  return { getEditValue, updateCell }
}

function useImportJsonFeature () {
  const fileCtrl = ref<QFile|null>(null)
  const vm = getCurrentInstance() as NonNullable<ReturnType<typeof getCurrentInstance>>
  const file = ref<QFileProps['modelValue']>(null)
  const readFile = (file: File) : Promise<string|ArrayBuffer|null> => {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = reject
      reader.readAsText(file)
    })
  }
  const resolveData = () : Promise<TFlespiMessage[]|undefined> => new Promise((resolve, reject) => {
    const stopWatching = watch(file, async (file: QFileProps['modelValue']) => {
      const filePicker = fileCtrl.value as unknown as QFile
      if (file instanceof File) {
        const data = await readFile(file)
        filePicker.removeAtIndex(0)
        try {
          let messages = JSON.parse(data as string) as (TFlespiMessage | TFlespiMessage[])
          if (!Array.isArray(messages)) {
            messages = [messages]
          }
          resolve(messages)
        } catch (e) {
          reject(e)
        }
        stopWatching()
      }
    })
  })
  const importJson = (e: Event) => {
    const filePicker = fileCtrl.value as unknown as QFile
    filePicker.pickFiles(e)
    return resolveData()
      .then((msgs) => {
        vm.emit('update:messages', msgs)
      })
  }

  return { fileCtrl, file, importJson }
}

const useFilterMessagesByResultFeature = (messages: Ref<TFlespiMessage[]>, validations: Ref<TFlespiExprValidationModel[]>) => {
  const needFilterByResult = ref(false)
  const filteredMessages = computed<TFlespiMessage[]>(() => {
    let msgs = messages.value || []
    if (needFilterByResult.value && validations.value.length) {
      msgs = msgs.filter((_, index) => {
        const validateModel = validations.value[index]
        return validateModel.result !== undefined
      })
    }
    return msgs
  })
  const filteredValidateModels = computed<TFlespiExprValidationModel[]>(() => {
    let valids = validations.value
    if (needFilterByResult.value) {
      valids = valids.filter(model => model.result !== undefined)
    }
    return valids
  })
  return { needFilterByResult, filteredMessages, filteredValidateModels }
}

export default defineComponent({
  name: 'MessagesTable',
  props: {
    messages: {
      type: Array as PropType<TFlespiMessage[]>,
      default: () => [],
      required: true
    },
    cols: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: true
    },
    validateModels: {
      type: Array as PropType<TFlespiExprValidationModel[]>,
      default: () => [],
      required: true
    },
    theme: {
      type: String as PropType<'dark'|'white'>,
      default: 'white'
    }
  },
  setup (props, { emit }) {
    const { messages, validateModels, cols, theme } = toRefs(props)

    const columns = computed<QTableProps['columns']>(() => getCols(cols, validateModels))
    const isDark = computed<boolean>(() => theme.value === 'dark')
    const $q = useQuasar()

    const showEditDialog = () => {
      $q.dialog({
        component: JsonEditDialog,
        componentProps: {
          data: messages.value,
          theme: props.theme
        }
      }).onOk(data => emit('update:messages', data))
    }

    function useHoverMessageFeature (validationModels: Ref<TFlespiExprValidationModel[]>) {
      let currentError: { column: number, reason: string } | undefined
      return {
        setHoveredMessage (index: number) {
          const model = validationModels.value[index]
          if (model?.error) {
            currentError = model.error
            emit('show:error', model.error)
          }
        },
        removeHoveredMessage () {
          if (currentError) {
            emit('show:error')
          }
        }
      }
    }

    const { needFilterByResult, filteredMessages, filteredValidateModels } = useFilterMessagesByResultFeature(messages, validateModels)

    return {
      columns,
      isDark,
      ...useImportJsonFeature(),
      ...useUpdateCellFeature(messages),
      showEditDialog,
      needFilterByResult,
      filteredMessages,
      filteredValidateModels,
      ...useHoverMessageFeature(filteredValidateModels),
      ...useHighlightRowsFeature(filteredValidateModels, theme)
    }
  },
  emits: ['update:cell', 'update:messages', 'show:error']
})
</script>

<style lang="sass">
.messages-table
  .result-col
    border-right: 2px $grey-6 solid!important
  &.messages-table--dark-theme
    background-color: $grey-9
    .q-table__top,
    .q-table__bottom,
    thead tr:first-child th
      background-color: $grey-9
      &.result-col__header
        background-color: $grey-8
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: white
    &.result-col__header
      background-color: $grey-4

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  &.messages-table--col-info
    th:first-child,
    td:first-child
      position: sticky
      left: 0
      z-index: 1
    th:first-child
      z-index: 2
</style>
