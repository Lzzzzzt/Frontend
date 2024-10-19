<template>
  <div
    class="w-20 bg-gray-100 m-3 rounded-2xl flex flex-col p-5 divide-y divide-solid"
  >
    <div class="flex justify-center flex-none mb-6">
      <i class="pi pi-prime" style="font-size: 2rem; color: #000" />
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
          v-for="a in bottomAreaActions"
          :key="a.to"
          :icon="a.icon"
          :to="a.to"
        />
      </div>
    </div>

    <div
      class="flex justify-center flex-none"
      @click="() => router.push({ name: `Profile` })"
    >
      <i class="pi pi-bullseye mt-6" style="font-size: 2rem; color: #000" />
    </div>
  </div>
</template>

<script setup>
import SideBarButton from '@/components/SideBarButton.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const topAreaActions = ref([
  { icon: 'home', to: 'Overview' },
  { icon: 'pencil', to: 'Answer' },
  { icon: 'bookmark', to: 'Manage' },
])

const bottomAreaActions = ref([
  { icon: 'question-circle', to: '' },
  { icon: 'cog', to: 'Settings' },
])
</script>

<style scoped></style>
