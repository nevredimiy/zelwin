import React from 'react'

const SirviceItem = () => {
  return (
   <div  className={`${activeMenu} rounded-xl px-4 pt-4 pb-2 min-w-max`}>
                  <div className="flex justify-between items-center mb-2">
                    <img className='w-4 h-4' src={menu.serviceIcon} alt={menu.title} />
                    <div className="">21</div>
                  </div>
                  <div className="font-semibold text-sm">{menu.title}</div>
                </div>
  )
}

export default SirviceItem
