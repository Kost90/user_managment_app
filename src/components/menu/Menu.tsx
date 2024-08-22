import { Group, Image } from '@mantine/core';
import FormpipeLogo from '../../assets/formpipe-logo.svg';
import Logo from '../../assets/Logo.svg';
import { LinkButton } from '../button/Button';

export const Menu = () => (
  <Group justify="space-between" px={'lg'}>
    <Image p="xs" h={70} src={Logo} alt="Logo" />
    <Group ml="xl" gap={'lg'}>
      <LinkButton href="/" disabled={false}>Home</LinkButton>
      <LinkButton href="/users" disabled={false}>List Users</LinkButton>
    </Group>
  </Group>
);


