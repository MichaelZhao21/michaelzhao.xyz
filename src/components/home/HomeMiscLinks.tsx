import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import data from '../../data.json';

interface Link {
    title: string;
    href: string;
    cat: string;
}

interface LinkCat {
    cat: string;
    links: Link[];
}

interface SortButtonProps {
    name: string;
    sort: string;
    setSort: Dispatch<SetStateAction<string>>;
}

const SortButton = (props: SortButtonProps) => {
    return (
        <button
            className={'mx-1 ' + (props.sort === props.name ? '' : 'underline')}
            onClick={() => {
                props.setSort(props.name);
            }}
        >
            {props.name}
        </button>
    );
};

const sorts = ['Alphabetical', 'Category', 'Random'];

const HomeMiscLinks = () => {
    const [sort, setSort] = useState('Alphabetical');
    const [links, setLinks] = useState<LinkCat[]>([]);

    // "This should be easy 🤡"
    useEffect(() => {
        if (sort === 'Alphabetical') {
            // Alphabetial sort (simply sort by title)
            const sortedLinks = data.links.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            setLinks([{ cat: '', links: sortedLinks }]);
        } else if (sort === 'Random') {
            // Random sort (shuffle the links)
            const shuffledLinks = data.links
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value);
            setLinks([{ cat: '', links: shuffledLinks }]);
        } else if (sort === 'Category') {
            // Category sort (sort by category... then group by category)
            const sortedLinks = data.links.sort((a, b) =>
                a.cat.localeCompare(b.cat)
            );
            let currCat = sortedLinks[0].cat;
            console.log(sortedLinks);
            let linkCats = [{ links: [], cat: currCat }] as LinkCat[];
            sortedLinks.forEach((link) => {
                if (link.cat !== currCat) {
                    currCat = link.cat;
                    linkCats.push({ cat: currCat, links: [] });
                }
                linkCats[linkCats.length - 1].links.push(link);
            });
            setLinks(linkCats);
        }
    }, [sort]);

    return (
        <div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">
                Random Links!
            </h1>
            <div className="my-2 flex sm:text-xl">
                <p className="font-bold">Sort By:</p>
                {sorts.map((sortName) => (
                    <SortButton
                        name={sortName}
                        setSort={setSort}
                        sort={sort}
                        key={sortName}
                    />
                ))}
            </div>
            {links.map((linkCat) => (
                <p className="sm:text-2xl mb-1" key={linkCat.cat}>
                    {linkCat.cat !== '' && (
                        <span className="font-bold">{`<${linkCat.cat}> `}</span>
                    )}
                    {linkCat.links.map((link, i) => (
                        <>
                            <span key={i}>{i === 0 ? '' : ' · '}</span>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="no-underline"
                                key={i}
                            >
                                {link.title}
                            </a>
                        </>
                    ))}
                </p>
            ))}
        </div>
    );
};

export default HomeMiscLinks;
