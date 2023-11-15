import ButtonRounded from '../ButtonRounded';
import CartIcon from '../../assets/images/icons/cart-icon.svg?react';

type SliderProps = {
    service: number;
}

const Slider = ({service}:SliderProps) => {
  return (
     <div className="bg-white rounded-3xl min-w-[300px] ssm:min-w-[380px] lg:w-[460px]">
          <div className="flex justify-between items-center py-2 px-6">
            <h3>Plan - 3 months</h3>
            <div className="text-regal-blue flex flex-col items-end">
              <div className="text-medium text-[28px] ssm:text-[32px] md:text-[38px]">{service}</div>
              <div className="text-sm ssm:text-base">services</div>
            </div>
          </div>
          <div className="text-sm py-2 px-6 ssm:text-base">
            <p className="mb-2">Mid-level Twitter influencers - 150</p>
            <p className="mb-2">Top tier Twitter influencers - 50</p>
            <p className="mb-2">Telegram post and pinned message - 50 groups</p>
            <p className="mb-2">Moonboys and shillers on tg</p>
            <span className="text-regal-gray text-sm">+3</span>
          </div>
          <div className="border-t border-t-regal-gray">
            <div className="py-3 px-6 ssm:py-4 md:py-6 flex justify-between items-center">
              <div className="text-semibold text-xl ssm:text-2xl md:text-2xl">$ 4 999 <span className="text-regal-gray text-sm line-through ssm:text-base">$ 10 000</span></div>
              <ButtonRounded rootClass='px-5 py-2 ssm:px-6 ssm:py-3 bg-regal-green hover:bg-active-gray'>
                <CartIcon className="fill-white transition group-hover:translate-x-1" />
              </ButtonRounded>
            </div>
          </div>
        </div>
  )
}

export default Slider
