import { FC } from 'react';
import s from './Container.module.css';
import cn from 'classnames';

type Props = {
    children: React.ReactNode;
    className?: string;
};
const Container: FC<Props> = ({ children, className }) => {
    const styles = cn(s.container, className);
    return <div className={styles}>{children}</div>;
};

export default Container;
