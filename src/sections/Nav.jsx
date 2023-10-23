import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
      <img
            src="./images/filpkartLogo.png"
            alt='logo'
            width={230}
            height={29}
            className='m-0 w-[160px] h-[29px]'
          />
          <>
<FontAwesomeIcon icon="fa-duotone fa-magnifying-glass" />
</>
          
        </nav>
        </header>

  )
}

export default Nav