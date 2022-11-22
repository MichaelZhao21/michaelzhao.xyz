import type { NextPage } from 'next';
import styles from '../src/styles/Home.module.css';
import HomeTitle from '../src/components/HomeTitle';
import HomeArrows from '../src/components/HomeArrows';
import HomeTagline from '../src/components/HomeTagline';
import HomeButtons from '../src/components/HomeButtons';
import HomeProjects from '../src/components/HomeProjects';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <HomeTitle />
            <HomeArrows />
            <HomeTagline />
            <HomeButtons />
            <h1 className='heading padded'>Projects</h1>
            <HomeProjects />
        </div>
    );
};

export default Home;
