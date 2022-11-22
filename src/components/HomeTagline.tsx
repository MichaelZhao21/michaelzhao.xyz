import { useEffect, useState } from 'react';
import styles from '../styles/HomeTagline.module.css';
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
        <div className={styles.container + ' padded'}>
            <div className={styles.quoteContainer}>
                <Image
                    src="/quote.svg"
                    layout="fill"
                    objectFit="contain"
                    alt="open quotation mark"
                />
            </div>
            <p className={styles.quote}>{quote}</p>
        </div>
    );
};

export default HomeTagline;
