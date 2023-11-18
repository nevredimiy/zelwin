import reasonIcon1 from '../../assets/images/reason/icon_1_grafik.svg';
import reasonIcon2 from '../../assets/images/reason/icon_2_mishen.svg';
import reasonIcon3 from '../../assets/images/reason/icon_3_raketa.svg';

const index = () => {
  return (
      <section className='bg-white px-8 py-20'>
          <div className="container">
              <div className="bg-regal-blue rounded-2xl p-4">
                  <div className="font-bold text-xl text-white pt-2 pb-4 ssm:font-semibold ssm:text-3xl lg:text-5xl xl:text-6xl">Why people choose us</div>
                  <div className="text-sm text-white pb-4 ssm:text-base">We’re experts in all things marketing. Business-to-business, cryptocurrency, NFT, and high-growth startup brands are our sweet spot. Discover how we can scale your business to new heights through our strategic services below:</div>
                  <div className="text-sm text-white pb-6 ssm:text-base">We’re experts in all things marketing. Business-to-business, cryptocurrency, NFT, and high-growth startup brands are our sweet spot. Discover how we can scale your business to new heights through our strategic services below:</div>
                  <div className="grid gap-2 lg:grid-cols-3">
                      <div className="bg-white rounded-2xl p-5 flex items-center gap-5 ssm:gap-7 lg:gap-4 lg:justify-center lg:flex-col xl:gap-8">
                          <img className='w-10 ssm:w-14 lg:w-16 xl:w-auto xl:h-24' src={reasonIcon1} alt="Reason 1" />
                          <div className=" lg:text-center text-sm ssm:text-base">Proven results from promoting NFTS, tokens and Crypto exchanges</div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 flex items-center gap-5 ssm:gap-7 lg:gap-4 lg:justify-center lg:flex-col xl:gap-8">
                          <img className='w-10 ssm:w-14 lg:w-16 xl:w-auto xl:h-24' src={reasonIcon2} alt="Reason 2" />
                          <div className=" lg:text-center text-sm ssm:text-base">Highly reputable team with years of crypto marketing experience, based in the UK</div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 flex items-center gap-5 ssm:gap-7 lg:gap-4 lg:justify-center lg:flex-col xl:gap-8 ">
                          <img className='w-10 ssm:w-14 lg:w-16 xl:w-auto xl:h-20' src={reasonIcon3} alt="Reason 3" />
                          <div className=" lg:text-center text-sm ssm:text-base">Quick and easy to get started with our team</div>
                    </div>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default index
