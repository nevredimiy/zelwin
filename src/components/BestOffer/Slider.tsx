import ButtonRoundedGreenCart from '../ButtonRoundedGreenCart';
import { SliderProps } from '../../typings/data';

const formatted = new Intl.NumberFormat("en-US", { maximumSignificantDigits: 1, style: "currency", currency: "USD" })

const Slider = ({ data }: SliderProps) => {
  return (
    <div className="bg-white rounded-3xl min-w-[300px] ssm:min-w-[380px] lg:w-[460px]">
      <div className="flex justify-between items-center py-2 px-6">
        <h3>{data.title}</h3>
        <div className="text-regal-blue flex flex-col items-end">
          <div className="text-medium text-[28px] ssm:text-[32px] md:text-[38px]">{data.countServices}</div>
          <div className="text-sm ssm:text-base">services</div>
        </div>
      </div>
      <ul className="text-sm py-2 px-6 ssm:text-base">
        {data.body.map((item, index) => {
          return <li key={index} className='mb-2'>{item}</li>
        })}
      </ul>
      <div className="text-regal-gray px-6 mb-2 text-sm">+3</div>
      <div className="border-t border-t-regal-gray">
        <div className="py-3 px-6 ssm:py-4 md:py-6 flex justify-between items-center">
          <div className="text-semibold text-xl ssm:text-2xl md:text-2xl">{formatted.format(data.newPrice)}<span className="text-regal-gray text-sm line-through ssm:text-base pl-2">{formatted.format(data.price)}</span></div>
          <ButtonRoundedGreenCart />
        </div>
      </div>
    </div>
  )
}

export default Slider
