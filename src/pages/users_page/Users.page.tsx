import TableComponent from '@/components/table/Table';
import { Title } from '@mantine/core';
import FiltersBar from '@/components/filter_bar/FiltersBar';
import PaginationComponent from '@/components/pagination/Pagination';
import { useCallback, useState } from 'react';

/**
 * The UsersPage contacts the mock web server to fetch the list of users and displays them in a grid.
 */
function UsersPage() {
  const [activePage, setPage] = useState<number>(1);
  
  const handelChange = useCallback((arg:number):void => {
    setPage(arg)
  },[activePage])

  return (
    <>
      <Title order={1}>Users</Title>
      <FiltersBar />
      <TableComponent activePage={activePage}/>
      <PaginationComponent activePage={activePage} setPage={handelChange}/>
    </>
  );
}

export default UsersPage