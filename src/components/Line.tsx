interface LineProps {
    thin?: boolean;
    short?: boolean;
    className?: string;
}

const Line = (props: LineProps) => {
    return (
        <div className="w-full flex items-center justify-center">
            <div
                className={
                    'bg-black ' +
                    (props.thin ? 'h-[1px] ' : 'h-[2.5px] ') +
                    (props.short ? 'w-1/2 ' : 'w-full ') +
                    props.className
                }
            ></div>
        </div>
    );
};

export default Line;
