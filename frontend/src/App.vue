<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  {{ result }}
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const result = ref("")

    onMounted(async () => {
      try {
        const response = axios.get('http://localhost:8001/example')
        console.log(response);
      } catch(e) {
        //result.value = e;
      }
    })

    return {
      result
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
