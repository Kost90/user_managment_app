import {useNavigation} from "react-router-dom";
import { User } from '@/constants/types';
import { useLoaderData } from 'react-router-dom';
import { Center} from '@mantine/core';
import FormComponent from '@/components/form/Form';
import LoaderComponent from "@/components/loader/Loader";

function EditUserPage() {
  const { user } = useLoaderData() as { user: User };
  const navigation = useNavigation();

  if(navigation.state === "loading"){
    return(<LoaderComponent/>)
  }

  return (
    <Center>
      <FormComponent user={user} />
    </Center>
  );
}

export default EditUserPage;
