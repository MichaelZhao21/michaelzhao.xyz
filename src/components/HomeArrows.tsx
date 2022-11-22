import Image from 'next/image';
import styles from '../styles/HomeArrows.module.css';

const HomeArrows = () => {
    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.arrow} onClick={scrollDown}>
                <Image src="/arrows.svg" layout="fill" objectFit="contain" />
            </div>
        </div>
    );
};

export default HomeArrows;
