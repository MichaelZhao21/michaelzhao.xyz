import styles from '../styles/HomeProjects.module.css';
import data from '../data.json';

const HomeProjects = () => {
    return (
        <div>
            <div className={styles.mobileProjects + ' ' + styles.padded}>
                {data.projects.map((p) => (
                    <div key={p.name} className={styles.mobileProject}>
                        <a href={p.href} target="_blank" rel="noreferrer">
                            <img
                                src={`/${p.name}.jpg`}
                                alt={p.name}
                                style={{ borderColor: p.color }}
                            />
                        </a>
                        <div className={styles.mobileProjectTag}>
                            <a
                                style={{ color: p.color }}
                                href={p.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {p.display}
                            </a>
                            <p className={styles.projectSubtitle}>
                                {p.position}
                            </p>
                            <p className={styles.projectDesc}>
                                {p.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.container}>
                {data.projects.map((p) => (
                    <a
                        key={p.name}
                        className={styles.project}
                        style={{
                            backgroundImage: `url(/${p.name}.jpg)`,
                            borderColor: p.color,
                        }}
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div
                            className={styles.projectTag}
                            style={{ borderColor: p.color }}
                        >
                            <h2 style={{ color: p.color }}>{p.display}</h2>
                            <p className={styles.projectSubtitle}>
                                {p.position}
                            </p>
                            <p className={styles.projectDesc}>
                                {p.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default HomeProjects;
