import { useEffect, useState } from 'react';
import data from '../data.json';
import Image from 'next/image';

const HomeTagline = () => {
    const [quote, setQuote] = useState('');
    // Get a random tagline
    useEffect(() => {
        const quoteNum = Math.floor(Math.random() * data.quotes.length);
        setQuote(data.quotes[quoteNum]);
    }, []);

    return (
        <div className="mt-12 md:mt-24 flex flex-col mx-[10%] md:mx-[22.5%]">
            <div className="h-8 w-8 md:h-12 md:w-12 relative self-start ml-[-1rem] md:ml-[-4rem]">
                <Image
                    src="/quote.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="open quotation mark"
                />
            </div>
            <p className="self-center text-4xl text-white text-center">{quote}</p>
        </div>
    );
};

export default HomeTagline;
