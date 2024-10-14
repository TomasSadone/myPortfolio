import './style.css';
import Image1 from '../../assets/backgrounds/bg-1.svg';
import Image2 from '../../assets/backgrounds/bg-2.svg';
import Image3 from '../../assets/backgrounds/bg-3.svg';
import Image4 from '../../assets/backgrounds/bg-4.svg';

export const Background = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='background'>
            <img
                className='image-1'
                src={Image1}
                alt=''
            />
            <img
                className='image-2'
                src={Image2}
                alt=''
            />
            <img
                className='image-3'
                src={Image3}
                alt=''
            />
            <img
                src={Image4}
                className='image-4'
                alt=''
            />
            <div>{children}</div>
        </div>
    );
};
