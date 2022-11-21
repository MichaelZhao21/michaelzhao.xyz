import Image from 'next/image';
import styles from '../styles/HomeTitle.module.css';
import Circle from './Circle';

const HomeTitle = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nameContainer}>
                <div className={styles.image + ' ' + styles.bracket}>
                    <Image
                        src="/lbracket.svg"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className={styles.name}>
                    <h1 className={styles.nameText}>Michael</h1>
                    <h1 className={styles.nameText}>Zhao</h1>
                </div>
                <div className={styles.image + ' ' + styles.bracket}>
                    <Image
                        src="/rbracket.svg"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className={styles.spacer} />
            <div className={styles.pictureContainer}>
                <div className={styles.face}>
                    <Image src="/face.png" layout="fill" objectFit="contain" />
                </div>
                <Circle
                    top="12%"
                    left="5%"
                    size="30%"
                    fill="#FDC355"
                    delay="0.4s"
                />
                <Circle
                    top="47%"
                    left="7%"
                    size="23%"
                    fill="#FDB257"
                    delay="0.6s"
                />
                <Circle
                    top="72%"
                    left="22%"
                    size="17%"
                    fill="#FE9D59"
                    delay="0.8s"
                />
                <Circle
                    top="83%"
                    left="41%"
                    size="13%"
                    fill="#FF8A5A"
                    delay="1.0s"
                />
                <Circle
                    top="87%"
                    left="58%"
                    size="8%"
                    fill="#FF845B"
                    delay="1.2s"
                />
            </div>
        </div>
    );
};

export default HomeTitle;
