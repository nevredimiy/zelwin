import { useState } from 'react';
import { DraggableX } from '../../inc/DraggableX';
import { menuItemsData } from '../../inc/menuItemsData';
import {SocialMedia, IdoUno, Development} from './serviceIcons/Icons'


const Services = () => {
  const [service, setService] = useState(0);
  return (
    <section className='bg-active-gray px-8 py-20'>
      <SocialMedia className='stroke-black' />
      <DraggableX>
        <div className="flex gap-2">
          {
            menuItemsData[0].submenu?.map((menu, index) => {

              let isActiveMenu = '';

              if (service === index) {
                isActiveMenu = 'bg-regal-blue text-white';

              } else {
                isActiveMenu = 'bg-white text-regal-gray';

              }

              return (
                <button type='button' onClick={() => setService(index)} key={menu.id} className={`${isActiveMenu} rounded-xl px-4 pt-4 pb-2 min-w-max`}>
                  <div className="flex justify-between items-center mb-2">
                    {menu.serviceIcon}

                    <div className="">21</div>
                  </div>
                  <div className="font-semibold text-sm">{menu.title}</div>
                </button>
              )

            })
          }

        </div>
      </DraggableX>
    </section>
  )
}

export default Services
