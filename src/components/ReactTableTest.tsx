import React from 'react';
import { useTable, useSortBy } from 'react-table';

import {
  Table,
  Thead,
  Tbody,
  Tr, Th, Td
} from '@chakra-ui/react';

const RTT: React.FC = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    // apply the table props
   <Table {...getTableProps()}>
     <Thead>
      {// Loop over the header rows
      headerGroups.map(headerGroup => (
        // Apply the header row props
        <Tr {...headerGroup.getHeaderGroupProps()}>
          {// Loop over the headers in each row
          headerGroup.headers.map(column => (
            // Apply the header cell props
            <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {// Render the header
              column.render('Header')}
              <span>{column.isSorted ? (column.isSortedDesc ? 'baixo' : 'cima') : ''}</span>
            </Th>
          ))}
        </Tr>
      ))}
     </Thead>
   {/* Apply the table body props */}
   <Tbody {...getTableBodyProps()}>
     {// Loop over the table rows
     rows.map(row => {
       // Prepare the row for display
       prepareRow(row)
       return (
         // Apply the row props
         <Tr {...row.getRowProps()}>
           {// Loop over the rows cells
           row.cells.map(cell => {
             // Apply the cell props
             return (
               <Td {...cell.getCellProps()}>
                 {// Render the cell contents
                 cell.render('Cell')}
               </Td>
             )
           })}
         </Tr>
       )
     })}
   </Tbody>
 </Table>
  );
}

export default RTT;
