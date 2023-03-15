import data from '../data.json';
import Image from 'next/image';

const HomeAbout = () => {
    return (
        <div className="p-4 pt-8 rounded-lg bg-backgroundDark mx-[10%] lg:mx-[25%] mb-12">
            {data.about.map((s) => (
                <div key={s.icon} className="flex flex-col mb-6">
                    <div className="flex flex-row items-center">
                        <div className="w-8 h-8 relative mr-4">
                            <Image
                                src={`/${s.icon}.svg`}
                                alt={s.icon}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-white">{s.title}</h2>
                    </div>
                    <p className="ml-12 text-textLight md:text-lg">{s.body}</p>
                </div>
            ))}
        </div>
    );
};

export default HomeAbout;
