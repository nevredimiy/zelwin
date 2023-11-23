import { useState } from 'react';
import ikl from '../../assets/images/reviews/ikl.svg';
import Modal from '../Modal';

interface ItemReviesProps {
    item: {
        body: string;
        avatar: string;
        title: string;
        description: string;
    };
}

const ItemReview = ({ item }: ItemReviesProps) => {
    const [isModal, setIsModal] = useState(false);

    return (
        <>
            <div onClick={() => setIsModal(true)} className="bg-white rounded-3xl p-6 min-w-[300px] ssm:min-w-[380px] lg:w-[460px]">
                <img className='mb-2' src={ikl} alt="" />
                <div className="text-sm mb-6 line-clamp-4">
                    {item.body}
                </div>
                <div className="flex gap-4 items-center">
                    <img className='w-16' src={item.avatar} alt="Face" />
                    <div className="">
                        <div className="font-semibold text-xs mb-1">{item.title}</div>
                        <div className="text-regal-gray text-xs">{item.description}</div>
                    </div>
                </div>
            </div>
            {
                isModal && <Modal setIsActive={setIsModal}>
                    <div className="bg-white rounded-3xl p-6 min-w-[300px] ssm:min-w-[380px] lg:w-[460px]">
                        <img className='mb-2' src={ikl} alt="" />
                        <div className="text-sm mb-6">
                            {item.body}
                        </div>
                        <div className="flex gap-4 items-center">
                            <img className='w-16' src={item.avatar} alt="Face" />
                            <div className="">
                                <div className="font-semibold text-xs mb-1">{item.title}</div>
                                <div className="text-regal-gray text-xs">{item.description}</div>
                            </div>
                        </div>
                    </div>
                </Modal>
            }
        </>
    )
}

export default ItemReview
