<script setup lang="ts">
import { lightTheme } from "naive-ui";
import Layout from '@/components/layout/Layout.vue'
</script>

<template>
  <n-config-provider :theme="lightTheme">
    <n-global-style />
    <Layout>
      <RouterView />
    </Layout>
  </n-config-provider>
</template>
