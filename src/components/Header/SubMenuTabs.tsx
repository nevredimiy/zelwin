const SubMenuTabs = () => {
  return (
    <ul className={`
        text-regal-black p-6 md:flex md:overflow-hidden
        lg:flex-col lg:max-h-screen lg:border-r lg:max-w-xs lg:w-fit
        md:relative md:whitespace-nowrap md:select-none md:cursor-pointer lg:cursor-auto lg:scale-100
        `}>
        {
          isShow && sizeScreen < 768 &&
          <li>
            <button type='button' onClick={() => setIsShowDropdown(false)} className="flex items-center gap-2 text-base mb-6">
              <img className="rotate-180" src={chewronIconRight} alt="Back" />
              <span>Back</span>
            </button>
          </li>
        }
        {submenu.map((submenuItems, index) => (
          <>
            <li
              onClick={() => setIsActiveSubmenu(index)}
              key={index}
              className={`menu-items cursor-pointer p-2
          ${isAciveSubmenu === index ? 'text-regal-blue' : 'text-regal-gray'}
           flex-shrink-0
          `}
            >
              <div className="">{submenuItems.title}</div>
            </li>

          </>
        ))}
      </ul>
  )
}

export default SubMenuTabs
