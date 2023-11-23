import { useState } from 'react';

import question from '../../assets/images/faq/question.svg';
import telegram from '../../assets/images/socIcons/telegram.svg';
import { dataAccordion } from './data';
import AccordionItem from './AccordionItem';
import CustomSelect from '../../inc/CustomSelect';

const itemsSelect = ['Choose a theme', 'Theme 1', 'Theme 2', 'Theme 3', 'Theme 4'];

const Index = () => {
    const [openId, setOpenId] = useState<number | null>(null);
    return (
        <section className="bg-white px-8 py-20 ssm:py-28">
            <div className="container">
                <div className="flex justify-between items-center mb-6">
                    <div className='font-bold text-4xl xl:text-5xl'>FAQ</div>
                    <img className='w-20 ssm:w-28 lg:w-36 xl:w-40' src={question} alt="FAQ" />
                </div>
                <div className="lg:flex lg:justify-start gap-5 xl:gap-10">
                    <div className="mb-6 lg:flex-auto">
                        {dataAccordion.map((item, index) => {
                            return <AccordionItem key={index} data={item} onClick={() => index === openId ? setOpenId(null) : setOpenId(index)} isOpen={index === openId} />
                        })}
                    </div>
                    <div className="bg-regal-blue rounded-2xl p-4 lg:w-80 lg:flex-shrink-0 lg:h-min">
                        <div className="font-semibold text-xl lg:text-3xl xl:text-2xl text-white mb-3">Get a free consultation</div>
                        <div className="text-sm text-white mb-4 ssm:text-base">Please complete the form below</div>
                        <form className='' action="">
                            <CustomSelect items={itemsSelect} rootClass="mb-2" />
                            <input className='w-full mb-2 rounded-md py-3 px-4' type="text" placeholder='Your Email' />
                            <input className='w-full mb-4 rounded-md py-3 px-4' type="text" placeholder='Write whatever...' />
                            <button
                                className='rounded-full bg-regal-black py-3 border border-transparent w-full font-semibold text-white
                            hover:text-regal-black hover:bg-white transition hover:border-regal-black'
                                type="button"
                            >
                                Send</button>
                        </form>
                        <div className="w-full text-center text-white py-2">or</div>
                        <button className='group hover:opacity-95 transition-opacity bg-[#34AADF] rounded-full py-1 w-full flex items-center justify-center gap-2' type="button">
                            <img className='h-10 group-hover:translate-x-2 group-hover:rotate-[360deg] duration-500 transition-transform' src={telegram} alt="Telegram" />
                            <div className="font-semibold text-white">Write Telegram</div>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Index
