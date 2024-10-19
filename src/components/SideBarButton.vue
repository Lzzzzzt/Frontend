<script setup>
import { useElementHover } from '@vueuse/core'
import { ref, defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'

const {
  icon,
  to,
  size = 1,
  defaultColor = '#4c5669',
} = defineProps({
  icon: String,
  to: String,
  size: Number,
  defaultColor: String,
})

const button = ref()
const isHovered = useElementHover(button)

const router = useRouter()

const goToTargetPage = () => {
  if (to) {
    router.push({ name: to })
  }
}

const isRouterMatched = computed(() => router.currentRoute.value.name === to)
</script>

<template>
  <Button
    ref="button"
    :class="{ hover: isHovered || isRouterMatched }"
    class="border border-transparent rounded-md w-9 h-9 flex justify-center items-center active:!bg-gray-50"
    unstyled
    @click="goToTargetPage"
  >
    <i
      :class="`pi pi-${icon}`"
      :style="{
        color: isHovered || isRouterMatched ? '#000000' : `${defaultColor}`,
        fontSize: `${size}rem`,
      }"
    />
  </Button>
</template>

<style scoped>
.hover {
  transition: all 0.4s;
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
</style>
