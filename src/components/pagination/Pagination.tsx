import { useAppSelector } from '@/hooks/hooks';
import { selectFilteredUsers } from '@/store/feature/users/usersSlice';
import { Center, Pagination } from '@mantine/core';

function PaginationComponent({
  activePage,
  setPage,
}: {
  activePage: number;
  setPage: (arg: number) => void;
}) {
  const paginationNumbers: number[] = [];

  const filteredUsers = useAppSelector(selectFilteredUsers);

  for (let i = 1; i <= Math.ceil(filteredUsers.length / 5); i++) {
    paginationNumbers.push(i);
  }

  return (
    <Center>
      <Pagination total={paginationNumbers.length} value={activePage} onChange={setPage} mt="sm" />
    </Center>
  );
}

export default PaginationComponent;
