import './style.css';

type Props = {
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, className, ...props }: Props) => {
    return (
        <div
            className={[className, 'card'].join(' ')}
            {...props}
        >
            {children}
        </div>
    );
};
