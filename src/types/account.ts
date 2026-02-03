export enum AccountType {
  LDAP = "LDAP",
  locale = "locale",
}

export const ACCOUNT_TYPE_LABELS =
  Object.keys(AccountType).map((key) => ({
    value: key,
    label: key === "LDAP" ? AccountType.LDAP : "Локальная",
  }));

export interface Account {
  id?: string;
  label: string;
  type: AccountType;
  login: string;
  password: string;
}
