import type { NextPage } from 'next';
import HomeTitle from '../src/components/HomeTitle';
import HomeTagline from '../src/components/HomeTagline';
import HomeButtons from '../src/components/HomeButtons';
import HomeProjects from '../src/components/HomeProjects';
import HomeAbout from '../src/components/HomeAbout';
import HomeLinks from '../src/components/HomeLinks';
import Heading from '../src/components/Heading';

const Home: NextPage = () => {
    return (
        <div className="pb-40">
            <HomeTitle />
            <HomeTagline />
            <HomeButtons />
            <Heading>About Me</Heading>
            <HomeAbout />
            <Heading>Projects</Heading>
            <HomeProjects />
            <Heading>Links :DDD</Heading>
            <HomeLinks />
        </div>
    );
};

export default Home;
