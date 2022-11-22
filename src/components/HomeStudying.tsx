import styles from '../styles/HomeStudying.module.css';
import data from '../data.json';
import Image from 'next/image';

const HomeStudying = () => {
    return (
        <div className={styles.container + ' padded'}>
            {data.studying.map((s) => (
                <div className={styles.item}>
                    <div className={styles.title}>
                        <div className={styles.icon}>
                            <Image
                                src={`/${s.name}.svg`}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <h2>{s.title}</h2>
                    </div>
                    <p>{s.body}</p>
                </div>
            ))}
        </div>
    );
};

export default HomeStudying;
