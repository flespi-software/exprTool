<template>
  <q-table
    :rows="funcs"
    :columns="cols" grid
    row-key="name"
    hide-pagination
    :rows-per-page-options="[0]"
    :dark="isDark" :class="{'bg-grey-9': isDark}"
  >
    <template v-slot:item="props">
      <q-card class="q-mb-xs q-mx-xs" style="width: 100%" :dark="isDark">
        <q-card-section class="text-left q-pa-xs">
          <div class="text-h7 text-italic text-bold">{{ props.row.usage }}</div>
        </q-card-section>
        <q-separator :color="isDark ? 'grey-7' : ''"/>
        <q-card-section class="q-pa-xs text-grey-6">
          <div>{{ props.row.description }}</div>
        </q-card-section>
      </q-card>
    </template>
  </q-table>
</template>

<script lang="ts">
import { TFlespiExprFunction } from 'src/api/flespi'
import { defineComponent, toRef, computed, PropType } from 'vue'
import { QTableProps } from 'quasar'

export default defineComponent({
  name: 'FunctionsTable',
  props: {
    functions: {
      type: Array as PropType<TFlespiExprFunction[]>
    },
    filter: {
      type: String,
      default: ''
    },
    theme: {
      type: String as PropType<'dark'|'white'>,
      default: 'white'
    }
  },
  setup (props) {
    const filterRef = toRef(props, 'filter')
    const isDark = computed<boolean>(() => props.theme === 'dark')
    const funcs = computed<TFlespiExprFunction[]>(() => {
      const filter = filterRef.value.toLowerCase()
      let functions = props.functions || []
      if (filter && functions.length) {
        functions = functions.filter((func) => { return func.usage.indexOf(filter) !== -1 })
      }
      return functions
    })
    const cols: QTableProps['columns'] = [
      {
        name: 'usage',
        label: 'Function',
        align: 'center',
        field: 'usage'
      },
      {
        name: 'description',
        label: 'Description',
        align: 'left',
        field: 'description'
      }
    ]
    return { cols, funcs, isDark }
  }
})
</script>
