<script setup lang="ts">
import { AccountType, ACCOUNT_TYPE_LABELS } from "@/types/account";
import { TrashOutline } from "@vicons/ionicons5";
import { useAccountsStore } from "@/stores/accounts";
import { useMessage } from "naive-ui";
import { AddCircleOutline } from "@vicons/ionicons5";
import { useWindowSize } from "@/composables/useWindowSize";

const { isMobile } = useWindowSize();

const accountsStore = useAccountsStore();

const message = useMessage();

const typeOptions = ACCOUNT_TYPE_LABELS;

const removeItem = (id: string) => {
  const label = accountsStore.removeItem(id);
  message.info(`Удален элемент с меткой "${label}"`);
};
</script>

<template>
  <div class="form">
    <n-grid
      v-if="accountsStore.data?.length"
      class="form-grid"
      :x-gap="isMobile ? 10 : 20"
      :y-gap="10"
      :cols="isMobile ? 3 : 5"
      :style="{
        'grid-template-columns': isMobile
          ? '1fr 1fr 20px'
          : '1fr 20% 1fr 1fr 60px',
      }"
      item-responsive
      layout-shift-disabled
    >
      <n-gi>
        <div class="form-grid__title">Метки</div>
      </n-gi>
      <template v-if="isMobile">
        <n-gi :span="2">
          <div class="form-grid__title">Тип записи / Логин / Пароль</div>
        </n-gi>
      </template>
      <template v-else>
        <n-gi>
          <div class="form-grid__title">Тип записи</div>
        </n-gi>
        <n-gi>
          <div class="form-grid__title">Логин</div>
        </n-gi>
        <n-gi :span="2">
          <div class="form-grid__title">Пароль</div>
        </n-gi>
      </template>
      <template v-for="item in accountsStore.data" :key="item.id">
        <n-gi>
          <div class="form-grid__ceil">
            <n-input
              v-model:value="item.label"
              type="textarea"
              :autosize="{
                minRows: 1,
                maxRows: 3,
              }"
              :maxlength="200"
              placeholder="Введите метки"
            />
          </div>
        </n-gi>
        <template v-if="isMobile">
          <n-gi>
            <div class="form-grid__ceil">
              <n-select v-model:value="item.type" :options="typeOptions" />
              <n-input
                v-model:value="item.login"
                type="text"
                placeholder="Логин"
              />
              <n-input
                v-if="item.type === AccountType.locale"
                v-model:value="item.password"
                type="password"
                placeholder="Пароль"
                show-password-on="mousedown"
                :minlength="8"
                :max-length="48"
              />
            </div>
          </n-gi>
        </template>
        <template v-else>
          <n-gi>
            <div class="form-grid__ceil">
              <n-select v-model:value="item.type" :options="typeOptions" />
            </div>
          </n-gi>
          <n-gi :span="item.type === AccountType.LDAP ? 2 : 1">
            <div class="form-grid__ceil">
              <n-input
                v-model:value="item.login"
                type="text"
                placeholder="Логин"
              />
            </div>
          </n-gi>
          <n-gi v-if="item.type === AccountType.locale">
            <div class="form-grid__ceil">
              <n-input
                v-model:value="item.password"
                type="password"
                placeholder="Пароль"
                show-password-on="mousedown"
                :minlength="8"
                :max-length="48"
              />
            </div>
          </n-gi>
        </template>
        <n-gi>
          <div class="form-grid__ceil form-grid__ceil--actions">
            <n-popconfirm
              type="warning"
              @positive-click="() => removeItem(item.id)"
            >
              <template #trigger>
                <n-button quaternary circle type="error">
                  <template #icon>
                    <TrashOutline class="form-grid__action-icon" />
                  </template>
                </n-button>
              </template>
              Удалить запись? (Метка: "{{ item.label }}"")
            </n-popconfirm>
          </div>
        </n-gi>
      </template>
    </n-grid>
    <div v-else class="">
      <n-empty description="Добавьте первую запись">
        <template #extra>
          <n-button type="primary" size="large" @click="$emit('add')">
            <template #icon>
              <n-icon>
                <AddCircleOutline />
              </n-icon>
            </template>
            Добавить
          </n-button>
        </template>
      </n-empty>
    </div>
  </div>
</template>

<style scoped>
.form-grid__title {
  font-size: 0.75rem;
  color: #666;
}
.form-grid__ceil--actions {
  font-size: 10px;
}

.form-grid__action-icon {
  width: 20px;
}

@media (width < 768px) {
  .form-grid__ceil {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
