<template>
  <Button
    ref="button"
    :class="{
      ['border-surface-300 dark:border-surface-600 bg-surface-50 dark:bg-surface-700']:
        isHovered || isRouterMatched,
    }"
    class="border border-transparent rounded-md w-9 h-9 flex justify-center items-center transition-all"
    unstyled
    @click="goToTargetPage"
  >
    <i
      :class="{
        [iconDefaultClass]: !isHovered && !isRouterMatched,
        [iconHoverClass]: isHovered || isRouterMatched,
        [`pi pi-${icon}`]: true,
      }"
      :style="{ fontSize: `${size}rem` }"
    />
  </Button>
</template>

<script setup>
import { useElementHover } from '@vueuse/core'
import { ref, defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'

const {
  icon,
  to = '',
  size = 1,
  iconDefaultClass = 'text-surface-900 dark:text-surface-500',
  iconHoverClass = 'text-surface-500 dark:text-surface-400',
} = defineProps({
  icon: String,
  to: String,
  size: Number,
  iconDefaultClass: String,
  iconHoverClass: String,
})

const button = ref()
const isHovered = useElementHover(button)

const router = useRouter()

const goToTargetPage = () => {
  if (to !== '') {
    router.push({ name: to })
  }
}

const isRouterMatched = computed(() => router.currentRoute.value.name === to)
</script>
