<script setup lang="ts" generic="T extends any, O extends any">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'IndexPage'
})

const name = ref('')

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <p>
      <a rel="noreferrer" href="https://github.com/LU-JIEJIE/vitesse-lite-personal" target="_blank">
        Vitesse Lite Personal
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <div py-4 />
    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
