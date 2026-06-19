import PageTitle from "../components/UI/PageTitle/PageTitle.tsx";
import AboutMe from "../components/AboutMe/AboutMe.tsx";
import Skills from "../components/Skills/Skills.tsx";
import SKILLS from "../data/skills.ts";
import SectionDivider from "../components/UI/SectionDivider/SectionDivider.tsx";
import LargeSquare from "../components/UI/Squares/LargeSquare/LargeSquare.tsx";

function AboutMePage() {
    return <div className={' flex flex-col gap-10'}>
        <PageTitle title={'about-me'} description={'who am i?'}/>
        <LargeSquare styles={'right-0 border-r-0 top-50'}/>
        <AboutMe hasMore={false}/>
        <LargeSquare styles={'left-0 border-l-0 top-150'}/>
        <SectionDivider title={'skills'} hasAll={false} hasLine={false}/>
        <Skills skills={SKILLS} isRow={true}/>
    </div>
}

export default AboutMePage