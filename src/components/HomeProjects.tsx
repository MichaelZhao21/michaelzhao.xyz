import styles from '../styles/HomeProjects.module.css';
import data from '../data.json';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Circle from './Circle';

const HomeProjects = () => {
    const [matches, setMatches] = useState(false);
    const [projectId, setProjectId] = useState(0);
    const [timer, setTimer] = useState<NodeJS.Timeout>();

    const switchProject = (id: number) => {
        setProjectId(id);
    };

    useEffect(() => {
        clearTimeout(timer);
        setTimer(
            setTimeout(() => {
                setProjectId((projectId + 1) % data.projects.length);
            }, 5000)
        );
    }, [projectId]);

    useEffect(() => {
        setMatches(window.matchMedia('(max-width: 900px)').matches);
        window
            .matchMedia('(max-width: 900px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.displayBox}>
                    <a
                        href={data.projects[projectId].href}
                        target="_blank"
                        className={styles.displayBox}
                        style={{ borderColor: data.projects[projectId].color }}
                    >
                        <Image
                            src={`/${data.projects[projectId].name}.jpg`}
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: '0.5rem' }}
                        />
                    </a>
                </div>
                <div className={styles.column}>
                    {data.projects.map((p, i) => (
                        <div
                            key={p.name}
                            className={
                                styles.projectContainer +
                                (i == projectId
                                    ? ` ${styles.activeProject}`
                                    : '')
                            }
                            onClick={switchProject.bind(this, i)}
                        >
                            <Circle
                                size={matches ? "1rem" : "2.5rem"}
                                fill={p.color as string}
                                noAnimation
                                staticPosition
                            />
                            <div className={styles.projectName}>
                                {p.display}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.description}>
                {data.projects[projectId].description}
            </div>
        </div>
    );
};

export default HomeProjects;
