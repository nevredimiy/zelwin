import Slider from './Slider';
import arrowRightSlider from '../../assets/images/icons/arrow-right-icon.svg';
import {DraggableX}  from '../../inc/DraggableX'

const arr = [4, 56, 112, 56, 112];

const BestOffer = () => {
  return (
    <section className="bg-regal-blue pt-16 pb-20 overflow-hidden">
      <div className="container px-8">
        <div className="mb-6 ssm:flex justify-between">
          <h2 className="text-white">Best Offers</h2>
          <div className="hidden ssm:flex gap-4">
            <img className='rotate-180' src={arrowRightSlider} alt="Left" />
            <img src={arrowRightSlider} alt="Right" />
          </div>
        </div>
        <DraggableX>
        <div className="flex gap-5">
          {arr.map((item, index) => {
            return <Slider key={index} service={item} />
          })}
          </div>
          </DraggableX>
      </div>

    </section>
  )
}

export default BestOffer
