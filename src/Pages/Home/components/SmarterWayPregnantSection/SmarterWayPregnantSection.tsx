import Button from '@/components/Button/Button';

import getChartAndActualValues from '@/assets/images/getChartAndActualValues.png';
import initoTracksEverything from '@/assets/images/initoTracksEverthing.jpg';

const SmarterWayPregnantSection = () => {
  return (
    <section className='relative mt-10 md:mt-20 md:pb-16'>
      <div className='relative z-10 md:space-y-20'>
        <FeedbackSection />
        <PictorialHormonesSection />
        <TracksSection />
      </div>
      <div className='absolute inset-x-0 bottom-0 top-20 bg-[#DFF1F8] md:top-40' />
    </section>
  );
};

export default SmarterWayPregnantSection;

const TRACK_POINTS = [
  'Your fertility levels',
  'When to test on the right days',
  'When you’ve successfully ovulated',
  'And when to roll into bed!'
];

const TracksSection = () => {
  return (
    <div className='bg-white md:mx-auto md:flex md:max-w-[1000px] md:flex-row-reverse md:overflow-hidden md:rounded-3xl md:shadow-[4px_4px_14px_rgba(18,45,53,0.121569)]'>
      <div className='space-y-4 p-8 font-medium md:basis-1/2 md:space-y-6 md:px-12'>
        <h2 className='text-2xl font-bold md:text-3xl'>
          Inito tracks everything so you don’t have to
        </h2>
        <div>
          The Inito Fertility Monitor comes with a free easy-to-use App, so you
          can track your fertile days with ease and know exactly when you
          ovulate.
          <br />
          <br />
          Our App notifies you for everything:
          <br />
          <ul className='list-disc space-y-1 px-4'>
            {TRACK_POINTS.map((trackPoint, index) => {
              return (
                <li className='marker:text-blue200' key={index}>
                  {trackPoint}
                </li>
              );
            })}
          </ul>
        </div>

        <Button className='hidden font-medium md:block'>
          Get the Inito Kit
        </Button>
      </div>

      <div className='md:flex md:basis-1/2 md:items-end'>
        <img
          src={initoTracksEverything}
          className='mx-auto h-96 object-cover md:bottom-0 md:h-[450px]'
        />
      </div>
    </div>
  );
};

const PictorialHormonesSection = () => {
  return (
    <div className='md:mx-auto md:flex md:max-w-[1000px] md:overflow-hidden md:rounded-3xl md:bg-white md:shadow-[4px_4px_14px_rgba(18,45,53,0.121569)]'>
      <div className='space-y-4 p-8 md:basis-1/2 md:space-y-6 md:p-16'>
        <h2 className='text-2xl font-bold md:text-3xl'>
          Get charts and actual values of your hormones
        </h2>
        <p className='text-base'>
          Actual numerical values are necessary to know whether your PdG levels
          are sufficient enough to support a healthy pregnancy.
          <br />
          <br />
          Studies show that PdG levels lower than 7.9ng/ml in serum (around
          10ug/ml PdG) 6-8 days after ovulation are associated with lower
          pregnancy outcomes.
        </p>

        <Button className='mx-auto font-medium md:hidden'>
          Get the Inito Kit
        </Button>
      </div>

      <div className='md:basis-1/2'>
        <img
          src={getChartAndActualValues}
          className='md:h-full md:w-full md:object-cover'
        />
      </div>
    </div>
  );
};

const FeedbackSection = () => {
  return (
    <div className='mx-auto w-[85%] max-w-[850px] space-y-2 rounded-3xl bg-white p-4 shadow-[4px_4px_14px_rgba(18,45,53,0.121569)] md:p-10'>
      <h4 className='text-sm font-semibold text-blue200'>
        WHY MEASURE PROGESTERONE?
      </h4>

      <p>
        <strong>Anovulation</strong> (having a menstrual cycle with no egg) is
        actually a common occurrence, affecting 1 in 10 women*.
        <br />
        <br />A sure way to confirm ovulation is a rise in Progesterone level
        after peak fertility. Progesterone also supports implantation and
        elevated levels of PdG during the 7-10 day window after ovulation
        correlates to higher chances of a successful pregnancy.
        <br />
        <br />
        <span className='text-xs text-gray-400'>
          * Source: National Institutes of Health
        </span>
        <br />
        <br />
        <strong className='text-xl'>
          “Inito is all that you need to give you the best chance of
          conception."
        </strong>
      </p>

      <div className='flex items-center gap-2'>
        <div className='aspect-square h-10 bg-cyan-500 md:h-16' />
        <div className='text-sm md:space-y-1'>
          <p>
            <strong>Dr. Rachel Wagner</strong>
          </p>
          <p className='text-xs italic'>MD</p>
        </div>
      </div>
    </div>
  );
};
