import { useState } from 'react';
import { Accordion } from '../components/Accordion';
import { Button } from '../components/Button/Button';
import { Card } from '../components/card/card';
import DevArt from '../assets/screenshots/dev-art.png';
import Bytes4Less from '../assets/screenshots/lzss.jpg';
import Sunnyside from '../assets/screenshots/sunnyside.png';
import Shared from '../assets/screenshots/shared-components.png';

type TCard = {
    title: string;
    img: string;
    tags: string[];
    description: string;
    buttons: {
        to: string;
        text: string;
    }[];
};

const cards_content: TCard[] = [
    {
        title: 'Graphic Editor // Canva-like',
        img: DevArt,
        tags: ['Typescript', 'React', 'SASS', 'Hooks'],
        description:
            'An editor to create custom images. Hugely optimized rendering and performance with the use of advanced custom hooks.',

        buttons: [
            { text: 'Live site', to: 'https://tomassadone.github.io/dev-art/' },
            { text: 'Github', to: 'https://github.com/tomassadone/dev-art' },
        ],
    },
    {
        title: 'Bytes4Less // File compressor',
        img: Bytes4Less,
        tags: ['C', 'Algorithms', 'CLI'],
        description:
            'A text file compressor applying the lzss algorithm written in C. Memory managment, structs, bitwise operations, and all sorts of complex stuff.',
        buttons: [
            {
                text: 'Github',
                to: 'https://github.com/TomasSadone/lzss-txt-compressor',
            },
        ],
    },
    {
        title: 'Sunnyside // Landing page',
        img: Sunnyside,
        tags: ['Tailwind', 'UI', 'Responsive'],
        description:
            'Landing page oriented to pixel perfecition that showcases my skills in the field of UI development. Fully responsive and built implementing a Figma design.',
        buttons: [
            {
                text: 'Live site',
                to: 'https://tomassadone.github.io/sunnyside-landing/',
            },
            { text: 'Github', to: 'https://github.com/tomassadone/dev-art' },
        ],
    },
    {
        title: 'Shared UI // Components library',
        img: Shared,
        tags: ['React', 'NPM', 'Reusability'],
        description:
            'A React UI components library thinked to be reusable along diffrent products. Helps the developer and allows him to customize each component.',
        buttons: [
            {
                text: 'Github',
                to: 'https://github.com/TomasSadone/shared-components',
            },
        ],
    },
];

export const MyWork = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);
    const handleOpen = (index: number) => {
        return () => setOpenAccordion(openAccordion !== index ? index : null);
    };

    return (
        <article
            className='my-work container page-height'
            id='my-work'
        >
            <h2>Take a look at what I can do!</h2>
            <div className='cards-container'>
                {cards_content.map((card, i) => (
                    <article key={card.title}>
                        <Card className='project-card'>
                            <h3>{card.title}</h3>
                            <img
                                src={card.img}
                                alt=''
                            />
                            <div className='tags'>
                                {card.tags.map((tag) => (
                                    <Card key={tag}>{tag}</Card>
                                ))}
                            </div>
                            <p
                                title={card.description}
                                className='w-400'
                            >
                                {card.description}
                            </p>
                            {/* accordion  check it out*/}
                            <Accordion
                                handleOpen={handleOpen(i)}
                                open={openAccordion === i}
                                text='Check it out'
                            >
                                <div className='accordion-children'>
                                    {card.buttons.map((button) => (
                                        <Button
                                            key={button.to}
                                            href={button.to}
                                            as='a'
                                        >
                                            {button.text}
                                        </Button>
                                    ))}
                                </div>
                            </Accordion>
                            {/* accordion */}
                        </Card>
                    </article>
                ))}
            </div>
            <p>
                Eager to see more?{' '}
                <a href='https://www.github.com/tomassadone'>
                    Check out my GitHub profile{' '}
                    <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <g clipPath='url(#clip0_796_274)'>
                            <path
                                d='M19.27 8.23255L15.4483 4.41089L14.27 5.58922L17.8217 9.14172L0 9.16672V10.8334L17.8717 10.8084L14.2692 14.4109L15.4475 15.5892L19.27 11.7676C19.7373 11.298 19.9996 10.6625 19.9996 10.0001C19.9996 9.33762 19.7373 8.70213 19.27 8.23255Z'
                                fill='#5e5bff'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_796_274'>
                                <rect
                                    width='20'
                                    height='20'
                                    fill='white'
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </p>
        </article>
    );
};
