import { Background } from './components/Background';
import { Navbar } from './components/Navbar/navbar';
import { AboutMe } from './pages/about-me';
import { MyWork } from './pages/my-work';
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
                    <MyWork />
                </main>
            </Background>
        </>
    );
}

export default App;
