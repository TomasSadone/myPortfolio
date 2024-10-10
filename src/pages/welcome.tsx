import { Button } from '../components/Button/Button';
import { SocialMediaLogos } from '../components/social-media-logos';

export const Welcome = () => {
    return (
        <article className='welcome container page-height'>
            <div className='welcome__heading'>
                <span className='welcome__name'>Tomas Sadone</span>
                <h1 className='francy'>Full Stack Developer</h1>
                <SocialMediaLogos direction='horizontal' />
                <div className='welcome__available-badge'>
                    <span>Available for work</span>
                </div>
            </div>
            <p className='welcome__paragraph'>
                Hi, I'm Tomas, a{' '}
                <span className='color-primary w-700'>
                    Full Stack Developer
                </span>{' '}
                focused on creating{' '}
                <span className='color-primary w-700'>
                    dynamic, user-friendly web applications
                </span>{' '}
                that provide seamless experiences across all devices. I
                specialize in building solutions that are{' '}
                <span className='color-primary w-700'>
                    efficient, scalable, and easy to maintain
                </span>
                . Explore my portfolio below to see how I bring ideas to life
                through technology!
            </p>
            <Button
                as='a'
                href='mailto:tomassadonedev@gmail.com'
                className='welcome__button'
            >
                Let's talk!
            </Button>
            <a
                href='mailto:tomassadonedev@gmail.com'
                className='welcome__mail'
            >
                tomassadonedev@gmail.com
            </a>
            <SocialMediaLogos
                className='welcome__vertical-line'
                direction='vertical'
            />
        </article>
    );
};
