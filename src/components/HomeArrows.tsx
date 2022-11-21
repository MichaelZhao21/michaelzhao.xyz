import Image from 'next/image';
import styles from '../styles/HomeArrows.module.css';

const HomeArrows = () => {
    return (
        <div className={styles.container}>
            <div className={styles.arrow}>
                <Image src="/arrows.svg" layout="fill" objectFit="contain" />
            </div>
        </div>
    );
};

export default HomeArrows;
