import quoteImg from '../assets/quote.png'
import LargeSquare from "./UI/Squares/LargeSquare/LargeSquare.tsx";

function Quote() {
    return <div>
        <LargeSquare styles={'border-r-0 right-0'}/>
        <div className={'border border-gray p-5 relative'}>
            <img src={quoteImg} alt={'quote'} className={'absolute -top-4'}/>
            <h2 className={'text-lg md:text-xl'}>With great power comes great electricity
                bill</h2>
            <img src={quoteImg} alt={'quote'} className={'absolute -bottom-4 right-2'}/>
        </div>
        <h2 className={'border border-t-0 border-gray p-3 w-5/12 md:w-3/12 text-nowrap ml-auto text-center text-lg md:text-xl'}>-
            Dr.
            Who</h2>
    </div>
}

export default Quote;