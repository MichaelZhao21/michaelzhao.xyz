import { HTMLProps } from 'react';

const Heading = (props: HTMLProps<HTMLHeadingElement>) => {
    return (
        <h1 className="heading text-5xl pb-8 font-bold mx-[10%] md:mx-[25%]">
            {props.children}
        </h1>
    );
};

export default Heading;
