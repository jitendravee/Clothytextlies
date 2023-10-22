import React from 'react';
import { filpkartLogo }  from '../sections';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
      <img
            src={filpkartLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
          
        </nav>
        </header>

  )
}

export default Nav