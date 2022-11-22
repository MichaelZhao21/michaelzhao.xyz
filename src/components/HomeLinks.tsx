import styles from '../styles/HomeLinks.module.css';
import data from '../data.json';

const HomeLinks = () => {
    const randColor = () => {
        return Math.floor(Math.random() * 360);
    };

    return (
        <div className={styles.container + ' padded'}>
            {data.links.map((l) => (
                <a
                    key={l.title}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
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
