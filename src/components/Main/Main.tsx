import Hero from '../Hero';
import BestOffer from '../BestOffer/BestOffer';
import Partners from '../Partners';
import Services from '../Services';
import MediaNews from '../MediaNews';
import Reason from '../Reason';
import Ambassador from '../Ambassador';
import Meet from '../Meet';
import Achivements from '../Achivements';
import Reviews from '../Reviews';

const Main = () => {
    return (
        <main className='my-16'>
            <Hero />
            <BestOffer />
            <Partners />
            <Services />
            <MediaNews />
            <Reason />
            <Ambassador />
            <Meet />
            <Achivements />
            <Reviews />
        </main>
    )
}

export default Main
