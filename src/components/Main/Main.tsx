import ButtonRounded from '../ButtonRounded';
import arrowRight from '../../assets/images/icons/arrow-right-icon.svg';
import arrowRightSnake from '../../assets/images/icons/arrow-right-1-icon.svg';
import arrowRightSnake520 from '../../assets/images/icons/arrow-right-1-icon-520.svg';
import arrowRightSnake1024 from '../../assets/images/icons/arrow-right-1-icon-1024.svg';
import arrowLeftSnake from '../../assets/images/icons/arrow-left-1-icon.svg';
import arrowLeftSnake520 from '../../assets/images/icons/arrow-left-1-icon-520.svg';
import arrowLeftSnake1024 from '../../assets/images/icons/arrow-left-1-icon-1024.svg';
import arrowDownSnake from '../../assets/images/icons/arrow-down-1-icon.svg';
import arrowDownSnake768 from '../../assets/images/icons/arrow-down-1-icon-768.svg';
import company1 from '../../assets/images/icons/logo-company1-icon.svg';
import company2 from '../../assets/images/icons/logo-company2-icon.svg';
import company3 from '../../assets/images/icons/logo-company3-icon.svg';
import user1 from '../../assets/images/avatars/user1-avatar.png';
import user2 from '../../assets/images/avatars/user2-avatar.png';
import user3 from '../../assets/images/avatars/user3-avatar.png';

