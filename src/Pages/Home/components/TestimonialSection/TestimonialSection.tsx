import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { cn } from '@/utils/cn';

const TESTIMONIAL_CONFIG = [
  {
    testimonial:
      'I purchased this monitor to figure out my ovulation patterns after 2 failed IUI’s. I discovered that my LH surge is a gradual onset and that we inseminated far too early. Now that we know which day I actually ovulate as it confirms my fertile window, I am hoping to be more succesful on my next IUI. Highly recommend this if you are looking for guaranteed results!',
    testimonialUser: 'Ashley'
  },
  {
    testimonial:
      'I purchased this monitor to figure out my ovulation patterns after 2 failed IUI’s. I discovered that my LH surge is a gradual onset and that we inseminated far too early. Now that we know which day I actually ovulate as it confirms my fertile window, I am hoping to be more succesful on my next IUI. Highly recommend this if you are looking for guaranteed results!',
    testimonialUser: 'Ashley'
  },
  {
    testimonial:
      'I purchased this monitor to figure out my ovulation patterns after 2 failed IUI’s. I discovered that my LH surge is a gradual onset and that we inseminated far too early. Now that we know which day I actually ovulate as it confirms my fertile window, I am hoping to be more succesful on my next IUI. Highly recommend this if you are looking for guaranteed results!',
    testimonialUser: 'Ashley'
  },
  {
    testimonial:
      'I purchased this monitor to figure out my ovulation patterns after 2 failed IUI’s. I discovered that my LH surge is a gradual onset and that we inseminated far too early. Now that we know which day I actually ovulate as it confirms my fertile window, I am hoping to be more succesful on my next IUI. Highly recommend this if you are looking for guaranteed results!',
    testimonialUser: 'Ashley'
  }
];

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: { spacing: 10 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  return (
    <section className='mx-8 space-y-2 md:my-10'>
      <div className='navigation-wrapper mx-auto max-w-6xl'>
        <div ref={sliderRef} className='keen-slider'>
          {TESTIMONIAL_CONFIG.map(({ testimonial, testimonialUser }, index) => {
            return (
              <div
                className={`keen-slider__slide number-slide${index + 1} space-y-8 rounded-xl bg-[#F7F7FD] p-8`}
                key={index}
              >
                <p className='text-sm md:text-base'>{testimonial}</p>
                <p className='text-base font-semibold text-blue200'>
                  {testimonialUser}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className='mx-auto grid max-w-6xl place-items-center'>
        {loaded && instanceRef.current && (
          <div className='space-x-4'>
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys()
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={cn(
                    'h-2 w-2 rounded-full bg-gray-300',
                    currentSlide === idx && 'bg-blue200'
                  )}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
