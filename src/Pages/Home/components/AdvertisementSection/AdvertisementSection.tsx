import BloomergLogo from '@/assets/images/BloombergLogo.png';
import EnterpreneurLogo from '@/assets/images/EnterpreneurLogo.png';
import ForbesIndiaLogo from '@/assets/images/ForbesIndiaLogo.png';
import TheWeekLogo from '@/assets/images/TheWeekLogo.png';
import WashingtonLogo from '@/assets/images/WashingtonLogo.png';
import { cn } from '@/utils/cn';

const ADVERTISING_AGENCIES = [
  BloomergLogo,
  ForbesIndiaLogo,
  TheWeekLogo,
  WashingtonLogo,
  EnterpreneurLogo
];

const AdvertisementSection = () => {
  return (
    <div className='mt-12 space-y-2 py-8 md:mt-0 md:px-48'>
      <h4 className='text-center text-xs font-medium uppercase opacity-20 md:text-lg md:font-semibold'>
        As seen on
      </h4>
      <div className='grid grid-cols-2 gap-6 px-4 md:grid-cols-5'>
        {ADVERTISING_AGENCIES.map((advertisingAgency, index) => {
          return (
            <img
              src={advertisingAgency}
              className={cn(
                'mx-auto h-8 object-contain md:h-7',
                index === 0 && 'col-span-full md:col-span-1'
              )}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdvertisementSection;
