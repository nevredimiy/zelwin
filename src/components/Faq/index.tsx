import { useState } from 'react';

import question from '../../assets/images/faq/question.svg';
import telegram from '../../assets/images/socIcons/telegram.svg';
import { dataAccordion } from './data';
import AccordionItem from './AccordionItem';

const Index = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const [openId, setOpenId] = useState<number | null>(null);
    return (
        <section className="bg-white px-8 py-20">
            <div className="container">
                <div className="flex justify-between items-center mb-6">
                    <h2>FAQ</h2>
                    <img className='w-20' src={question} alt="FAQ" />
                </div>
                <div className="mb-6">
                    {dataAccordion.map((item, index) => {
                        return <AccordionItem key={index} data={item} onClick={() => index === openId ? setOpenId(null) : setOpenId(index)} isOpen={index === openId} />
                    })}
                </div>
                <div className="bg-regal-blue rounded-2xl p-4">
                    <div className="font-semibold text-xl text-white mb-3">Get a free consultation</div>
                    <div className="text-sm text-white mb-4">Please complete the form below</div>
                    <form className='' action="">
                        <select className='w-full mb-2 rounded-lg py-3 px-2' title='themes' name="themes" id="themes">
                            <option value="theme 1">Theme 1</option>
                            <option value="theme 2">Theme 2</option>
                            <option value="theme 3">Theme 3</option>
                            <option value="theme 4">Theme 4</option>
                        </select>
                        <input className='w-full mb-2 rounded-lg py-3 px-2' type="text" placeholder='Your Email' />
                        <input className='w-full mb-4 rounded-lg py-3 px-2' type="text" placeholder='Write whatever...' />
                        <button className='rounded-full bg-regal-black py-3 w-full font-semibold text-white' type="button">Send</button>
                    </form>
                    <div className="w-full text-center text-white py-2">or</div>
                    <button className='bg-[#34AADF] rounded-full py-1 w-full flex items-center justify-center gap-2' type="button">
                        <img className='h-10' src={telegram} alt="Telegram" />
                        <div className="font-semibold text-white">Write Telegram</div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Index
