<template>
   <q-page padding class="dash" :class="{'dash--dark': theme === 'dark'}">
     <q-list class="row absolute-top-left absolute-bottom-right">
       <q-item v-for="(model, moduleName) in links" :key="moduleName" :to='model.to' class="dash__element col-1 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12 bg-grey-8" :class="{'dash__element--mobile': $q.platform.is.mobile}" active-class="bg-grey-9">
        <q-item-section class="text-center text-white full-width q-ma-lg">
          <div>
            <q-icon :name="model.icon" :color="color" size="7em"/>
          </div>
          <div class="text-h5 ellipsis full-width">{{model.title}}</div>
          <div class="text-h8 full-width">{{model.subtitle}}</div>
        </q-item-section>
      </q-item>
     </q-list>
   </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  props: {
    theme: String as PropType<string>
  },
  setup (props) {
    const links = {
      expressions: {
        title: 'Expression',
        subtitle: 'Test expressions with custom data',
        icon: 'mdi-regex',
        to: 'expr'
      },
      functions: {
        title: 'Expression functions',
        subtitle: 'Expression functions examples and descriptions',
        icon: 'mdi-function',
        to: 'expr-functions'
      }
    }
    const color = ref<string>(props.theme === 'white' ? 'black' : 'white')
    return { links, color }
  }
})
</script>

<style lang="scss">
  .dash{
    width: 100%;
    height: 100%;
    overflow: auto;
    background-image: url(../../public/mountain.svg);
    background-position: center 100px;
    background-size: contain;
    background-repeat: no-repeat;
    &--dark {
      background-color: $grey-9;
    }
    &__element {
      max-height: 33%;
      min-height: 200px;
      &--mobile {
        opacity: .9;
      }
      &:hover {
        opacity: .9;
      }
      opacity: .6;
    }
  }
</style>
