import ButtonRounded from '../ButtonRounded';
import arrowRight from '../../assets/images/icons/arrow-right-icon.svg';
import company1 from '../../assets/images/icons/logo-company1-icon.svg';
import company2 from '../../assets/images/icons/logo-company2-icon.svg';
import company3 from '../../assets/images/icons/logo-company3-icon.svg';
import user1 from '../../assets/images/avatars/user1-avatar.png';
import user2 from '../../assets/images/avatars/user2-avatar.png';
import user3 from '../../assets/images/avatars/user3-avatar.png';
import BestOffer from '../BestOffer/BestOffer'

const Main = () => {
    return (
        <main className='my-16'>
            <section className='mb-16'>
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
                    <div className="flex flex-wrap relative md:grid md:grid-cols-2">
                        <div className="mx-4 w-[209px] ssm:mt-8 ssm:w-60 xl:w-80">
                            <div className="relative left-6 ssm:left-12 mb-2 ssm:mb-6">
                                <svg className='ssm:w-[122px] ssm:h-[57px] md:w-[146px] md:h-[68px] lg:w-[179px] lg:h-[83px] stroke-2 ssm:stroke-1' width="55" height="27" viewBox="0 0 55 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M54 1C51.9174 6.62401 48.3463 11.9236 42.1462 13.3787C37.5416 14.4594 38.0378 7.49723 37.1681 4.72271C33.86 -5.83097 10.9443 14.7174 7.76906 18.1305C7.18537 18.7579 2.18632 24.9674 2.51682 24.9952C3.31112 25.0619 7.61988 23.8252 6.50471 24.354C4.85727 25.1352 2.98433 25.1901 1.30851 25.9847C0.475659 26.3796 1.60177 19.0122 1.52161 17.9684" stroke="#3861FB" strokeWidth="current" strokeLinecap="round" />
                                </svg>
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
                        <div className="mx-4 w-[200px] ssm:-top-4 absolute right-0 top-28
                         ssm:w-60 xl:w-80 md:top-4 lg:static lg:col-start-3 lg:row-start-1">
                            <div className="relative left-20 ssm:left-28 md:left-14 mb-2 ssm:mb-6">
                                <svg className='ssm:w-[94px] ssm:h-[45px] lg:w-[144px] lg:h-[70px] stroke-2 ssm:stroke-1' width="81" height="40" viewBox="0 0 81 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6.23951C12.9749 14.1237 27.3065 16.5737 41.5902 14.478C43.2186 14.239 44.9024 13.9036 46.5802 13.4649M46.5802 13.4649C49.9711 12.5783 53.3376 11.2695 56.174 9.48215C58.0965 8.27067 61.3237 5.5606 60.792 3.09133C59.9093 -1.00857 53.6749 1.97802 51.4917 3.17025C48.4284 4.84316 46.2834 9.60056 46.5802 13.4649ZM46.5802 13.4649C46.6658 14.5788 46.9542 15.6185 47.482 16.4887C51.8605 23.7083 61.9359 28.4893 69.2158 32.3281C72.1224 33.8608 75.4287 34.8457 78.2249 36.4813C79.3098 37.1159 77.4986 34.2445 77.3106 33.6496C76.2016 30.1396 76.0515 30.105 77.8706 33.69C78.1224 34.1864 80.1577 37.5246 79.9902 37.801C79.8733 37.994 72.5438 38.7005 71.732 39" stroke="#3861FB" strokeWidth="2" strokeLinecap="round" />
                                </svg>
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
                        <div className="
                        col-span-2 lg:col-span-1 lg:col-start-2 lg:max-w-none
                        px-10 ssm:px-8 relative top-16 ssm:flex ssm:ml-8 ssm:top-10 lg:min-w-fit
                        md:block md:max-w-sm md:left-56 md:-top-44 lg:-left-20 lg:top-44 lg:ml-0 lg:p-0
                        xl:-left-24
                        ">
                            <div className="relative left-8 -top-2 ssm:static mr-6 md:relative md:left-16 md:mb-4">
                                <svg className='ssm:w-[38px] ssm:h-[109px] md:w-[53px] md:h-[154px] lg:w-[42px] lg:h-[122px] stroke-2 ssm:stroke-1' width="35" height="96" viewBox="0 0 35 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1C2.47724 25.0498 4.72615 41.4045 17.4493 66.6344C20.5372 72.7578 25.2351 82.9667 29.3515 87.2351C31.6897 89.6595 33.5963 94.0952 32.3425 88.0674C32.3195 87.957 32.2964 87.8454 32.2731 87.7327M32.2731 87.7327C31.2504 82.7812 29.9342 75.7271 27.9547 70.792C27.3932 69.3922 30.1974 80.1002 32.2731 87.7327ZM32.2731 87.7327C32.9005 90.0397 33.4613 92.0657 33.8426 93.3914C35.9427 100.694 16.3926 80.9431 13.0896 77.7986" stroke="#3861FB" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-md ssm:flex-auto lg:w-full">
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
            </div>
            </section>
            <BestOffer />
        </main>
    )
}

export default Main
