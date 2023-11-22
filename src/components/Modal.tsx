import React, { useEffect } from "react";

import close from '../assets/images/icons/close.svg';

type ModalProps = {
    children: React.ReactNode;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    modalContentClass?: string;
}

const Modal = ({ setIsActive, children, modalContentClass }: ModalProps) => {
  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');
  }, []);

  const handleClick:React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target.id !== 'modal') return;
    setIsActive(false);
    document.body.classList.remove('overflow-y-hidden');

  }
  return (
    <div id="modal" onClick={(e) => handleClick(e)} className='fixed inset-0 bg-black/25 flex z-50 justify-center items-center'>
          <div className={`${modalContentClass} rounded-2xl bg-white p-4 relative`}>
              {children}
              <button onClick={() => setIsActive(false)} className='p-1 absolute top-4 right-4' title='close window' type='button'>
                  <img src={close} alt="Close window" />
              </button>
        </div>
    </div>
  )
}

export default Modal
