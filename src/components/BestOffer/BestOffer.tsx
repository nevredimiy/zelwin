import Slider from './Slider';
import DraggableSlider from '../../inc/DraggableSlider';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const BestOffer = () => {
  const sectionClass = 'bg-regal-blue';
  const arrowClass = 'text-white transition hover:stroke-regal-blue';
  const dottesClass = 'border-white';
  const dottesActiveClass = 'bg-white';

  return (
    <DraggableSlider sectionClass={sectionClass} title='Best Offers' titleClass='text-white' arr={arr} arrowClass={arrowClass} dottesClass={dottesClass} dottesActiveClass={dottesActiveClass}>
      {arr.map((item, index) => {
        return <Slider key={index} service={item} />
      })}
    </DraggableSlider>
  )
}

export default BestOffer
