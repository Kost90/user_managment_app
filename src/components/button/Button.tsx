import { Link } from 'react-router-dom';
import { Button} from '@mantine/core';
import { FC, ReactNode } from 'react';

export const LinkButton: FC<{ href: string; disabled:boolean, children: ReactNode }> = ({ href, disabled = false, children }) => (
  <Button color={'grape'} component={Link} variant="subtle" to={href} disabled={disabled}>
    {children}
  </Button>
);

