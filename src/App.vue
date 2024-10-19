<template>
  <div class="h-screen flex m-0 bg-surface-0 dark:bg-surface-950">
    <side-bar v-if="showSideBar" class="flex-none" />
    <div
      class="flex-1 overflow-y-scroll w-full h-full text-surface-950 dark:text-surface-0 no-scrollbar"
    >
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()

const showSideBar = computed(() => {
  return ['questions', 'overview', 'settings', 'profile'].includes(
    router.currentRoute.value.name,
  )
})
</script>
