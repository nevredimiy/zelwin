import ButtonRoundedGreenCart from '../ButtonRoundedGreenCart';
interface serviceItemProps {
  dataItem: {
    label?: string;
    img?: string;
    title: string;
    desc?: string;
    price?: number;
    oldPrice?: number;
  }
}

const ServiceItem = ({ dataItem }: serviceItemProps) => {

  const labeClass = (label:string | undefined) => {
    if (label === "New") return "bg-regal-green";
    if (label === "Hot") return "bg-regal-orange";
    if (label === "Special Offer") return "bg-regal-sky";
    return "bg-regal-gray";
  }
     const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });

  return (
    <div className="bg-white rounded-2xl md:flex md:flex-col">
      <div className="p-4 md:flex-auto relative">
        {
          dataItem.label &&
          <div className={`${labeClass(dataItem.label)} rounded-full px-6 py-1 mb-5 mx-4 absolute top-4 z-10`}>
            <div className="text-white">{dataItem.label}</div>
          </div>
        }
        {dataItem.img && <img className='w-full rounded-2xl mb-5 mt-4' src={dataItem.img} alt={dataItem.title} />}
        <div className={`${dataItem.label && 'pt-12'} mx-4`}>
          <div className="font-semibold mb-6">{dataItem.title}</div>
          {dataItem.desc && <div className="mb-8">{dataItem.desc}</div>}
          <a className='text-regal-blue font-bold transition hover:text-regal-green' href="">View more</a>
        </div>
      </div>
      <div className="border-t border-regale-gray">
        <div className="flex items-center justify-between p-4 ssm:p-6">
          {
            dataItem.price
              ? <div className="font-semibold">{formatter.format(dataItem.price)}
                {dataItem.oldPrice && <span className='font-normal ml-4 line-through text-regal-gray'>{formatter.format(dataItem.oldPrice)}</span>}
              </div>
              : <div className="font-semibold text-regal-gray">need detail</div>
          }
          <ButtonRoundedGreenCart />
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
