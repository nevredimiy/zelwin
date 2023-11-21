import InIcon from '../../assets/images/socIcons/in.svg?react';
import InstagramIcon from '../../assets/images/socIcons/instagram.svg?react';
import TelegramIcon from '../../assets/images/socIcons/telegram.svg?react';
import FacebookIcon from '../../assets/images/socIcons/facebook.svg?react';


const index = () => {
  return (
    <footer className='bg-regal-black px-8 pt-16 pb-6'>
      <div className="container">
        <div className="xl:flex gap-10">
          <div className="mb-6 md:flex md:gap-5 xl:flex-col">
            <div className="mb-5">
              <div className='font-medium text-xl lg:text-2xl text-white mb-2'>Zelwin.Agency</div>
              <div className="text-light-gray">Zelwin Agence is a full-service digital marketing agency that helps great companies grow their revenues online. Get in touch: </div>
            </div>
            <div className="">
              <div className="text-white font-medium mb-3">contact@zelwin.agency</div>
              <div className="flex items-center gap-3">
                <a href=''><InIcon className='w-8 hover:grayscale' /></a>
                <a href=''><InstagramIcon className='w-8 hover:grayscale' /></a>
                <a href=''><TelegramIcon className='w-8 hover:grayscale' /></a>
                <a href=''><FacebookIcon className='w-8 hover:grayscale' /></a>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-white font-semibold mb-4">Services</div>
            <ul className='text-light-gray text-xs grid gap-y-3 ssm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              <li className="hover:text-white transition"><a href=""> Publication</a></li>
              <li className="hover:text-white transition"><a href=""> Smart Telegram Bot</a></li>
              <li className="hover:text-white transition"><a href=""> Anti Sniper Bot</a></li>
              <li className="hover:text-white transition"><a href=""> Проведение АМА</a></li>
              <li className="hover:text-white transition"><a href=""> Профессиональный</a></li>
              <li className="hover:text-white transition"><a href=""> CryptoRank тренды</a></li>
              <li className="hover:text-white transition"><a href=""> Получение Legal Opinion</a></li>
              <li className="hover:text-white transition"><a href=""> Проведение АМА</a></li>
              <li className="hover:text-white transition"><a href=""> CryptoRank тренды</a></li>
              <li className="hover:text-white transition"><a href=""> Anti Sniper Bot</a></li>
              <li className="hover:text-white transition"><a href=""> Publication</a></li>
              <li className="hover:text-white transition"><a href=""> Publication</a></li>
              <li className="hover:text-white transition"><a href=""> Smart Telegram Bot</a></li>
              <li className="hover:text-white transition"><a href=""> Anti Sniper Bot</a></li>
              <li className="hover:text-white transition"><a href=""> Проведение АМА</a></li>
              <li className="hover:text-white transition"><a href=""> Профессиональный Market Making</a></li>
              <li className="hover:text-white transition"><a href=""> CryptoRank тренды</a></li>
              <li className="hover:text-white transition"><a href=""> Smart Telegram Bot</a></li>
              <li className="hover:text-white transition"><a href=""> Профессиональный Market Making</a></li>
              <li className="hover:text-white transition"><a href=""> Получение Legal Opinion</a></li>
              <li className="hover:text-white transition"><a href=""> Получение Legal Opinion</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-regal-gray py-4">
          <div className="text-light-gray text-sm">© 2022 Zelwin.Agency. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default index
