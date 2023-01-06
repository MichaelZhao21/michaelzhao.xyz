import styles from '../styles/HomeProjects.module.css';
import data from '../data.json';

const HomeProjects = () => {
    return (
        <div className={styles.projects + ' padded'}>
            {data.projects.map((p) => (
                <div key={p.name} className={styles.project}>
                    <a href={p.href} target="_blank" rel="noreferrer">
                        <img
                            src={`/${p.name}.jpg`}
                            alt={p.name}
                            style={{ borderColor: p.color }}
                        />
                    </a>
                    <div className={styles.projectTag}>
                        <h2
                            className={styles.projectTitle}
                            style={{ color: p.color }}
                        >
                            {p.display}
                        </h2>
                        <p className={styles.projectSubtitle}>{p.position}</p>
                        <p className={styles.projectDesc}>{p.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomeProjects;
