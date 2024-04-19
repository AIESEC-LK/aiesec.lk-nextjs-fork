import Image from 'next/image';
import Link from 'next/link'
// import AiesecLogo from './Icons/bluelogo.png';
import AiesecLogo from '../public/assets/images/bluelogo.png'
import '@styles/globals.css';
import { useState } from 'react';
import {HiMenuAlt3} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

function Nav() {

  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => {
    setShowMenu(!showMenu);
  };

  const toggleClose = () => {
    setShowMenu(false);
  };

  return (
    <nav id='mobile-nav' className='pt-1 grid grid-cols-3 h-20 bg-white fixed z-50 w-full shadow-lg'>
      <div id='mobile-nav-logo' className='flex md:flex-row justify-center items-center'>

        <Link href="/#home">
          <Image src={AiesecLogo} alt="AIESEC Logo" width={170} className='hidden xsm:block'/>
        </Link>

        {/* hidden lg:block */}
        <button className={showMenu ? 'toggle-btn-hide' : 'toggle-btn-show'} onClick={toggle}><HiMenuAlt3 size={'1.5rem'} color='#037Ef3' /></button>
        <button className={showMenu ? 'toggle-btn-show' : 'toggle-btn-hide'} onClick={toggleClose}><AiOutlineClose size={'1.5rem'} color='#037Ef3' /></button>
      </div>
      <div className='lg:static absolute bg-white lg:min-h-fit min-h-[60vh] left-0 top-[9%] lg:w-auto w-full  col-span-2' id={showMenu ? 'show' : 'hide'}>
        <ul className="flex lg:flex-row flex-col xsm:items-center md:gap-[4vw] gap-10 pt-6">
          <li onClick={toggle}>
            <Link href="/#home">Home</Link>
          </li>
          <li onClick={toggle}>
          <Link href="/#about">Who Are We</Link>
          </li>
          <li onClick={toggle}>
            <Link href="/#opp">Opportunities</Link>
          </li>
          <li onClick={toggle}>
            <Link href="/#partners">Partners</Link>
          </li> 
          <li onClick={toggle}>
            <Link href="/#updates">Updates</Link>
          </li>
          <li onClick={toggle}>
            <Link href="/#contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-6'>
          <ion-icon onclick="onToggleMenu(this)" name="menu-outline" className="text-3xl cursor-pointer xl:hidden"></ion-icon>
        </div>
    </nav>
  );
}

export default Nav;
