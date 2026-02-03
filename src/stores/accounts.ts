import { ref, computed, watch, onMounted } from "vue";
import { defineStore } from "pinia";
import { Account, AccountType } from "@/types/account";
import { saveAccounts, loadAccounts } from "@/services/dbService";

export const useAccountsStore = defineStore("accounts", () => {
  const data = ref<Account[]>([]);

  function addItem() {
    data.value.push({
      id: crypto.randomUUID(),
      label: "",
      type: AccountType.locale,
      login: "",
      password: "",
    });
  }

  function removeItem(id: string) {
    const index = data.value.findIndex((item) => item.id === id);
    if (index >= 0) {
      const newData = [...data.value];
      const res = newData.splice(index, 1);
      data.value = newData;
      return res[0]?.label ?? "";
    }
  }

  // Загрузка при старте
  const loadFromDB = async () => {
    data.value = await loadAccounts();
  };

  // Сохранение при изменении
  watch(
    data,
    async (newVal) => {
      await saveAccounts(newVal);
    },
    { deep: true }
  );

  // Инициализация
  onMounted(loadFromDB);

  return {
    data,
    addItem,
    removeItem,
  };
});