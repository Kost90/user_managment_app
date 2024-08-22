import { Table, Image, Center, Loader} from '@mantine/core';
import { User } from '@/constants/types';
import { LinkButton } from '../button/Button';
import { useAppSelector } from '@/hooks/hooks';
import { selectFilteredUsers, selectUsers } from '@/store/feature/users/usersSlice';
import TableHead from './TableHead';
import { sortElements, SortType } from '@/utils/sortFunction';
import { useCallback, useState } from 'react';
import { useNavigation } from 'react-router-dom';

const itemPerPage = 5;

function TableComponent({activePage}:{activePage:number}) {
  const {loading} = useAppSelector(selectUsers);
  const filteredUsers = useAppSelector(selectFilteredUsers);
  const [sortOrder, setSortOrder] = useState<SortType>('asc');

  const handelSort = useCallback(() =>{
    setSortOrder((prev) => (prev === 'asc'? 'desc' : 'asc'));
  },[]);

  // Sort filteredUser
  const sortedUsers = sortElements(filteredUsers,sortOrder);

  // Pagination logic
  const startIndex:number = (activePage - 1) * itemPerPage;
  const endIndex:number = startIndex + itemPerPage;
  const paginatedUsers:User[] = sortedUsers.slice(startIndex,endIndex);

  if(loading){
    return(
      <Center>
        <Loader size={'lg'}/>
      </Center>
    )
  }
  return (
    <Center>
      <Table stickyHeader stickyHeaderOffset={60}>
        <Table.Thead>
          <TableHead onSort={handelSort} sortOrder={sortOrder}/>
        </Table.Thead>
        <Table.Tbody>
          {paginatedUsers.map((el) => (
            <TableRows
              key={el.id}
              id={el.id}
              name={el.name}
              gender={el.gender}
              hair={el.hair}
              eyes={el.eyes}
              glasses={el.glasses}
              avatar={el.avatar}
            />
          ))}
        </Table.Tbody>
      </Table>
    </Center>
  );
}

type TableRowsProps = Omit<User,'roles'>

export function TableRows({ ...props }: TableRowsProps) {
  const navigation = useNavigation();
  return (
    <>
      <Table.Tr>
        <Table.Td>{props.name}</Table.Td>
        <Table.Td>{props.gender}</Table.Td>
        <Table.Td>{props.hair}</Table.Td>
        <Table.Td>{props.eyes}</Table.Td>
        <Table.Td>{!props.glasses?'false':'true'}</Table.Td>
        <Table.Td>
        <Image w={50} src={`uploads/${props.avatar}`} alt={props.name} radius={'md'} />
        </Table.Td>
        <Table.Td>
            <LinkButton href={`userdetails/${props.id}`} disabled={navigation.state === "loading"?true:false}>{navigation.state === "loading"?"loading...":"View user"}</LinkButton>
        </Table.Td>
      </Table.Tr>
    </>
  );
}

export default TableComponent;
