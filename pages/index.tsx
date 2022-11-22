import type { NextPage } from 'next';
import styles from '../src/styles/Home.module.css';
import HomeTitle from '../src/components/HomeTitle';
import HomeArrows from '../src/components/HomeArrows';
import HomeTagline from '../src/components/HomeTagline';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <HomeTitle />
            <HomeArrows />
            <HomeTagline />
        </div>
    );
};

export default Home;
