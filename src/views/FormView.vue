<script setup lang="ts">
import { AddCircleOutline, InformationCircleOutline } from "@vicons/ionicons5";
import AccountForm from "@/components/AccountForm.vue";
import { useAccountsStore } from "@/stores/accounts";

const accountsStore = useAccountsStore();

const addAccount = () => {
  accountsStore.addItem()
};
</script>

<template>
  <div class="container px-1">
    <n-card class="card" title="Управление учетными записями">
      <template #header-extra>
        <n-button type="primary" size="large" @click="addAccount">
          <template #icon>
            <n-icon>
              <AddCircleOutline />
            </n-icon>
          </template>
          Добавить
        </n-button>
      </template>
      <div class="card-alert">
        <n-alert type="info" :bordered="false">
          <template #icon>
            <n-icon>
              <InformationCircleOutline />
            </n-icon>
          </template>
          <strong>Подсказка:</strong> Для указания нескольких меток для одной
          пары логин/пароль используйте разделитель
          <n-tooltip trigger="hover">
            <template #trigger>
              <span class="card-alert__note">;</span>
            </template>
            Точка с запятой (;)
          </n-tooltip>
        </n-alert>
      </div>

      <div class="content">
        <AccountForm />
      </div>
    </n-card>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.card-alert__note {
  display: inline-block;
  padding: 0 8px;
  border: 1px solid #eee;
  background-color: #fff;
}

.content {
  margin-top: 24px;
  padding-bottom: 36px;
}
</style>
