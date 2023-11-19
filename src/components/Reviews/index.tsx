import DraggableSlider from '../../inc/DraggableSlider';
import ikl from '../../assets/images/reviews/ikl.svg';
import ava from '../../assets/images/reviews/ava.png';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const index = () => {
  const arrowClass = 'text-regal-blue transition hover:text-white hover:stroke-regal-blue';
  const dottesClass = 'border-regal-blue';
  const dottesActiveClass = 'bg-regal-blue';

  return (
    <DraggableSlider title='What people are saying' arr={arr} arrowClass={arrowClass} dottesClass={dottesClass} dottesActiveClass={dottesActiveClass}>
      {arr.map((item, index) => {
      return  <div className="bg-white rounded-3xl p-6 min-w-[300px] ssm:min-w-[380px] lg:w-[460px]">
        <img className='mb-2' src={ikl} alt="" />
        <div className="text-sm mb-6">
          I highly recommend them. I’ve worced with many companies in the past and all of them came up short. Than compdny goes above and beyond to make sure their clients are taken care of.
        </div>
        <div className="flex gap-4 items-center">
          <img className='w-16' src={ava} alt="Face" />
          <div className="">
            <div className="font-semibold text-xs mb-1">Bit boy crypto</div>
            <div className="text-regal-gray text-xs">Crypto youtube influencer and business owner</div>
          </div>
        </div>
      </div>
      })}

    </DraggableSlider>
  )
}

export default index
