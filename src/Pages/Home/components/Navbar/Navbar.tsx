import logo from '@/assets/icons/logo.svg';
import Button from '@/components/Button/Button';
import { useEffect, useState } from 'react';

import { RxHamburgerMenu as HamburgerMenu } from 'react-icons/rx';
import { IoCloseSharp as Close } from 'react-icons/io5';

const NAVBAR_LABEL = ['About us', 'Blog', 'FAQ', 'Contact Us', 'Careers'];

const Navbar = () => {
  const [isExpand, setIsExpand] = useState(false);

  useEffect(() => {
    if (isExpand)
      document.getElementById('body-container')?.classList.add('block-scroll');

    return () =>
      document
        .getElementById('body-container')
        ?.classList.remove('block-scroll');
  }, [isExpand]);

  return (
    <>
      <nav className='sticky top-0 z-50 bg-white'>
        <div className='relative'>
          <div className='flex w-full items-center justify-between p-3 md:mx-auto md:max-w-4xl'>
            <div className='flex items-center gap-4'>
              <button onClick={() => setIsExpand(!isExpand)}>
                {isExpand ? (
                  <Close className='text-3xl md:hidden' />
                ) : (
                  <HamburgerMenu className='text-3xl md:hidden' />
                )}
              </button>
              <img src={logo} className='aspect-auto h-8 md:h-10' />
            </div>
            <div className='flex items-center gap-8'>
              <div className='hidden space-x-12 font-medium md:block'>
                {NAVBAR_LABEL.map((label, index) => {
                  return (
                    <a href='/' key={index}>
                      {label}
                    </a>
                  );
                })}
              </div>
              <Button className='md:py-2'>Try inito</Button>
            </div>
          </div>
          {isExpand && (
            <div className='absolute top-full flex w-full flex-col gap-2 bg-white p-4'>
              {NAVBAR_LABEL.map((label, index) => {
                return (
                  <a
                    className='text-lg font-medium hover:text-blue200'
                    href='/'
                    key={index}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </nav>
      {isExpand && <div className='fixed inset-0 z-20 bg-black opacity-50' />}
    </>
  );
};

export default Navbar;
