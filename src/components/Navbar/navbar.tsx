import { Button } from '../Button/Button';
import arrow from '../../assets/right-arrow.svg';
import './style.css';
import { useState } from 'react';

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const onClick = () => {
        setOpen(!open);
    };
    return (
        <div className='container layout'>
            <span className='francy my-name'>Tomas</span>
            <button
                onClick={onClick}
                className='hamburguer-menu'
            >
                <span className={`${open && 'open'}`}></span>
            </button>
            <nav className={`${open && 'open'}`}>
                <ul>
                    <li>
                        <a
                            target='_self'
                            href='#about-me'
                        >
                            About me
                        </a>
                    </li>
                    <li>
                        <a
                            target='_self'
                            href='#my-work'
                        >
                            My work
                        </a>
                    </li>
                    <li>
                        <a
                            target='_self'
                            href='#contact'
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <Button
                            as='a'
                            href='https://drive.google.com/file/d/1CV4FGHaMSA7WGRpjbcmCtuAlwFzwbbBy/view'
                            className='cv-cat'
                        >
                            Learn more{' '}
                            <img
                                src={arrow}
                                alt=''
                            />
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
