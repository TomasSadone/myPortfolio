import errorSound from '../../assets/erro.mp3';
import { Button } from '../../components/Button/Button';
const audio = new Audio(errorSound);

export const Error = () => {
    audio.play();

    return (
        <div className='error'>
            <div className='error-container'>
                <span>404</span>
                <div className='title-container'>
                    <h2 className='francy'>Ups! End of free trial</h2>
                </div>
            </div>
            <div>
                <p>
                    If you're interested in learning more,{' '}
                    <span>let's connect!</span>
                </p>
                <p>
                    {' '}
                    Don't hesitate to reach out - click below to schedule an
                    interview with me.
                </p>
            </div>
            <Button
                as='a'
                href='https://appt.link/meet-with-tomas-sadone-QGdyhBHd/web-conference'
            >
                Schedule an interview
            </Button>
        </div>
    );
};
