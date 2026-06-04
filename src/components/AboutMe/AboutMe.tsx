import MainButton from "../UI/MainButton/MainButton.tsx";
import hacker2Img from '../../assets/hacker-image-2.png'
import spaceDotsImg from '../../assets/high-space-dots.png'

export default function AboutMe() {
    return <div className={'w-full flex justify-between items-start gap-4'}>
        <div className={'w-full md:w-1/2'}>
            <p className="whitespace-pre-line text-gray mb-10">
                {`Hello, i’m Ayoub!

I’m a self-taught full-stack developer based in Js/Ts, Iran. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 

Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.`}
            </p>
            <MainButton text={'Read more ->'} canHide={false}/>
        </div>
        <div className={'relative hidden md:block'}>
            <img src={spaceDotsImg} alt={'dots'} className={'absolute top-15'}/>
            <img src={hacker2Img} alt={'hacker-image'}/>
            <div className={'bg-primary h-p'}></div>
            <img src={spaceDotsImg} alt={'dots'} className={'absolute bottom-1/5 right-5'}/>
        </div>
    </div>
}