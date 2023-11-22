import data from '../../data.json';

const HomeLinks = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <h2 className="font-extrabold text-xl sm:text-3xl">Links to Follow:</h2>
            <ul>
                {data.topLinks.map((link) => (
                    <li className="ml-6 list-disc sm:text-2xl" key={link.href}>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="font-bold"
                        >
                            {link.title}
                        </a>{' '}
                        - {link.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomeLinks;
