import { LoaderData} from '@/constants/types'
import { Card, Title, Image, Text, Center, List, Loader  } from '@mantine/core';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { rolesFilter } from '@/utils/rolesFilter';
import { useMemo } from 'react';
import { LinkButton } from '@/components/button/Button';
import LoaderComponent from '@/components/loader/Loader';


function UserDetailsPage() {
  const {user, roles} = useLoaderData() as LoaderData;
  const navigation = useNavigation();

  if(navigation.state === "loading"){
    return(<LoaderComponent/>)
  }

  const userRoles = useMemo(() => rolesFilter(roles, user.roles),[user.roles]);

  return (
    <>
    <Center>
    <Card
      shadow="sm"
      padding="xl"
      style={{widows:'100%',maxWidth:'400px'}}
    >
      <Card.Section>
        <Image  src={`/uploads/${user.avatar}`} alt={user.name} radius={'md'}/>
      </Card.Section>
      <Title mt="xs" size="sm" tt="uppercase" fw={700}>
      User details:
      </Title>
      <Text size="md">Name: {user.name}</Text>
      <Text size="md">Gender: {user.gender}</Text>
      <Text size="md">Eyes: {user.eyes}</Text>
      <Text size="md">Hair: {user.hair}</Text>
      <Text size="md">Glasses: {user.glasses ?'True':'False'}</Text>
      <Text fw={600}>User roles:</Text>
      <List>
        {userRoles.map((el) => (
          <List.Item key={el.id}>{el.description}</List.Item>
        ))}
      </List>
      <LinkButton href={`/users/edit/${user.id}`}>Edit user</LinkButton>
    </Card>
    </Center>
    </>
  )
}

export default UserDetailsPage