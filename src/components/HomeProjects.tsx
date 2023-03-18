import data from '../data.json';

const HomeProjects = () => {
    return (
        <div className="mx-[10%] lg:mx-[25%] mb-8">
            {data.projects.map((p) => (
                <div
                    key={p.name}
                    className="flex flex-col lg:flex-row justify-center"
                >
                    <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full lg:basis-1/2 lg:w-1/2 mb-4 lg:mb-8"
                    >
                        <img
                            src={`/${p.name}.jpg`}
                            alt={p.name}
                            style={{ borderColor: p.color }}
                            className="object-cover object-top border-[3px] border-solid rounded-xl cursor-pointer duration-200 hover:scale-105"
                        />
                    </a>
                    <div className="text-white w-full lg:w-1/2 lg:ml-[4%] lg:basis-[46%]">
                        <h2
                            className="text-3xl font-bold"
                            style={{ color: p.color }}
                        >
                            {p.display}
                        </h2>
                        <p className="mt-1 mb-4 text-xl">{p.position}</p>
                        <p className="text-textLight mt-1 mb-10 lg:text-xl">
                            {p.description}
                        </p>
                    </div>
                </div>
            ))}
            <div className="text-white text-xl">
                ...And a lot more - see{' '}
                <a
                    href="https://github.com/MichaelZhao21"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-secondary duration-200 hover:text-primary"
                >
                    my Github
                </a>{' '}
                for all the lil projects and unfinished code bits I've done!
            </div>
        </div>
    );
};

export default HomeProjects;
