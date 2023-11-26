import { useState } from 'react';
import { DraggableX } from '../../inc/DraggableX';
import { menuItemsData } from '../../inc/menuItemsData';
import { Icons } from './Icons';
import ServiceList from './ServiceList';

const Services = () => {
  const [service, setService] = useState(0);
  return (
    <section className='bg-active-gray px-8 py-20'>
      <div className="container">
        <div className="mb-6 md:mb-10">
          <h2>Services</h2>
        </div>
        <DraggableX>
          <div className="flex gap-2 mb-4 md:mb-6">
            {
              menuItemsData[0].submenu?.map((menu, index) => {
                let isActiveMenu = '';
                let isActiveIcon = '';
                if (service === index) {
                  isActiveMenu = 'bg-regal-blue text-white hover:text-active-gray';
                  isActiveIcon = 'text-white group-hover:translate-x-1';
                } else {
                  isActiveMenu = 'bg-white text-regal-black hover:text-regal-blue';
                  isActiveIcon = 'text-black group-hover:translate-x-1';
                }
                return (
                  <button type='button' onClick={() => setService(index)} key={menu.id} className={`${isActiveMenu} group rounded-xl px-4 pt-4 pb-2 min-w-max`}>
                    <div className="flex justify-between items-center mb-2">
                      <Icons customClass={`${isActiveIcon} transition-transform w-4 h-4 ssm:w-6 ssm:h-6 lg:w-8 lg:h-8`} id={menu.serviceIcon} />
                      <div className="ssm:text-2xl">21</div>
                    </div>
                    <div className="font-semibold text-sm ssm:text-base">{menu.title}</div>
                  </button>
                )
              })
            }
          </div>
        </DraggableX>
        <ServiceList />

      </div>

    </section>
  )
}

export default Services
