import Slider from './Slider';
import DraggableSlider from '../../inc/DraggableSlider';
import {dataBestOffer} from './dataBestOffer'

const BestOffer = () => {
  const sectionClass = 'bg-regal-blue';
  const arrowClass = 'text-white transition hover:stroke-regal-blue';
  const dottesClass = 'border-white';
  const dottesActiveClass = 'bg-white';

  return (
    <DraggableSlider sectionClass={sectionClass} title='Best Offers' titleClass='text-white' data={dataBestOffer} arrowClass={arrowClass} dottesClass={dottesClass} dottesActiveClass={dottesActiveClass}>
      {dataBestOffer.map((item, index) => {
        return <Slider key={index} data={item} />
      })}
    </DraggableSlider>
  )
}

export default BestOffer
