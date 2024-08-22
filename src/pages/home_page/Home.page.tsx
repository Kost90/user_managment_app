import LoaderComponent from '@/components/loader/Loader';
import { Center, Image, Title } from '@mantine/core';
import { useNavigation } from 'react-router-dom';

function HomePage() {
  const navigation = useNavigation();
  if(navigation.state === "loading"){
    return(<LoaderComponent/>)
  }
  return (
    <Center style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
      <Title order={1}>User Management App</Title>
      <p>View the README to learn more</p>
      <Image w={200} src="uploads/caitlin.png" alt="Alice" radius={'md'} />
    </Center>
  );
}

export default HomePage