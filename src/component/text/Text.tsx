import type { ComponentProps, ElementType } from 'react';

type TextOwnProps<E extends ElementType = ElementType> = {
    children: string;
    as?: E;
};

type TextProps<E extends ElementType> = TextOwnProps<E> &
    Omit<ComponentProps<E>, keyof TextOwnProps>;

const defaultElement = 'div';

export default function Text<E extends ElementType = typeof defaultElement>({
    children,
    as,
    ...otherProps
}: TextProps<E>) {
    const TagName = as || defaultElement;

    return <TagName {...otherProps}>{children}</TagName>;
}
