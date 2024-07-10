import Button from '@/components/Button/Button';
import { FaStar as Star } from 'react-icons/fa';

import heroSectionMobile from '@/assets/images/heroSectionMobile.png';
import heroSectionDesktop from '@/assets/images/heroSectionDesktop.png';

const HeroSection = () => {
  return (
    <section className="relative flex h-[70vh] bg-blue100 px-8 pt-8 text-blue300 md:h-[95vh] md:overflow-hidden md:bg-[url('assets/images/heroSectionBackground.png')] md:bg-cover md:bg-center md:bg-no-repeat md:px-20 md:py-8 xl:px-36 xl:py-24">
      <main className='basis-full space-y-5 md:basis-1/2 md:space-y-8 lg:p-16'>
        <div className='space-y-2 md:space-y-4'>
          <div className='flex gap-2'>
            <Rating />
            <h4 className='text-xs font-medium text-black md:text-sm'>
              TRUSTED BY 20,000+ COUPLES
            </h4>
          </div>

          <h2 className='text-3xl font-bold md:text-4xl lg:text-5xl'>
            Track your fertility <br /> hormones at home, <br /> in 10 minutes
          </h2>
        </div>

        <p className='text-lg'>
          Get accurate results of &nbsp;
          <strong>
            Estrogen, LH, PdG (urine <br className='hidden md:block' />
            metabolite of progesterone) and FSH
          </strong>
          &nbsp; with Inito, the <br className='hidden md:block' /> all-in-one
          fertility monitor.
        </p>

        <Button className='absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-1/2 md:relative md:left-0 md:translate-x-0 md:translate-y-0'>
          How does this work?
        </Button>
      </main>

      <div className='absolute inset-x-0 bottom-0 sm:relative sm:basis-1/2'>
        <img src={heroSectionMobile} className='object-cover sm:hidden' />
        <img
          src={heroSectionDesktop}
          className='hidden origin-top sm:block sm:scale-100 lg:scale-125 xl:origin-center'
        />
      </div>
    </section>
  );
};

export default HeroSection;

const Rating = () => {
  return (
    <div className='flex space-x-1'>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <Star className='text-xs text-blue200 md:text-base' key={index} />
        );
      })}
    </div>
  );
};
