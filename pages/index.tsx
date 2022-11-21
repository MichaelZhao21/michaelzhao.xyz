import type { NextPage } from 'next';
import styles from '../src/styles/Home.module.css';
import HomeTitle from '../src/components/HomeTitle';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <HomeTitle />
        </div>
    );
};

export default Home;
