import Nikolay from '../../assets/images/meet-the-our-team/Frame1.jpg';
import Svetlana from '../../assets/images/meet-the-our-team/Frame2.jpg';
import Stepan from '../../assets/images/meet-the-our-team/Frame3.jpg';
import Slava from '../../assets/images/meet-the-our-team/Frame4.jpg';
import Sasha from '../../assets/images/meet-the-our-team/Frame5.jpg';
import Snejanan from '../../assets/images/meet-the-our-team/Frame6.jpg';
import inIcon from '../../assets/images/socIcons/in.svg';
import instagramIcon from '../../assets/images/socIcons/instagram.svg';
import telegramIcon from '../../assets/images/socIcons/telegram.svg';
import ButtonRoundedTransporant from '../ButtonRoundedTransporant';

const index = () => {
    return (
        <section className='px-8 py-20'>
            <div className="container">
                <h2 className='mb-6'>Meet the Our Team</h2>
                <div className="grid gap-5 mb-8 ssm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white rounded-2xl pb-4">
                        <img className='rounded-2xl mb-4 h-[200px] md:h-[240px] object-cover w-full object-top grayscale' src={Nikolay} alt="Nikolay" />
                        <div className="px-4">
                            <div className="font-semibold">Shkilev Nikolay</div>
                            <div className="mb-4">CEO</div>
                            <div className="flex items-center gap-2">
                                <img src={inIcon} alt="In" />
                                <img src={instagramIcon} alt="Instagram" />
                                <img src={telegramIcon} alt="Telegram" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl pb-4">
                        <img className='rounded-2xl mb-4 h-[200px] md:h-[240px] object-cover w-full object-center grayscale' src={Svetlana} alt="Svetlana" />
                        <div className="px-4">
                            <div className="font-semibold">Shkilev Svetlana</div>
                            <div className="mb-4">CEO</div>
                            <div className="flex items-center gap-2">
                                <img src={inIcon} alt="In" />
                                <img src={instagramIcon} alt="Instagram" />
                                <img src={telegramIcon} alt="Telegram" />
                            </div>
                        </div>
                    </div>
                     <div className="hidden lg:block bg-white rounded-2xl pb-4">
                        <img className='rounded-2xl mb-4 h-[200px] md:h-[240px] object-cover w-full object-center grayscale' src={Stepan} alt="Stepan" />
                        <div className="px-4">
                            <div className="font-semibold">Shkilev Stepan</div>
                            <div className="mb-4">CEO</div>
                            <div className="flex items-center gap-2">
                                <img src={inIcon} alt="In" />
                                <img src={instagramIcon} alt="Instagram" />
                                <img src={telegramIcon} alt="Telegram" />
                            </div>
                        </div>
                    </div>
                     <div className="hidden xl:block bg-white rounded-2xl pb-4">
                        <img className='rounded-2xl mb-4 h-[200px] md:h-[240px] object-cover w-full object-center grayscale' src={Slava} alt="Slava" />
                        <div className="px-4">
                            <div className="font-semibold">Shkilev Slava</div>
                            <div className="mb-4">CEO</div>
                            <div className="flex items-center gap-2">
                                <img src={inIcon} alt="In" />
                                <img src={instagramIcon} alt="Instagram" />
                                <img src={telegramIcon} alt="Telegram" />
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:block bg-white rounded-2xl pb-4">
                        <img className='rounded-2xl mb-4 h-[200px] md:h-[240px] object-cover w-full object-center grayscale' src={Sasha} alt="Sasha" />
                        <div className="px-4">
                            <div className="font-semibold">Shkilev Sasha</div>
                            <div className="mb-4">CEO</div>
                            <div className="flex items-center gap-2">
                                <img src={inIcon} alt="In" />
                                <img src={instagramIcon} alt="Instagram" />
                                <img src={telegramIcon} alt="Telegram" />
                            </div>
                        </div>
                    </div>
                     <div className="hidden xl:block bg-white rounded-2xl pb-4">
                        <img className='rounded-2xl mb-4 h-[200px] md:h-[240px] object-cover w-full object-center grayscale' src={Snejanan} alt="Snejanan" />
                        <div className="px-4">
                            <div className="font-semibold">Shkilev Snejanan</div>
                            <div className="mb-4">CEO</div>
                            <div className="flex items-center gap-2">
                                <img src={inIcon} alt="In" />
                                <img src={instagramIcon} alt="Instagram" />
                                <img src={telegramIcon} alt="Telegram" />
                            </div>
                        </div>
                    </div>
                </div>
                <ButtonRoundedTransporant />
            </div>
        </section>
    )
}

export default index
