import { Avatar, Heading } from '@chakra-ui/react';
import styles from './Header.module.scss';

export const Header = (): JSX.Element => (
  <header className={styles.header}>
    <Heading as="h1" size="xl">
      Next.js Photo Library
    </Heading>
    <Avatar
      name="k0825"
      src="https://avatars.githubusercontent.com/u/36547071?v=4"
    />
  </header>
);
