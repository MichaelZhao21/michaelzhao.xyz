import styles from '../styles/HomeLinks.module.css';
import data from '../data.json';

const HomeLinks = () => {
    const randColor = () => {
        return Math.floor(Math.random() * 360);
    };

    return (
        <div className={styles.container}>
            {data.links.map((l) => (
                <a
                    href={l.href}
                    target="_blank"
                    className={styles.item}
                    style={{ backgroundColor: `hsl(${randColor()} 68% 78%)` }}
                >
                    {l.title}
                </a>
            ))}
        </div>
    );
};

export default HomeLinks;
