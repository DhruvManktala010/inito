import curvyUnderline from '@/assets/images/curvyUnderline.png';

const FertilityKit = () => {
  return (
    <div className='bg-blue50 grid place-items-center p-10 text-blue300 text-opacity-90 md:bg-white md:p-16'>
      <div className='w-full space-y-8 text-center md:w-[45%] md:space-y-12'>
        <div className='space-y-4 md:space-y-6'>
          <h1 className='text-2xl font-bold md:text-4xl'>
            The{' '}
            <div className='relative inline-block'>
              only
              <img
                src={curvyUnderline}
                className='absolute -bottom-1 h-1.5 object-cover'
              />
            </div>{' '}
            fertility kit you will ever need
          </h1>
          <p className='block font-medium'>
            Most ovulation tests predict your fertile days by tracking Estrogen
            and Luteinizing Hormone (LH), but fail to measure the hormone that
            actually confirms your ovulation: &nbsp;
            <strong>PdG (urine metabolite of progesterone).</strong>
          </p>
        </div>

        <div className='space-y-4 md:space-y-6'>
          <h1 className='text-xl font-semibold md:text-2xl'>
            What makes Inito different?
          </h1>
          <p className='block font-medium'>
            Inito is the only fertility monitor that measures all{' '}
            <strong>4 hormones</strong>
            &nbsp; on a <strong>single test strip</strong>, showing you a full
            picture of your cycles with results unique to your body.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FertilityKit;
