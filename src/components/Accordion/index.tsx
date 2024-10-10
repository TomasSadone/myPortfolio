import { Card } from '../card/card';
import './style.css';
import chevron from '../../assets/chevron-down.svg';

type Props = {
    text: string;
    children: React.ReactNode;
    open: boolean;
    handleOpen: (open: boolean) => void;
};

export const Accordion = ({ text, children, handleOpen, open }: Props) => {
    return (
        <div onClick={() => handleOpen(!open)}>
            <Card className={'accordion card'}>
                <p>{text}</p>
                <img
                    className={`${'chevron'} ${open && 'open'}`}
                    src={chevron}
                />
            </Card>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`${'children'} ${open && 'open'}`}
            >
                <div>{children}</div>
            </div>
        </div>
    );
};
