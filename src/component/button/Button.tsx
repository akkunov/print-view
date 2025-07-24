import cn from 'classnames';
import type { ComponentProps, ElementType } from 'react';
import s from './Button.module.css';

type ButtonOwnProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    primary?: boolean;
    secondary?: boolean;
    className?: string;
    as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
    Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

export default function Button<E extends ElementType = typeof defaultElement>({
    children,
    primary,
    secondary,
    as,
    className,
    ...otherProps
}: ButtonProps<E>) {
    const classes = cn(s.c_btn, className, {
        [s.primary]: primary,
        [s.secondary]: secondary,
    });
    const TagName = as || defaultElement;

    return (
        <TagName className={classes} {...otherProps}>
            {children}
        </TagName>
    );
}
