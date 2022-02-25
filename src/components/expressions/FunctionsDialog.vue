<template>
 <q-dialog ref="dialogRef" @hide="onDialogHide" seamless>
    <q-card class="q-dialog-plugin" style="min-width: 50vw;" :class="{'bg-grey-9': isDark}">
      <q-card-section style="height: 50vh;" class="scroll q-pa-none">
        <functions-table :functions="functions" :filter="filter" :theme="theme"/>
      </q-card-section>
      <q-card-actions>
        <q-input v-model="filter" type="text" label="Filter" class="col-10" :dark="isDark" standout="bg-grey-4 text-grey-9"/>
        <div class="col-2 text-center">
          <q-btn flat label="Close" @click="onCancelClick" :color="isDark ? 'white' : ''"/>
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed } from 'vue'
import FunctionsTable from './FunctionsTable.vue'
import { useDialogPluginComponent } from 'quasar'
import { TFlespiExprFunction } from 'src/api/flespi'

export default defineComponent({
  props: {
    functions: {
      type: Array as PropType<TFlespiExprFunction[]>
    },
    theme: {
      type: String as PropType<'dark'|'white'>,
      default: 'white'
    }
  },
  components: { FunctionsTable },
  emits: [
    ...useDialogPluginComponent.emits
  ],

  setup (props) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    const filter = ref('')

    const isDark = computed<boolean>(() => props.theme === 'dark')

    return {
      filter,
      isDark,
      dialogRef,
      onDialogHide,
      onOKClick () {
        onDialogOK()
      },
      onCancelClick: onDialogCancel
    }
  }
})
</script>
