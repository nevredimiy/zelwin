import { useEffect, useRef } from 'react'
import chevron from '../../assets/images/faq/chevron.svg';

interface AccordionItemProps {
    data: {
        title: string;
        description: string;
    }
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ data, isOpen, onClick }: AccordionItemProps) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const currnetHeightRef = useRef('');
    useEffect(() => {
        if (itemRef.current) currnetHeightRef.current = 'h-['+itemRef.current.scrollHeight + 'px]';
    }, [itemRef])

    return (
        <div className="bg-active-gray rounded-2xl p-4 mb-2">
            <div onClick={() => onClick()} className="flex items-center justify-between cursor-pointer">
                <div className="lg:text-2xl">{data.title}</div>
                <div className='cursor-pointer p-2'><img className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`} src={chevron} alt="" /></div>
            </div>
            <div

                className={`${isOpen ? 'h-auto visible' : 'h-0 invisible'} transition-height`}>
                <div ref={itemRef} className={`text-xs ssm:text-sm`}>{data.description}</div>
            </div>

        </div>
    )
}

export default AccordionItem
