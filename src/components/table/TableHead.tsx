import { tableHeader } from '@/constants/constants';
import { SortType } from '@/utils/sortFunction';
import { Table } from '@mantine/core';
import { ArrowUpAZ, ArrowDownZA } from 'lucide-react';
import './TableHead.css';

type TableHeadProps = {
  onSort: () => void;
  sortOrder: SortType;
};

function TableHead({ onSort, sortOrder }: TableHeadProps) {
  return (
    <Table.Tr>
      {tableHeader.map((el) =>
        el.title === 'Name' ? (
          <Table.Th
            key={el.title}
            onClick={onSort}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            {el.title}
            {sortOrder === 'asc' ? <ArrowUpAZ className='sort-icon'/> : <ArrowDownZA className='sort-icon'/>}
          </Table.Th>
        ) : (
          <Table.Th key={el.title}>{el.title}</Table.Th>
        )
      )}
    </Table.Tr>
  );
}

export default TableHead;
