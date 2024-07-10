import { cn } from '@/utils/cn';

import step1 from '@/assets/videos/step1.mp4';
import step2 from '@/assets/videos/step2.mp4';
import step3 from '@/assets/videos/step3.mp4';
import step4 from '@/assets/videos/step4.mp4';
import Button from '@/components/Button/Button';

const FERTILITY_STEPS = [
  {
    label: 'Dip the test strip in urine for 15 seconds.',
    videoSrc: step1,
    stepClassName: 'bg-[#BDE0E6] md:bg-[#EEEEF4]'
  },
  {
    label: 'Attach the Inito Fertility Monitor to your iPhone.',
    videoSrc: step2,
    stepClassName: 'bg-[#96CCD6] md:bg-[#EEEEF4]'
  },
  {
    label: 'the Inito Fertility Monitor.',
    videoSrc: step3,
    stepClassName: 'bg-[#63B4C3] md:bg-[#EEEEF4]'
  },
  {
    label: 'Get personalized results on our App in 10 minutes.',
    videoSrc: step4,
    stepClassName: 'bg-[#1D94AA] md:bg-[#EEEEF4]'
  }
];

const FertilityLabSection = () => {
  return (
    <section className='my-10 space-y-4 md:mx-auto md:flex md:max-w-6xl md:items-center'>
      <div className='space-y-4 p-8 text-blue300 md:space-y-6 md:p-4'>
        <h2 className='text-center text-3xl font-bold md:text-left md:text-4xl'>
          A fertility lab at your fingertips
        </h2>
        <p>
          Easy-to-read fertility diagnostic results directly on your iPhone¹, in
          just 10 minutes.
        </p>

        <Button className='hidden md:block'>Get the Inito Kit</Button>
        <span className='hidden pt-4 text-xs text-gray-400 md:block'>
          * The Inito Fertility Monitor currently supports iPhone 7 and up.
          Android phones are not supported at the moment.
        </span>
      </div>

      <div className='place-item grid grid-cols-1 gap-y-8 px-10 md:grid-cols-2 md:gap-8'>
        {FERTILITY_STEPS.map(({ label, videoSrc, stepClassName }, index) => {
          return (
            <FertilityStep
              title={label}
              step={index + 1}
              videoSrc={videoSrc}
              stepClassName={stepClassName}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FertilityLabSection;

const FertilityStep = ({
  title,
  videoSrc,
  step,
  stepClassName,
  className
}: any) => {
  return (
    <div className={cn('relative flex flex-col space-y-2', className)}>
      <div className='aspect-video flex-1 overflow-hidden rounded-lg bg-cyan-500 md:max-w-60'>
        <video className='h-full w-full object-cover' autoPlay muted loop>
          <source src={videoSrc} type='video/mp4' />
        </video>
      </div>
      <div className='md:flex md:items-center'>
        <div
          className={cn(
            'absolute left-0 top-0 grid aspect-square h-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-blue200 p-2 text-lg font-semibold text-white md:relative md:h-14 md:w-fit md:translate-x-0 md:translate-y-0 md:text-xl md:text-blue300',
            stepClassName
          )}
        >
          {step}
        </div>
        <p className='px-4 text-center text-sm font-semibold md:text-left'>
          {title}
        </p>
      </div>
    </div>
  );
};
