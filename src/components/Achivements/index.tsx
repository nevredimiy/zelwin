import lamp from '../../assets/images/achivements/lamp.svg';
import ava from '../../assets/images/achivements/ava.svg';
import ButtonRoundedTransporant from '../ButtonRoundedTransporant';

const index = () => {
  return (
    <section className='bg-white py-20 px-8'>
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className=''>Some Of The Projects.<br /> We’ve Grown</h2>
          <img className='w-20 h-20 ssm:w-28 ssm:h-28 lg:w-36 lg:h-36' src={lamp} alt="Achevement" />
        </div>
        <div className="mb-8 grid gap-5 md:grid-cols-2">
          <div className="bg-light-blue rounded-2xl p-4">
            <div className="flex items-start justify-start gap-4 mb-4">
              <img className='w-14' src={ava} alt="Avatar" />
              <div className="">
                <div className="font-semibold text-2xl">AIIA</div>
                <div className="text-sm ssm:text-base">Predict Vision's AIIA educational platform </div>
              </div>
            </div>
            <ul role="list" className='text-sm ssm:text-base'>
              <li className='before:rounded-full before:w-2 before:h-2 before:bg-regal-blue before:inline-block before:mr-3'>NFT Play to Earn Marketing</li>
              <li className='before:rounded-full before:w-2 before:h-2 before:bg-regal-blue before:inline-block before:mr-3'>Influencer Marketing</li>
              <li className='before:rounded-full before:w-2 before:h-2 before:bg-regal-blue before:inline-block before:mr-3'>Influencer Marketing</li>
            </ul>
          </div>
           <div className="bg-light-blue rounded-2xl p-4">
            <div className="flex items-start justify-start gap-4 mb-4">
              <img className='w-14' src={ava} alt="Avatar" />
              <div className="">
                <div className="font-semibold text-2xl">AIIA</div>
                <div className="text-sm ssm:text-base">Predict Vision's AIIA educational platform </div>
              </div>
            </div>
            <ul role="list" className='text-sm ssm:text-base'>
              <li className='before:rounded-full before:w-2 before:h-2 before:bg-regal-blue before:inline-block before:mr-3'>NFT Play to Earn Marketing</li>
              <li className='before:rounded-full before:w-2 before:h-2 before:bg-regal-blue before:inline-block before:mr-3'>Influencer Marketing</li>
              <li className='before:rounded-full before:w-2 before:h-2 before:bg-regal-blue before:inline-block before:mr-3'>Influencer Marketing</li>
            </ul>
          </div>
           <div className="bg-light-blue rounded-2xl p-4">
            <div className="flex items-start justify-start gap-4 mb-4">
              <img className='w-14 lg:w-20' src={ava} alt="Avatar" />
              <div className="">
                <div className="font-semibold text-2xl">AIIA</div>
                <div className="text-sm ssm:text-base">Predict Vision's AIIA educational platform </div>
              </div>
            </div>
            <ul role="list" className='text-sm ssm:text-base'>
              <li className='before:rounded-full before:w-2 before:h-2 before:bg-regal-blue before:inline-block before:mr-3'>NFT Play to Earn Marketing</li>
              <li className='before:rounded-full before:w-2 before:h-2 before:bg-regal-blue before:inline-block before:mr-3'>Influencer Marketing</li>
              <li className='before:rounded-full before:w-2 before:h-2 before:bg-regal-blue before:inline-block before:mr-3'>Influencer Marketing</li>
            </ul>
          </div>
          <div className="hidden md:block bg-light-blue rounded-2xl p-4">
            <div className="flex items-start justify-start gap-4 mb-4">
              <img className='w-14 lg:w-20' src={ava} alt="Avatar" />
              <div className="">
                <div className="font-semibold text-2xl">AIIA</div>
                <div className="text-sm ssm:text-base">Predict Vision's AIIA educational platform </div>
              </div>
            </div>
            <ul role="list" className='text-sm ssm:text-base'>
              <li className='before:rounded-full before:w-2 before:h-2 before:bg-regal-blue before:inline-block before:mr-3'>NFT Play to Earn Marketing</li>
              <li className='before:rounded-full before:w-2 before:h-2 before:bg-regal-blue before:inline-block before:mr-3'>Influencer Marketing</li>
              <li className='before:rounded-full before:w-2 before:h-2 before:bg-regal-blue before:inline-block before:mr-3'>Influencer Marketing</li>
            </ul>
          </div>
        </div>
        <ButtonRoundedTransporant />
      </div>
    </section>
  )
}

export default index
