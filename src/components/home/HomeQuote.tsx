import { useEffect, useState } from 'react';
import data from '../../data.json';

interface Quote {
    text: string;
    author: string;
}

const HomeQuote = () => {
    const [quote, setQuote] = useState<Quote | null>(null);

    // Get a random tagline
    useEffect(() => {
        const quoteNum = Math.floor(Math.random() * data.quotes.length);
        setQuote(data.quotes[quoteNum]);
    }, []);

    return (
        <div className="sm:mx-6 my-4 sm:mb-6 px-6 py-4 bg-dark text-xl sm:text-2xl">
            {!quote ? '' : `"${quote.text}" - ${quote.author}`}
        </div>
    );
};

export default HomeQuote;
