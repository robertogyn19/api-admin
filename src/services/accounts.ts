import { DateTime } from 'luxon';
import { Account } from '../models';

import { useFetch } from '../hooks/useFetch';

const luxonDateFormat = 'dd/MM/yy';

export const GetAccounts = () => {
  const { data, mutate } = useFetch<Account[]>('accounts');

  let accounts = data;

  if (!data) {
    accounts = [];
  }

  accounts = extendAccountsData(accounts);
  return { accounts, mutate };
}

export const AccountsSize = (): number => {
  const { accounts } = GetAccounts();

  return accounts.length;
}

export const AccountById = (id: string | string[]): Account => {
  // if (!id) {
  //   return new Account();
  // }

  const { data } = useFetch<Account>(`accounts/${id}`);

  let account = data;

  if (!data) {
    account = new Account();
  }

  account = extendAccountData(account);
  return account;
}

/* ------------------------------------------------------------------------- */
/*                                  Helpers                                  */
/* ------------------------------------------------------------------------- */

const strToLuxonFormat = (date: string): string => {
  return DateTime.fromISO(date).toFormat(luxonDateFormat);
}

const extendAccountsData = (accounts: Account[]): Account[] => {
  accounts.map(acc => extendAccountData(acc));

  return accounts;
}

const extendAccountData = (acc: Account): Account => {
  if (!acc.name || acc.name === '') {
    acc.name = 'Sem nome';
  }

  acc.extended_name = `${acc.name} (${acc.gogeoDatabase})`;
  acc.versions = `${acc.integratorVersion} / ${acc.supervisorVersion}`;
  if (acc.createdAt && acc.updatedAt) {
    acc.ats = `${strToLuxonFormat(acc.createdAt)} / ${strToLuxonFormat(acc.updatedAt)}`;
  }
  // TODO: alterar serviço para retornar dados de última comunicação/integração

  return acc;
}
