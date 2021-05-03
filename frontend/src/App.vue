<template>
  <div>
    {{ query }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'App',
  setup () {
    const query = ref('')

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:8001/example')
        query.value = response.data
      } catch (error) {
        query.value = error
      }
    })

    return {
      query
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
