import ButtonRounded from './ButtonRounded';
import CartIcon from '../assets/images/icons/cart-icon.svg?react';

const ButtonRoundedGreenCart = () => {
    return (
        <ButtonRounded rootClass='px-5 py-2 ssm:px-6 ssm:py-3 bg-regal-green border border-transporant transition group hover:bg-white hover:border-regal-green'>
            <CartIcon className="fill-white transition group-hover:fill-regal-green" />
        </ButtonRounded>
    )
}

export default ButtonRoundedGreenCart
