import { Menu } from '@/components/menu/Menu';
import { AppShell, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <Container size={'xl'}>
        <AppShell header={{ height: 70 }} padding="md">
          <AppShell.Header style={{ minWidth: 600 }}>
            <Menu />
          </AppShell.Header>
          <AppShell.Main>
            <Outlet/>
          </AppShell.Main>
        </AppShell>
      </Container>
  )
}

export default RootLayout