import binocularsIcon from '../../assets/images/media-new/binoculars.svg';
import imgArticle1 from '../../assets/images/media-new/image1.jpg';
import imgArticle2 from '../../assets/images/media-new/image2.jpg';
import imgArticle3 from '../../assets/images/media-new/image3.jpg';
import singEntrepreneur from '../../assets/images/media-new/singEntrepreneur.svg';
import ButtonRounded from '../ButtonRounded'

const index = () => {
    return (
        <section className='bg-white py-11 px-8'>
            <div className="container">
                <div className="flex items-center justify-between mb-4">
                    <h3>Media & News</h3>
                    <img className='w-[100] aspect-square ssm:w-[120px] md:w-[146px] lg:w-[140px]' src={binocularsIcon} alt="Media & News" />
                </div>
                <div className="grid md:grid-cols-2 md:gap-x-6 xl:grid-cols-3">
                    <div className="mb-8">
                        <img className='rounded-2xl object-cover w-full h-[200px] md:h-[250px] xl:h-[280px] mb-4' src={imgArticle1} alt="New 1" />
                        <div className="mb-4 lg:text-2xl">The First Successes of This Crypto Marketplace and Plans For the Future</div>
                        <div className="mb-5"><img src={singEntrepreneur} alt="Entrepreneur" /></div>
                    </div>
                    <div className="mb-8">
                        <img className='rounded-2xl object-cover w-full h-[200px] md:h-[250px] xl:h-[280px] mb-4' src={imgArticle2} alt="New 2" />
                        <div className="mb-4 lg:text-2xl">The First Successes of This Crypto Marketplace and Plans For the Future</div>
                        <div className="mb-5"><img src={singEntrepreneur} alt="Entrepreneur" /></div>
                    </div>
                    <div className="hide xl:block mb-8">
                        <img className='rounded-2xl object-cover w-full h-[200px] md:h-[250px] xl:h-[280px] mb-4' src={imgArticle3} alt="New 3" />
                        <div className="mb-4 lg:text-2xl">The First Successes of This Crypto Marketplace and Plans For the Future</div>
                        <div className="mb-5"><img src={singEntrepreneur} alt="Entrepreneur" /></div>
                    </div>
                </div>

                <ButtonRounded rootClass='border border-regal-blue px-10 py-1 block mx-auto transition group hover:bg-regal-blue'>
                    <div className="font-medium text-regal-blue transition group-hover:text-white">See all</div>
                </ButtonRounded>
            </div>
        </section>
    )
}

export default index
