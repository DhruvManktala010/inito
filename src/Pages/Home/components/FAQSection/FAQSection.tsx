import { cn } from '@/utils/cn';
import React, { useState } from 'react';

const FAQ_CONFIG_DATA = [
  {
    title: 'What results does Inito give?',
    content:
      'Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 4 hormones.'
  },
  {
    title: 'Will Inito work if I have PCOS?',
    content:
      'Every woman is unique, especially with a condition like PCOS, which can influence hormone levels. Inito shows you a full picture of your cycle, which can help you identify your fertile days and confirm ovulation.'
  },
  {
    title: 'How many test strips are required per cycle?',
    content:
      'The number of tests depends on the irregularity and length of your cycles. For someone with an average cycle length of 30 days, 12-15 tests may be required to track and confirm ovulation.'
  },
  {
    title: 'Do medications affect the results?',
    content:
      'Fertility medications or other drugs that influence your hormones can prevent Inito from giving you accurate results. You will still be able to see your hormone patterns via the App.'
  },
  {
    title: 'Can I use HSA benefits to purchase Inito?',
    content: 'Yes'
  },
  {
    title: "What is Inito's regulatory status in the US?",
    content:
      'The Inito Fertility Monitor is registered with the U.S. Food and Drug Administration (FDA) as a Class I medical device that is exempt from FDAs premarket notification submission requirements. The registration status should not be misunderstood as suggesting that the Inito Fertility Monitor has been reviewed, cleared or approved by FDA.'
  },
  {
    title: 'Are there any limits to specific hormone thresholds?',
    content:
      'Inito is designed to read all kinds of drops and surges in hormone levels. However, the set limits of measurement for E3G is 600 ng/ml, PdG is 40 ug/ml, and FSH & LH is 40 mIU/ml.'
  },

  {
    title: 'Do I need to use a test strip for each hormone?',
    content:
      'No. Inito is the only fertility monitor that measures Estrogen, LH, PdG (urine metabolite of progesterone) and FSH on a single test strip.'
  },
  {
    title:
      'Where can I get more refill strips? Do I need to buy a new monitor every cycle?',
    content:
      "Boxes of strips are available in the 'shop' tab in the Inito app. You don't need to purchase the monitor again."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='my-8 flex flex-col items-center justify-center gap-8 md:mx-auto md:max-w-6xl md:gap-10'>
      <h1 className='text-center text-3xl font-bold md:text-4xl'>
        Your top questions, <br /> answered
      </h1>

      <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
        {FAQ_CONFIG_DATA.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>

      <span className='px-8 text-xs text-gray-400'>
        1. Inito measures PdG, a metabolite of progesterone. Progesterone & PdG
        are proven to be correlated. Roos J, Johnson S, Weddell S, et al.
        Monitoring the menstrual cycle: Comparison of urinary and serum
        reproductive hormones referenced to true ovulation. Eur J Contracept
        Reprod Heal Care 2015
      </span>
    </div>
  );
}

const Accordion = ({
  title,
  content,
  isOpen,
  onClick
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={cn(
        'mx-5 my-2 overflow-hidden rounded-xl',
        isOpen && 'bg-[#F7F7FE]'
      )}
    >
      <button
        className='w-full rounded-xl bg-[#F7F7FE] px-4 py-2 text-left focus:outline-none'
        onClick={onClick}
      >
        <div className='flex items-start justify-between'>
          <span className='font-semibold md:text-lg'>{title}</span>
          <span className='text-2xl'>{isOpen ? '-' : '+'}</span>
        </div>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-500',
          isOpen ? 'max-h-screen' : 'max-h-0'
        )}
      >
        <div className='bg-[#F7F7FE] px-4 py-2 text-sm text-gray-700'>
          {content}
        </div>
      </div>
    </div>
  );
};
