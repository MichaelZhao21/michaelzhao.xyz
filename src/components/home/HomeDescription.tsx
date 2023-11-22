import { useState } from 'react';
import Line from '../Line';
import HomeLinks from './HomeLinks';
import Image from 'next/image';

const HomeDescription = () => {
    const [showExtra, setShowExtra] = useState(false);

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row w-full">
                <div className="relative shrink-0 mr-3 lg:w-[20rem] w-[8rem] lg:h-[28rem] h-[11rem]">
                    <Image
                        src="/me.webp"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="top"
                        alt="picture of my face"
                    />
                </div>
                <div className="flex flex-col w-fit">
                    <Line thin />
                    <p className="pt-2 lg:py-2 md:text-2xl">
                        Hi! I'm Michael, a graduate student studying computer
                        science at UTD. On my own time, I like to work on
                        personal projects through code and art :D
                    </p>
                    <div className="hidden lg:block">
                        <ExtraDescription />
                    </div>
                    <div
                        className={
                            showExtra ? 'hidden' : 'flex flex-col items-end'
                        }
                    >
                        <button
                            className="lg:hidden w-fit"
                            onClick={() => {
                                setShowExtra(true);
                            }}
                        >
                            ...Show More
                        </button>
                        <Line thin className="mb-3" />
                    </div>
                    <HomeLinks className="hidden lg:block" />
                </div>
            </div>
            <div
                className={
                    'lg:hidden ' +
                    (showExtra ? 'flex flex-col items-end' : 'hidden')
                }
            >
                <ExtraDescription />
                <button
                    className="lg:hidden w-fit pb-2"
                    onClick={() => {
                        setShowExtra(false);
                    }}
                >
                    ...Show Less
                </button>
                <Line thin className="mb-3" />
            </div>
            <HomeLinks className="lg:hidden" />
        </div>
    );
};

const ExtraDescription = () => {
    return (
        <>
            <p className="md:text-2xl">
                I've been going to hackathons all through college, and I was the
                director of HackUTD X! I love meeting new people and hanging out
                with my friends, whether it's getting Boba from a local shop or
                playing TTRPGs like DnD (I'm a Cleric for a campaign rn and
                planning one myself). Drawing has always been one of my
                passions, and I sketch or paint whenever I can. Besides that, I
                love playing rhythm, metroidvania, and rougelike games such as
                Rhythm Doctor, Hollow Knight, and Hades.
            </p>
            <p className="py-2 md:text-2xl self-start">
                Thanks for stopping by and have a great day!
            </p>
        </>
    );
};

export default HomeDescription;
