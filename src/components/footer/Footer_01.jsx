import { Link } from 'react-router-dom';

const Footer_01 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className='relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]'>
      {/* Footer Top */}
      <div className=''>
        
      </div>
      {/* Footer Text Slider */}
      {/* Footer Top */}
      <div className='global-container'>
        <div className='h-[1px] w-full bg-[#DBD6CF]' />
        {/* Footer Center */}
        <div className='lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_1fr] xl:gap-20 xl:py-[100px]'>
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-6'>
            <Link to='/' className='inline-block'>
              <img
                src='assets/img/th-1/AN-BLACK.png'
                alt='logo'
                width={96}
                height={24}
              />
            </Link>
            <p>
              AstraNova is a collaborative platform where AI and machine learning enthusiasts can discover, share, and create cutting-edge models and datasets. Whether you’re a researcher, developer, or beginner, explore a vast library of AI solutions that push the boundaries of technology.
            </p>
            {/* <p>
              Website: <Link to='/'>www.example.com</Link>
            </p> */}
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-6'>
            {/* Footer Title */}
            <h4 className='text-[21px] font-semibold capitalize text-black'>
              Primary Pages
            </h4>
            {/* Footer Title */}
            {/* Footer Navbar */}
            <ul className='flex flex-col gap-y-[10px] capitalize'>
              <li>
                <Link
                  to='/'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/login'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Login
                </Link>
              </li>
              {/* <li>
                <Link
                  to='/about'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  About Us
                </Link>
              </li> */}
               <li>
                <Link
                  to='/signup'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Signup
                </Link>
              </li>
              {/* <li>
                <Link
                  to='/services'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Services
                </Link>
              </li> */}
              <li>
                <Link
                  to='/pricing'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  pricing
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
            {/* Footer Title */}
            {/* <h4 className='text-[21px] font-semibold capitalize text-black'>
              Utility pages
            </h4> */}
            {/* Footer Title */}
            {/* Footer Navbar */}
            {/* <ul className='flex flex-col gap-y-[10px] capitalize'>
              <li>
                <Link
                  to='/signup'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  to='/login'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to='/error-404'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  404 Not found
                </Link>
              </li>
              <li>
                <Link
                  to='/reset-password'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed'
                >
                  Password Reset
                </Link>
              </li>
            </ul> */}
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-6'>
            {/* Footer Title */}
            {/* <h4 className='text-[21px] font-semibold capitalize text-black'>
              Subscribe to our newsletter
            </h4> */}
            {/* Footer Title */}
            {/* Footer Subscriber Form */}
            {/* <form onSubmit={handleSubmit}>
              <div className='relative h-[50px] max-w-[300px]'>
                <input
                  type='email'
                  name='newsletter-email'
                  id='newsletter-email'
                  placeholder='Enter your email'
                  className='p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-black px-[24px] pr-20 outline-none'
                  required=''
                />
                <button
                  type='submit'
                  className='absolute right-[5px] top-[50%] inline-block h-10 -translate-y-[50%] rounded-[50px] bg-black px-6 transition-all hover:bg-orange-500'
                >
                  <img
                    src='assets/img/th-1/arrow-right-large.svg'
                    alt='newsletter'
                  />
                </button>
              </div>
            </form> */}
            {/* Footer Subscriber Form */}
          </div>
          {/* Footer Widget */}
        </div>
        {/* Footer Center */}
        <div className='h-[1px] w-full bg-[#DBD6CF]' />
        {/* Footer Bottom */}
        <div className='py-9 text-center'>
          <p>
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            AstraNova
          </p>
        </div>
        {/* Footer Bottom */}
    </footer>
  );
};

export default Footer_01;
