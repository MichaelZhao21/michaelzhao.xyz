import type { NextPage } from 'next';
import Line from '../src/components/Line';
import HomeDescription from '../src/components/home/HomeDescription';
import HomeQuote from '../src/components/home/HomeQuote';
import HomeProjects from '../src/components/home/HomeProjects';
import HomeMiscLinks from '../src/components/home/HomeMiscLinks';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <div className="sm:px-20 px-4 pt-8 relative">
            <a
                href="/cat.svg"
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-4 sm:top-8 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 opacity-50 rotate-[30deg]"
            >
                <Image
                    src="/cat.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                    alt="picture of my face"
                />
            </a>
            <h1 className="text-5xl sm:text-7xl pb-1">Michael Zhao</h1>
            <Line className="mb-4 sm:mb-8" />
            <HomeDescription />
            <HomeQuote />
            <Line className="mb-2 sm:mb-6" />
            <HomeProjects />
            <Line className="mb-2 sm:mb-6" />
            <HomeMiscLinks />
            <Line className="mb-2 sm:mt-4" />
            <p className="text-right mb-2 sm:mb-6 sm:text-xl">
                Thanks for visiting! - 🧡 Mikey :D
            </p>
        </div>
    );
};

export default Home;
