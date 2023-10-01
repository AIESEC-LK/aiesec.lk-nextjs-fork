import Image from 'next/image';
import AiesecLogo from './Icons/bluelogo.png';
import '@styles/globals.css';

function Nav() {
  return (
    <nav className=' grid grid-cols-3 h-16 bg-white'>
      <div className='flex justify-center items-center'><Image src={AiesecLogo} alt="AIESEC Logo" width={170} className=' items-center'></Image></div>
      <div className=' col-span-2'>
        <ul className='navbar-list list-none grid grid-cols-7 grid-flow-row text-md pt-5'>
          <li>Home</li>
          <li>Who Are We</li>
          <li>Opportunities</li>
          <li>Partners</li>
          <li>Updates</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
