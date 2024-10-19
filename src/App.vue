<template>
  <div class="container h-screen flex">
    <side-bar />
    <router-view class="w-full bg-gray-400" />
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue'
</script>
