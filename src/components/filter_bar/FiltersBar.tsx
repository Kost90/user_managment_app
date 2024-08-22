import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { selectFilters } from '@/store/feature/filters/filtersSlice';
import { Button, Collapse, Group, Paper, Radio, Select, Stack, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  setName,
  setHair,
  setEyes,
  setGender,
  setGlasses,
  resetFilters,
} from '@/store/feature/filters/filtersSlice';

function FiltersBar() {
  const [opened, { toggle }] = useDisclosure(false);
  const filters = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>(filters.name);

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setName(inputValue));
    }, 1500);
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, dispatch]);

  const handelNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handelHairChange = (value: string | null) => {
    dispatch(setHair(value));
  };

  const handelEyesChange = (value: string | null) => {
    dispatch(setEyes(value));
  };

  const handelGenderChange = (value: string | null) => {
    dispatch(setGender(value));
  };

  const handelGlassesChange = (value: string) => {
    if (value === 'all' || value === 'glasses' || value === 'no-glasses') {
      dispatch(setGlasses(value));
    }
  };

  const handelResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <>
      <Button my={'md'} onClick={toggle}>
        {opened ? 'Hide filters' : 'Show Filters'}
      </Button>

      <Collapse in={opened}>
        <Paper shadow="sm" p={'lg'} mb="md" withBorder bg={'gray.1'} miw={600}>
          <Stack gap={10}>
            <Group grow wrap={'wrap'}>
              <TextInput
                label="Name"
                placeholder="Enter user's name to filter list"
                value={inputValue}
                onChange={handelNameChange}
              />
              <Select
                label="Hair Colour"
                placeholder="Pick value to filter list"
                data={['Black', 'Brown', 'Blonde', 'Red', 'Grey']}
                value={filters.hair}
                onChange={handelHairChange}
              />
              <Select
                label="Eye Colour"
                placeholder="Pick value"
                data={['Brown', 'Blue', 'Green', 'Grey']}
                value={filters.eyes}
                onChange={handelEyesChange}
              />
              <Select
                label="Gender"
                placeholder="Pick value"
                data={['Male', 'Female']}
                value={filters.gender}
                onChange={handelGenderChange}
              />
            </Group>

            <Radio.Group
              label="Glasses?"
              value={filters.glasses}
              onChange={handelGlassesChange}
              style={{ cursor: 'pointer' }}
            >
              <Group>
                <Radio label="All" value="all" />
                <Radio label="Glasses" value="glasses" />
                <Radio label="No Glasses" value="no-glasses" />
              </Group>
            </Radio.Group>
            <Button onClick={handelResetFilters} w={150}>
              Reset
            </Button>
          </Stack>
        </Paper>
      </Collapse>
    </>
  );
}

export default FiltersBar;
