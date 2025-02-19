import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';

// eslint-disable-next-line react/prop-types
const Header = ({ loginCSS, signupCSS, navColor, light }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className='site-header site-header--absolute is--white py-3'
      id='sticky-menu'
    >
      <div className='global-container'>
        <div className='flex items-center justify-between gap-x-8'>
          <div className='flex items-center justify between gap-x-8 '>
            {/* Header Logo */}
            

            <div className='flex items-center justify-start gap-x-0'>
              <div className=''><Logo className='logosm' light={light} /></div>

              <div> <Link to='/' className='nav-link-item'><h1 className='logo-name'>ASTRANOVA</h1></Link>
              </div>

             
              
            </div>
            
            {/* Header Logo */}
            {/* Header Navigation */}
            
          </div>
          {/* Header Navigation */}
          {/* Header User Event */}
          <div className='flex items-center gap-8'>

          <div className=' search-bar-nav'>
                <input 
                type="text"
                placeholder="/models, datasets, users..."
                className="search-bar-header "
                />
              </div>
            <Navbar
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
                color={navColor}
              />
            <Link to='/login' className={loginCSS}>
              Login
            </Link>
            <Link to='/signup' className={signupCSS}>
              Sign up free
            </Link>
            {/* Responsive Off-canvas Menu Button */}
            <div className='block lg:hidden'>
              <button
                onClick={() => setMobileMenu(true)}
                className={`mobile-menu-trigger ${
                  light ? 'is-white' : 'is-black'
                }`}
              >
                <span />
              </button>
            </div>
          </div>
          {/* Header User Event */}
        </div>
      </div>
    </header>
  );
};

export default Header;
