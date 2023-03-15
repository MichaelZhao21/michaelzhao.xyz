import data from '../data.json';

const HomeLinks = () => {
    const randColor = () => {
        return Math.floor(Math.random() * 360);
    };

    return (
        <div className="mx-[10%] lg:mx-[25%] flex flex-wrap">
            {data.links.map((l) => (
                <a
                    key={l.title}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-6 rounded-full text-black text-xl md:text-2xl m-2 duration-200 hover:brightness-110 hover:scale-105 text-center md:text-left w-full md:w-fit"
                    style={{ backgroundColor: `hsl(${randColor()} 68% 78%)` }}
                >
                    {l.title}
                </a>
            ))}
        </div>
    );
};

export default HomeLinks;
