import Image from 'next/image';
import AiesecLogo from './Icons/bluelogo.png';
import '@styles/globals.css';

function Nav() {
  return (
    <nav className=' grid grid-cols-3 gap-x-3 h-20'>
      <div className='flex justify-center items-center'><Image src={AiesecLogo} alt="AIESEC Logo" width={250} className=' items-center'></Image></div>
      <div className=' col-span-2'>
        <ul className='navbar-list list-none grid grid-cols-7 grid-flow-row pt-7 text-md'>
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
