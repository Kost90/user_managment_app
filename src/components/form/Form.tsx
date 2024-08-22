import { Form, useActionData, useNavigate } from 'react-router-dom';
import { Paper, Title, Stack, TextInput, Group, Select, Radio, Button } from '@mantine/core';
import { User } from '@/constants/types';
import { useAppSelector } from '@/hooks/hooks';
import { selectUsers } from '@/store/feature/users/usersSlice';

type ActionData = {
  errors: {
    fieldErrors: {
      name: string;
    };
    formErrors: any[];
  };
};

function FormComponent({ user }: { user: User }) {
  const {loading} = useAppSelector(selectUsers);
  const navigate = useNavigate();
  const actionData = useActionData() as ActionData;

  const errors = actionData?.errors || {};

  const handelCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <Paper shadow="xs" p="xl">
        <Title>Edit user:</Title>
        <Form method="patch">
          <Stack gap={10}>
            <Group grow wrap={'wrap'}>
              <TextInput
                label="Name"
                defaultValue={user.name}
                name="name"
                error={errors?.fieldErrors?.name}
                required
                disabled={loading}
              />

              <Select
                label="Hair Colour"
                placeholder={user.hair}
                data={['black', 'brown', 'blonde', 'red', 'grey']}
                defaultValue={user.hair}
                name="hair"
                required
                disabled={loading}
              />
              <Select
                label="Eye Colour"
                placeholder={user.eyes}
                data={['brown', 'blue', 'green', 'grey']}
                defaultValue={user.eyes}
                name="eyes"
                required
                disabled={loading}
              />
              <Select
                label="Gender"
                placeholder={user.gender}
                data={['male', 'female']}
                defaultValue={user.gender}
                name="gender"
                required
                disabled={loading}
              />
            </Group>

            <Radio.Group
              label="Glasses?"
              defaultValue={user.glasses ? 'glasses' : 'no-glasses'}
              style={{ cursor: 'pointer' }}
              name="glasses"
              required
            >
              <Group>
                <Radio label="Glasses" value="glasses" disabled={loading}/>
                <Radio label="No Glasses" value="no-glasses" disabled={loading}/>
              </Group>
            </Radio.Group>
            <Button type="submit" w={150} disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
            </Button>
            <Button onClick={handelCancel} w={150} disabled={loading}>
              Cancel
            </Button>
          </Stack>
        </Form>
      </Paper>
    </>
  );
}

export default FormComponent;
