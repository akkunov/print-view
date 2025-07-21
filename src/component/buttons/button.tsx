import type {ComponentProps, ElementType} from "react";
import cn from "classnames";

type ButtonOwnProps<E extends ElementType = ElementType> = {
    children?: React.ReactNode;
    primary?: boolean;
    secondary?: boolean;
    as?: E;
}
type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const deafultElement = "button";

function Button<E extends ElementType = typeof deafultElement>({
                                                                   children,
                                                                   primary,
                                                                   secondary,
                                                                   as,
                                                                   ...otherProps
}: ButtonProps<E>) {
    const classes = cn({primary, secondary});
    const TagName  = as || deafultElement;

    return (
        <TagName className={classes} {...otherProps}>{children}</TagName>
    )
}

export default Button;
