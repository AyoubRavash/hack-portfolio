import type {Props} from './Skills.d';
import Skill from './Skill/Skill.tsx';
import spaceDotsImg from '../../assets/high-space-dots.png'
import purpleLogoImg from '../../assets/purple-logo.png'
import LargeSquare from "../UI/Squares/LargeSquare/LargeSquare.tsx";
import SmallSquare from "../UI/Squares/SmallSquare/SmallSquare.tsx";

export default function Skills({skills, isRow}: Props) {
    if (isRow) {
        return (
            <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                    <Skill
                        key={skill.title ?? index}
                        title={skill.title}
                        description={skill.description}
                    />
                ))}
            </div>
        );
    }

    // Fixed layout: left 1 – middle 2 – right 2
    const leftSkills = skills.slice(0, 1);
    const middleSkills = skills.slice(1, 3);
    const rightSkills = skills.slice(3, 5);

    return (
        <div className={'flex items-center justify-center lg:justify-between gap-4 w-full'}>
            <LargeSquare styles={'border-l-0 left-0 hidden md:block'}/>
            <div className={'hidden lg:block relative w-2/5 h-90'}>
                <img src={spaceDotsImg} alt={'dots'} className={'absolute top-0 left-0'}/>
                <img src={spaceDotsImg} alt={'dots'} className={'absolute bottom-2/5 right-10 lg:right-1/5'}/>
                <LargeSquare styles={'-top-5 right-10'}/>
                <SmallSquare styles={'bottom-0 right-0'}/>
                <img src={purpleLogoImg} alt={'logo'} className={'absolute left-0 bottom-0'}/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* Left column */}
                <div className="flex flex-col gap-3 col-span-1">
                    {leftSkills.map((skill, index) => (
                        <Skill key={skill.title ?? index} {...skill} />
                    ))}
                </div>

                {/* Middle column */}
                <div className="flex flex-col gap-3 col-span-1">
                    {middleSkills.map((skill, index) => (
                        <Skill key={skill.title ?? index} {...skill} />
                    ))}
                </div>

                {/* Right column */}
                <div className="flex flex-row sm:flex-col gap-3 col-span-2 sm:col-span-1">
                    {rightSkills.map((skill, index) => (
                        <Skill key={skill.title ?? index} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}