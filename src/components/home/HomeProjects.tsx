import data from '../../data.json';
import Line from '../Line';

const HomeProjects = () => {
    return (
        <div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">Projects</h1>
            {data.projects.map((project) => (
                <p className="pb-2" key={project.href}>
                    <a href={project.href} className="font-extrabold sm:text-2xl">
                        {project.display}
                    </a>
                    <span className="sm:text-2xl">{` [${project.position}] - `}</span>
                    <span className="text-sm sm:text-lg">{project.description}</span>
                </p>
            ))}
            <Line thin short className="mb-2 sm:mt-6 sm:mb-3" />
            <p className="text-center sm:text-2xl">...and a lot more :D</p>
            <p className="text-center mb-2 sm:mb-6 sm:text-2xl">
                See my <a href="https://github.com/MichaelZhao21">Github</a> for
                ALL the lil projects and unfinished code bits I&apos;ve done!
            </p>
        </div>
    );
};

export default HomeProjects;
