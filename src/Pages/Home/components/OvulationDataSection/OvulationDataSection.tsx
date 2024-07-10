import Button from '@/components/Button/Button';

import ovulationConfirmed from '@/assets/images/ovulationConfirmed.png';
import hormonesGraph from '@/assets/images/hormonesGraph.jpg';

import greenTick from '@/assets/images/greenTick.png';
import blueTick from '@/assets/images/blueTick.png';
import purpleTick from '@/assets/images/purpleTick.png';
import orangeTick from '@/assets/images/orangeTick.png';

const OVULATION_MEASURES = [
  {
    description: 'Estrogen, which rises 3-4 days before ovulation',
    icon: greenTick
  },
  {
    description: 'LH, which surges 24-36 hours before ovulation',
    icon: purpleTick
  },
  {
    description: 'Progesterone (PdG), which rises after ovulation',
    icon: blueTick
  },
  {
    description: 'FSH, to track follicle growth',
    icon: orangeTick
  }
];

const OvulationDataSection = () => {
  return (
    <section className='md:mx-auto md:max-w-6xl md:space-y-10 md:rounded-[52px] md:bg-[#E1F3FA] md:p-10'>
      <div className='space-y-4 bg-blue100 px-10 pt-12 md:flex md:flex-row-reverse md:items-center md:gap-20 md:bg-transparent md:px-0 md:pt-0'>
        <div className='space-y-6 text-blue300'>
          <h1 className='text-3xl font-bold md:text-4xl'>
            Predict and confirm your ovulation with actual data
          </h1>
          <p>
            Unlike most ovulation tests that only give you "yes/no" results,
            Inito provides
            <strong> real numerical values</strong>
            of your fertility hormones.
            <br />
            <br />
            If you have irregular cycles, actual data is necessary to know
            exactly when you ovulate, and when is the best time to try to
            conceive.
          </p>

          <Button className='mx-auto px-12 text-sm font-semibold md:mx-0 md:px-8'>
            GET THE INITO KIT
          </Button>
        </div>

        <div className='bg-blue100 md:rounded-xl md:px-2'>
          <img src={ovulationConfirmed} />
        </div>
      </div>

      <div className='space-y-4 bg-white md:flex md:items-center md:bg-transparent'>
        <div className='space-y-6 px-10 pt-12 text-blue300 md:basis-2/5 md:px-0 md:pt-0'>
          <h1 className='text-3xl font-bold md:text-4xl'>
            Never miss a day again with Inito
          </h1>
          <p>
            Inito tracks up to 6 fertile days and confirms ovulation by
            measuring all 4 hormones in just 10 minutes:
          </p>

          <div className='space-y-2 md:text-sm'>
            {OVULATION_MEASURES.map(({ description, icon }, index) => {
              return (
                <div className='flex items-center gap-2' key={index}>
                  <img src={icon} className='h-4 object-cover' />
                  <h4>{description}</h4>
                </div>
              );
            })}
          </div>
        </div>

        <div className='md:basis-3/5 md:rounded-xl'>
          <img src={hormonesGraph} className='md:mx-auto md:rounded-xl' />
        </div>
      </div>
    </section>
  );
};

export default OvulationDataSection;
