import { FC, ReactNode } from 'react';
import s from './Box.module.css';
import cn from 'classnames';

type Props = {
    children: ReactNode;
    className?: string;
};
const BoxC: FC<Props> = ({ children, className }) => {
    const cl = cn(s.box, className);
    return <div className={cl}>{children} </div>;
};

export default BoxC;
