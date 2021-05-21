<template>
  <div class="bg-red-400 h-screen">
    <div class="container mx-auto pt-6">
      {{ query }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
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
</style>
