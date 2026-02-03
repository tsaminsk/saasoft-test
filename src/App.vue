<script setup lang="ts">
import { darkTheme } from "naive-ui";
import MainContent from "@/components/MainContent.vue";
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-global-style />
    <MainContent />
  </n-config-provider>
</template>
