/**
 * Main wrapping container for site elements
 */
const Container = (props: React.HTMLProps<HTMLDivElement>) => {
    return (
        <div className="mt-32 flex flex-col items-center">{props.children}</div>
    );
};

export default Container;
