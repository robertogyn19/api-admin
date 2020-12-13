import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Link } from '@chakra-ui/react';

import { GetAccounts } from '../services/accounts';

import { useTable, useSortBy } from 'react-table';

const AccountsList: React.FC = () => {

  const defaultColumn = React.useMemo(
    () => ({
      width: 150
    }),
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Nome',
        accessor: 'extended_name',
      },
      {
        Header: 'Versões',
        accessor: 'versions'
      },
      {
        Header: 'Criação / Atualização',
        accessor: 'ats'
      }
    ],
    []
  );

  const { accounts, mutate } = GetAccounts();

  const tableProps = {
    autoResetSelectedRows: false,
    columns,
    data: accounts
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(tableProps, useSortBy);

  return (
    <Table variant="striped" {...getTableProps()} colorScheme="green">
      <TableCaption>Integração: Lista de contas</TableCaption>
      <Thead>
        {
        headerGroups.map(headerGroup => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {
            headerGroup.headers.map(column => (
              <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {
                column.render('Header')}
                <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
              </Th>
            ))}
            <Th>Detalhes</Th>
          </Tr>
        ))}
      </Thead>

      <Tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row);

            return (
              <Tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return (
                      <Td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </Td>
                    )
                  })
                }
                <Td>
                  <Link href={`/accounts/${row.original['id']}`}>Acessar</Link>
                </Td>
              </Tr>
            )
          })
        }
      </Tbody>
    </Table>
  );
}

export default AccountsList;
