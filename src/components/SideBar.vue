<template>
  <div
    class="w-20 m-3 rounded-2xl flex flex-col p-5 divide-y divide-solid bg-surface-100 dark:bg-surface-800 divide-surface-300 dark:divide-surface-600"
  >
    <div class="flex justify-center flex-none mb-6">
      <i
        class="pi pi-prime text-surface-950 dark:text-surface-400"
        style="font-size: 2rem"
      />
    </div>

    <div class="flex-1 flex justify-between flex-col">
      <div class="flex flex-col items-center gap-4 mt-3">
        <side-bar-button
          v-for="a in topAreaActions"
          :key="a.to"
          :icon="a.icon"
          :to="a.to"
        />
      </div>

      <div class="flex flex-col items-center gap-4 mb-3">
        <side-bar-button
          :icon="isDark ? 'sun' : 'moon'"
          @click="toggleDark()"
        />
        <side-bar-button icon="cog" to="Settings" />
      </div>
    </div>

    <div
      class="flex justify-center flex-none"
      @click="() => router.push({ name: `Profile` })"
    >
      <i
        class="pi pi-bullseye mt-6 text-surface-950 dark:text-surface-400"
        style="font-size: 2rem"
      />
    </div>
  </div>
</template>

<script setup>
import SideBarButton from '@/components/SideBarButton.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'

const router = useRouter()

const topAreaActions = ref([
  { icon: 'home', to: 'Overview' },
  { icon: 'pencil', to: 'Questions' },
])

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped></style>
