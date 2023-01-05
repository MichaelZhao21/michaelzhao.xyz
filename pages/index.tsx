import type { NextPage } from 'next';
import styles from '../src/styles/Home.module.css';
import HomeTitle from '../src/components/HomeTitle';
import HomeArrows from '../src/components/HomeArrows';
import HomeTagline from '../src/components/HomeTagline';
import HomeButtons from '../src/components/HomeButtons';
import HomeProjects from '../src/components/HomeProjects';
import HomeStudying from '../src/components/HomeStudying';
import HomeLinks from '../src/components/HomeLinks';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <HomeTitle />
            <HomeArrows />
            <HomeTagline />
            <HomeButtons />
            <h1 className="heading padded">What I&apos;m Studying</h1>
            <HomeStudying />
            <h1 className="heading padded">Projects</h1>
            <HomeProjects />
            <h1 className="heading padded">Links :DD</h1>
            <HomeLinks />
        </div>
    );
};

export default Home;
