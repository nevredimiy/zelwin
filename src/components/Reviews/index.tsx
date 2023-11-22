
import DraggableSlider from '../../inc/DraggableSlider';

import { dataReviews } from './dataReviews';

import ItemReview from './ItemReview';

const Index = () => {


  const arrowClass = 'text-regal-blue transition hover:text-white hover:stroke-regal-blue';
  const dottesClass = 'border-regal-blue';
  const dottesActiveClass = 'bg-regal-blue';

   return (

    <DraggableSlider title='What people are saying' data={dataReviews} arrowClass={arrowClass} dottesClass={dottesClass} dottesActiveClass={dottesActiveClass}>
      {dataReviews.map((item, index) => {
      return <ItemReview key={index} item={item}  />
      })}
      </DraggableSlider>

  )
}

export default Index
