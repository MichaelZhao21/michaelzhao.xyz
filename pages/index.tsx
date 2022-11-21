import type { NextPage } from 'next';
import styles from '../src/styles/Home.module.css';
import HomeTitle from '../src/components/HomeTitle';
import HomeArrows from '../src/components/HomeArrows';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <HomeTitle />
            <HomeArrows />
        </div>
    );
};

export default Home;
