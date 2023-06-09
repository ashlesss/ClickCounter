<template>
    <q-page class="flex flex-center">
      <div>
        <q-input
        input-class="text-center "
        v-model.number="model"
        type="number"
        filled
        style="max-width: 200px">
        </q-input>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'ClickCounter',

    setup() {
      return {
        model: ref(10),
      }
    }
  })
  </script>