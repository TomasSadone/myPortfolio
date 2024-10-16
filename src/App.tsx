import { useEffect, useRef, useState } from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar/navbar';
import { AboutMe } from './pages/about-me';
import { MyWork } from './pages/my-work';
import { Welcome } from './pages/welcome';
import { useWindowValue } from './hooks/useWindowValue';
import { Error } from './pages/error/Error';

function App() {
    const [scrolledEnd, setScrolledEnd] = useState(false);
    const ref = useRef<HTMLElement>(null);
    const windowHeight = useWindowValue('innerHeight', 'resize');
    const onScroll = () => {
        if (!ref.current) {
            return;
        }
        const { bottom } = ref.current.getBoundingClientRect();
        setScrolledEnd(bottom <= windowHeight - 100);
    };
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
    return (
        <>
            <Background>
                <header>
                    <Navbar />
                </header>
                <main ref={ref}>
                    <Welcome />
                    <AboutMe />
                    <MyWork />
                </main>
            </Background>
            <span id='contact'></span>
            {scrolledEnd ? <Error /> : null}
        </>
    );
}

export default App;
