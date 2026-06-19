import Header from "../components/Header.tsx";
import Quote from "../components/Quote.tsx";
import Projects from "../components/Projects/Projects.tsx";
import PROJECTS from "../data/projects.ts";
import SectionDivider from "../components/UI/SectionDivider/SectionDivider.tsx";
import Skills from "../components/Skills/Skills.tsx";
import SKILLS from '../data/skills.ts'
import AboutMe from "../components/AboutMe/AboutMe.tsx";
import Contacts from "../components/Contacts/Contacts.tsx";

function HomePage() {
    return <div className={'flex flex-col items-center justify-center w-full gap-14'}>
        <Header/>
        <Quote/>
        <SectionDivider title={'projects'} hasAll={true} hasLine={true} href={'projects'}/>
        <Projects projects={PROJECTS.slice(-3)}/>
        <SectionDivider title={'skills'} hasAll={false} hasLine={true}/>
        <div className={'flex items-center justify-between w-full'}>
            <div className={''}></div>
            <Skills skills={SKILLS} isRow={false}/>
        </div>
        <SectionDivider title={'about-me'} hasAll={false} hasLine={true}/>
        <AboutMe hasMore={true}/>
        <SectionDivider title={'contacts'} hasAll={false} hasLine={true}/>
        <Contacts/>
    </div>
}

export default HomePage;