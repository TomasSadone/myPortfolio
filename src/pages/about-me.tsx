import { Card } from '../components/card/card';

export const AboutMe = () => {
    const age =
        new Date(Date.now() - new Date('2001-07-02').getTime()).getFullYear() -
        1970;
    return (
        <article
            id='about-me'
            className='about-me container page-height'
        >
            <section>
                <h2>A litte bit about me</h2>
                <p>
                    Hi, I'm Tomas Sadone, a {age}-year-old Full Stack Developer.{' '}
                    <br />I began learning programming during the pandemic and
                    have been working professionally since January 2022. <br />{' '}
                    I'm dedicated to continuous growth as a developer with the
                    core goal of improving system performance, mastering design
                    principles, and ensuring my solutions are both scalable and
                    robust.
                </p>
                <p>
                    If you're interested in what I can offer,{' '}
                    <span className='color-primary w-700'>
                        feel free to reach out!
                    </span>
                </p>
            </section>
            <section>
                <h3>Skills</h3>
                <div className='about-me__grid'>
                    <div className='about-me__grid-two-thirds about-me__flex-vertical'>
                        <div className='about-me__flex'>
                            <Card>
                                <h4>Programming languages</h4>
                                <hr />
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>Typescript</li>
                                    <li>C</li>
                                    <li>Python</li>
                                </ul>
                            </Card>
                            <Card>
                                <h4>Frameworks & Libraries</h4>
                                <hr />
                                <ul>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Node</li>
                                    <li>React-Router</li>
                                    <li>Next.js</li>
                                    <li>Zustand</li>
                                </ul>
                            </Card>
                        </div>
                        <div>
                            <Card className='about-me__languages-card'>
                                <h4>Languages</h4>
                                <hr />
                                <ul>
                                    <li>English</li>
                                    <li>Spanish</li>
                                    <li>Italian</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                    <div className='about-me__grid-one-third'>
                        <Card>
                            <h4>Complementary</h4>
                            <hr />
                            <ul>
                                <li>Comunication</li>
                                <li>Problem solving</li>
                                <li>Agile</li>
                                <li>Scrum</li>
                                <li>Tailwind</li>
                                <li>Responsive design</li>
                                <li>Debugging</li>
                                <li>SQL</li>
                                <li>MongoDB</li>
                                <li>Shell</li>
                                <li>Git</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>
        </article>
    );
};
