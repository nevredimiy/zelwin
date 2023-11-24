import ArrowRight from '../../assets/images/hero/arrow-right-icon.svg?react';
import ArrowLeftSnake from '../../assets/images/hero/arrow-left-snake-icon.svg?react';
import ArrowRightSnake from '../../assets/images/hero/arrow-right-snake-icon.svg?react';
import ArrowDownSnake from '../../assets/images/hero/arrow-down-snake-icon.svg?react';
import company1 from '../../assets/images/hero/logo-company1-icon.svg';
import company2 from '../../assets/images/hero/logo-company2-icon.svg';
import company3 from '../../assets/images/hero/logo-company3-icon.svg';
import user1 from '../../assets/images/avatars/user1-avatar.png';
import user2 from '../../assets/images/avatars/user2-avatar.png';
import user3 from '../../assets/images/avatars/user3-avatar.png';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <section className='py-10 lg:py-28 mb-16 overflow-hidden md:-mb-60 lg:-mb-20'>
            <div className="container">
                <div className="px-20 text-center mb-6 md:mb-10 lg:px-16">
                    <h1 className='font-semibold text-3xl mb-7 ssm:text-4xl md:text-5xl lg:text-6xl lg:mb-10'>Services<br className='lg:hidden' /> for the <span className='text-regal-blue'>promotion</span> of <span className='text-regal-blue'>crypto</span> projects</h1>
                    <div className="md:text-2xl lg:px-36">We do not hide our prices because they are the best on the market.</div>
                </div>
                <div className="flex justify-center items-center mb-1 relative z-20">
                    <Link to='/services' className='border border-transparent transition hover:border-regal-blue hover:bg-white hover:text-regal-blue group rounded-full pl-6 py-1 pr-1 bg-regal-blue flex items-center gap-4 text-white text-lg font-medium'>
                        See services
                        <div className="border border-regal-blue bg-white flex justify-center items-center w-10 h-10 rounded-full">
                            <ArrowRight className='fill-regal-blue' />
                        </div>
                    </Link>
                </div>
                <div className="grid relative px-3 ssm:grid-cols-2 lg:grid-cols-[280px_minmax(400px,_1fr)_280px]">
                    <div className="ssm:relative ssm:top-6 md:-top-16 lg:-top-28 group">
                        <div className="relative left-6 ssm:left-12 mb-2 ssm:mb-6 group-hover:-translate-x-2 transition-transform duration-500">
                            <ArrowLeftSnake className='ssm:w-36 ssm:h-14 md:h-16 lg:w-48 lg:h-24 stroke-2 ssm:stroke-1' />
                        </div>
                        <div className="bg-white rounded-xl p-4 inline-block shadow-md ssm:min-w-[240px] group-hover:-translate-y-2 transition-transform duration-500">
                            <h2 className='font-semibold text-sm ssm:text-base mb-2'>Project in your portfolio</h2>
                            <div className="flex gap-2 justify-between items-center text-xs mb-1">
                                <img className='shadow-customShadow w-6 h-6 ssm:w-8 ssm:h-8 p-1 rounded-full md:w-8 md:h-8' src={company1} alt="Company name" />
                                <div className="flex-auto">Company name</div>
                            </div>
                            <div className="flex gap-2 justify-between items-center text-xs mb-1">
                                <img className='shadow-customShadow w-6 h-6 ssm:w-8 ssm:h-8 p-1 rounded-full md:w-8 md:h-8' src={company2} alt="Company name" />
                                <div className="flex-auto">Company name</div>
                            </div>
                            <div className="flex gap-2 justify-between items-center text-xs mb-1">
                                <img className='shadow-customShadow w-6 h-6 ssm:w-8 ssm:h-8 p-1 rounded-full md:w-8 md:h-8' src={company3} alt="Company name" />
                                <div className="flex-auto">Company name</div>
                            </div>
                            <div className="text-regal-blue font-semibold text-sm ssm:text-base mt-1">+ 1000</div>
                        </div>
                    </div>
                    <div className="absolute top-28 z-10 right-3 ssm:-top-12 md:-top-16 lg:-top-24 group">
                        <div className="relative left-20 ssm:left-24 md:left-14 lg:-left-10 mb-2 lg:mb-16 ssm:mb-6 group-hover:-translate-x-2 transition-transform duration-500">
                           <ArrowRightSnake className='ssm:w-[90px] ssm:h-[45px] lg:w-36 lg:h-16' />
                        </div>
                        <div className="bg-white rounded-xl p-4 inline-block ssm:block shadow-md ssm:min-w-[240px] group-hover:-translate-y-2 transition-transform duration-500">
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
                    <div className="mt-14 px-8 ssm:px-0 ssm:col-span-2 lg:col-span-1 ssm:flex
                    ssm:justify-end md:block md:relative md:-top-72 md:left-1/3 lg:left-0
                    lg:w-full lg:-top-20 lg:flex lg:flex-col lg:items-center group">
                        <div className="relative left-8 -top-2 ssm:static mr-6 md:relative md:left-16 md:mb-4 lg:-left-40 group-hover:-translate-x-2 transition-transform duration-500">
                           <ArrowDownSnake className='w-8 h-24 ssm:w-9 ssm:h-28 md:w-14 md:h-40' />
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-xl ssm:w-2/3 md:w-[344px] md:max-w-sm lg:max-w-xl lg:w-full group-hover:-translate-y-2 transition-transform duration-500">
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
                                    <div className="text-regal-gray font-semibold text-xs text-center">2020</div>
                                </div>
                                <div className="flex flex-col w-1/4">
                                    <div className="text-regal-blue font-semibold text-sm ssm:text-base text-center">$87 M</div>
                                    <div className="h-16 rounded-md bg-regal-green"></div>
                                    <div className="text-regal-gray font-semibold text-xs text-center">2021</div>
                                </div>
                                <div className="flex flex-col w-1/4">
                                    <div className="text-regal-blue font-semibold text-sm ssm:text-base text-center">$100 M</div>
                                    <div className="h-20 rounded-md bg-regal-green"></div>
                                    <div className="text-regal-gray font-semibold text-xs text-center">2022</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index