const Main = () => {
    return (
        <main className='my-16'>
            <div className="py-10 lg:py-28">
                <div className="px-20 text-center mb-6 md:mb-10 lg:px-16">
                    <h1 className='font-semibold text-3xl mb-7 ssm:text-4xl md:text-5xl lg:text-6xl lg:mb-10'>Services<br className='lg:hidden' /> for the <span className='text-regal-blue'>promotion</span> of <span className='text-regal-blue'>crypto</span> projects</h1>
                    <div className="md:text-2xl lg:px-36">We do not hide our prices because they are the best on the market.</div>
                </div>
                <div className="flex justify-center items-center mb-1 relative z-20">
                    <ButtonRounded rootClass='group hover:text-active-gray pl-6 py-1 pr-1 bg-regal-blue flex items-center gap-4 text-white text-lg font-medium'>
                        See services
                        <div className="bg-white group-hover:bg-active-gray flex justify-center items-center w-10 h-10 rounded-full">
                            <img className='group-hover:translate-x-1 transition-transform' src={arrowRight} alt="" />
                        </div>
                    </ButtonRounded>
                </div>
                <div className="relative z-10 md:-top-24 lg:-top-36">
                    <div className="">
                        <div className="mx-4 ssm:mt-8 ssm:w-[240px]">
                            <div className="relative left-6 ssm:left-12 mb-2 ssm:mb-6">
                                <picture>
                                    <source media="(max-width: 519px)" srcSet={arrowLeftSnake} sizes="arrow" />
                                    <source media="(min-width: 520px)" srcSet={arrowLeftSnake520} sizes="arrow" />
                                    <source media="(min-width: 1024px)" srcSet={arrowLeftSnake1024} sizes="arrow" />
                                    <img className='' src={arrowLeftSnake} alt="arrow" />
                                </picture>
                            </div>
                            <div className="bg-white rounded-xl p-4 inline-block ssm:block shadow-md">
                                <h2 className='font-semibold text-sm ssm:text-base mb-2'>Project in your portfolio</h2>
                                <div className="flex gap-2 justify-between items-center text-xs mb-1">
                                    <img className='shadow-md w-6 h-6 rounded-full md:w-8 md:h-8' src={company1} alt="Company name" />
                                    <div className="flex-auto">Company name</div>
                                </div>
                                <div className="flex gap-2 justify-between items-center text-xs mb-1">
                                    <img className='shadow-md w-6 h-6 rounded-full md:w-8 md:h-8' src={company2} alt="Company name" />
                                    <div className="flex-auto">Company name</div>
                                </div>
                                <div className="flex gap-2 justify-between items-center text-xs mb-1">
                                    <img className='shadow-md w-6 h-6 rounded-full md:w-8 md:h-8' src={company3} alt="Company name" />
                                    <div className="flex-auto">Company name</div>
                                </div>
                                <div className="text-regal-blue font-semibold text-sm ssm:text-base mt-1">+ 1000</div>
                            </div>
                        </div>
                        <div className="mx-4 ssm:-top-4 absolute right-0 top-28 ssm:w-[240px]">
                            <div className="relative left-20 ssm:left-28 md:left-14 mb-2 ssm:mb-6">
                               <picture>
                                    <source media="(max-width: 519px)" srcSet={arrowRightSnake} sizes="arrow" />
                                    <source media="(min-width: 520px)" srcSet={arrowRightSnake520} sizes="arrow" />
                                    <source media="(min-width: 1024px)" srcSet={arrowRightSnake1024} sizes="arrow" />
                                    <img className='' src={arrowRightSnake} alt="arrow" />
                                </picture>
                            </div>
                            <div className="bg-white rounded-xl p-4 inline-block ssm:block shadow-md">
                                <h2 className='font-semibold text-sm ssm:text-base mb-2'>Influencers with us</h2>
                                <div className="flex gap-2 justify-between items-center text-xs mb-1">
                                    <img className='shadow-md w-6 h-6 ssm:w-8 ssm:h-8 rounded-full' src={user1} alt="BitBoy Crypto" />
                                    <div className="flex-auto">BitBoy Crypto</div>
                                    <div className="text-regal-blue font-semibold text-xs ssm:text-sm">4,45 m</div>
                                </div>
                                <div className="flex gap-2 justify-between items-center text-xs mb-1">
                                    <img className='shadow-md w-6 h-6 ssm:w-8 ssm:h-8 rounded-full' src={user2} alt="Jeffrey Barber" />
                                    <div className="flex-auto">Jeffrey Barber</div>
                                    <div className="text-regal-blue font-semibold text-xs ssm:text-sm">3,12 m</div>
                                </div>
                                <div className="flex gap-2 justify-between items-center text-xs mb-1">
                                    <img className='shadow-md w-6 h-6 ssm:w-8 ssm:h-8 rounded-full' src={user3} alt="Julia Hunt" />
                                    <div className="flex-auto">Julia Hunt</div>
                                    <div className="text-regal-blue font-semibold text-xs ssm:text-sm">1,68 m</div>
                                </div>
                                <div className="text-regal-blue font-semibold text-sm ssm:text-base mt-1 ssm:mt-2">+ 100</div>
                            </div>
                        </div>
                    </div>
                    <div className="px-10 ssm:px-8 relative top-16 ssm:flex ssm:ml-8 ssm:top-10 md:block md:max-w-sm md:left-56 md:-top-44 lg:max-w-md lg:left-66">
                        <div className="relative left-8 -top-2 ssm:static mr-6 md:relative md:left-16 md:mb-4">
                            <picture>
                                <source media="(min-width: 768px)" srcSet={arrowDownSnake768} sizes="arrow" />
                                <img className='right-10 -top-12' src={arrowDownSnake} alt="arrow" />
                            </picture>

                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-md ssm:flex-auto">
                            <h2 className='font-semibold text-sm ssm:text-base mb-2'>Attracted by our clients</h2>
                            <div className="flex items-end gap-2">
                                <div className="flex flex-col w-1/4">
                                    <div className="text-regal-blue font-semibold text-sm ssm:text-base text-center">$26 M</div>
                                    <div className="h-5 rounded-md bg-regal-green"></div>
                                    <div className=" text-regal-gray font-semibold text-xs text-center">2019</div>
                                </div>
                                <div className="flex flex-col w-1/4">
                                    <div className="text-regal-blue font-semibold text-sm ssm:text-base text-center">$43 M</div>
                                    <div className="h-11 rounded-md bg-regal-green"></div>
                                    <div className=" text-regal-gray font-semibold text-xs text-center">2020</div>
                                </div>
                                <div className="flex flex-col w-1/4">
                                    <div className="text-regal-blue font-semibold text-sm ssm:text-base text-center">$87 M</div>
                                    <div className="h-16 rounded-md bg-regal-green"></div>
                                    <div className=" text-regal-gray font-semibold text-xs text-center">2021</div>
                                </div>
                                <div className="flex flex-col w-1/4">
                                    <div className="text-regal-blue font-semibold text-sm ssm:text-base text-center">$100 M</div>
                                    <div className="h-20 rounded-md bg-regal-green"></div>
                                    <div className=" text-regal-gray font-semibold text-xs ssm:text-base text-center">2022</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Main
