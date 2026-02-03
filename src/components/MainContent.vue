<script setup lang="ts">
import IconAddCircleOutline from '@/components/icons/IconAddCircleOutline.vue'
import IconInformationCircleOutline from '@/components/icons/IconInformationCircleOutline.vue'
import Layout from '@/components/layout/Layout.vue'
import AccountForm from '@/components/AccountForm.vue'

const addAccount = () => {
  // Пока пусто, реализуем в компоненте формы
  console.log('Add account')
}
</script>

<template>
  <Layout>
    <!-- <div class="container">
      <n-card class="card">
        <n-page-header title="Управление учетными записями">
          <template #extra>
            <n-button
              type="primary"
              size="large"
              @click="addAccount"
            >
              <template #icon>
                <n-icon>
                  <IconAddCircleOutline />
                </n-icon>
              </template>
              Добавить учетную запись
            </n-button>
          </template>
          <n-space>
            <n-alert type="info" :bordered="false">
              <template #icon>
                <n-icon>
                  <IconInformationCircleOutline />
                </n-icon>
              </template>
              <strong>Подсказка:</strong> Метки разделяйте точкой с запятой (;)
            </n-alert>
          </n-space>
        </n-page-header>

        <div class="content">
          <AccountForm />
        </div>
      </n-card>
    </div> -->
  </Layout>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.content {
  margin-top: 24px;
}
</style>