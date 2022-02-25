<template>
  <div :class="{'bg-grey-9': isDark}">
    <q-input
      v-model="filter"
      type="text"
      label="Filter"
      class="col-10 functions-filter--sticky q-mx-xs q-mb-xs"
      :class="{'bg-white': !isDark, 'bg-grey-9': isDark}"
      :dark="isDark"
      standout="bg-grey-4 text-grey-9"
    />
    <functions-table :functions="functions" :filter="filter" :theme="theme"/>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, PropType } from 'vue'
import { TFlespiExprFunction } from 'src/api/flespi'
import { useStore } from 'src/store'
import FunctionsTable from '../components/expressions/FunctionsTable.vue'

export default defineComponent({
  name: 'ExtensionsFunctionsPage',
  components: { FunctionsTable },
  props: {
    theme: {
      type: String as PropType<'dark'|'white'>,
      default: 'white'
    }
  },
  setup (props) {
    const filter = ref('')
    const $store = useStore()
    const functions = computed<TFlespiExprFunction[]>(() => $store.state.expressions.functions)
    void $store.dispatch('expressions/getExpressionFunctions')
    const isDark = computed<boolean>(() => props.theme === 'dark')
    return { functions, filter, isDark }
  }
})
</script>

<style lang="sass">
  .functions-filter--sticky
    position: sticky
    z-index: 1
    top: 5px
</style>
