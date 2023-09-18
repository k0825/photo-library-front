import { Title } from '@/components/molecules/Title/Title';
import { Icon } from '@/components/molecules/Icon/Icon';

import styles from './Header.module.scss';

export const Header = (): JSX.Element => (
  <header className={styles.header}>
    <Title />
    <Icon />
  </header>
);
