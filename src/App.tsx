import { Background } from './components/Background';
import { Navbar } from './components/Navbar/navbar';
import { AboutMe } from './pages/about-me';
import { Welcome } from './pages/welcome';

function App() {
    return (
        <>
            <Background>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Welcome />
                    <AboutMe />
                </main>
            </Background>
        </>
    );
}

export default App;
