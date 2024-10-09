import './style.css';

type Props<T extends 'button' | 'a'> = {
    as: T;
    children: React.ReactNode;
} & (T extends 'button'
    ? React.ButtonHTMLAttributes<HTMLButtonElement>
    : React.AnchorHTMLAttributes<HTMLAnchorElement>);
export function Button<T extends 'button' | 'a'>({
    as,
    children,
    className,
    ...props
}: Props<T>) {
    const Component = as as React.ElementType;
    return (
        <Component
            className={[className, 'button'].join(' ')}
            {...props}
        >
            {children}
        </Component>
    );
}
