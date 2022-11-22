import Image from 'next/image';
import styles from '../styles/SquareIconButton.module.css';

const SquareIconButton = (props: {
    color: string;
    icon: string;
    text: string;
    href: string;
}) => {
    return (
        <div className={styles.container}>
            <a
                className={styles.button}
                style={{ backgroundColor: props.color }}
                href={props.href}
                target="_blank"
                rel="noreferrer"
            >
                <div className={styles.iconContainer}>
                    <Image
                        src={props.icon}
                        layout="fill"
                        objectFit="contain"
                        alt={props.icon}
                    />
                </div>
            </a>
            <div className={styles.text}>{props.text}</div>
        </div>
    );
};

export default SquareIconButton;
