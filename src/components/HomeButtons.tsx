import SquareIconButton from './SquareIconButton';

const HomeButtons = () => {
    return (
        <div className="my-12 md:my-40 flex flex-row mx-[5%] md:mx-[22.5%] justify-center">
            <SquareIconButton
                color="#E4B2CA"
                icon="/email.svg"
                text="Email"
                href="mailto:michaelzhao314@gmail.com"
            />
            <SquareIconButton
                color="#A8DFB0"
                icon="/resume.svg"
                text="Resume"
                href="https://cdn.michaelzhao.xyz/resume.pdf"
            />
            <SquareIconButton
                color="#8CBAFF"
                icon="/linkedin.svg"
                text="LinkedIn"
                href="https://www.linkedin.com/in/michaelzhao21"
            />
            <SquareIconButton
                color="#DDAA5E"
                icon="/github.svg"
                text="Github"
                href="https://github.com/MichaelZhao21"
            />
        </div>
    );
};

export default HomeButtons;
