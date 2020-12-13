import { DateTime } from 'luxon';

export class Account {
  id: number = 0;
  name: string = '';
  email: string = '';
  gogeoDatabase: string = '';
  integratorVersion: string = '';
  supervisorVersion: string = '';
  createdAt: string = '';
  updatedAt: string = '';
  // createdAt: DateTime = DateTime.local();
  // updatedAt: DateTime = DateTime.local();

  // Colunas criadas de forma dinâmica pelo serviço
  extended_name: string = '';
  versions: string = '';
  ats: string = '';
  conns: string = '';
}
