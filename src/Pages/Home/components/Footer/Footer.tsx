import React, { useState } from 'react';
import { SiFacebook } from 'react-icons/si';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string | null) => {
    setOpenSection(openSection === section ? null : section);
  };

  const CONFIG_ROUTING = {
    company: [
      {
        title: 'About Us',
        link: '/about'
      },
      {
        title: 'Careers',
        link: '/careers'
      },
      {
        title: 'Buy Now',
        link: '/buy'
      },
      {
        title: 'Contact Us',
        link: '/contact'
      }
    ],
    support: [
      {
        title: 'FAQ',
        link: '/faq'
      },
      {
        title: 'Terms',
        link: '/terms'
      },
      {
        title: 'Privacy Policy',
        link: '/privacy'
      },
      {
        title: 'Returns & Warranty',
        link: '/returns'
      },
      {
        title: 'Consumer Health Data Privacy Policy',
        link: '/consumer-health'
      }
    ],
    contact: [
      {
        title: '+91-9742931931'
      },
      {
        title: 'help@inito.com'
      },
      {
        title: `2nd Floor, #44, 100 Feet Rd, Koramangala \n4th Block, Bengaluru, 560034, IN`
      }
    ]
  };

  return (
    <footer className='bg-[#112D35] py-8 text-gray-400'>
      <div className='container mx-auto flex flex-col items-center justify-center px-4 text-center md:flex-row md:text-left'>
        {/* Desktop View */}
        <div className='hidden w-full justify-between gap-4 px-48 md:flex'>
          <div className='flex flex-col space-y-2'>
            <h2 className='mb-4 text-white'>Company</h2>
            <div className='flex flex-col gap-8'>
              {CONFIG_ROUTING.company.map((item, index) => (
                <a key={index} href={item.link} className=''>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            <h2 className='mb-4 text-white'>Support</h2>
            <div className='flex flex-col gap-8'>
              {CONFIG_ROUTING.support.map((item, index) => (
                <a key={index} href={item.link}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            <h2 className='mb-4 text-white'>Get In Touch</h2>
            <div className='flex flex-col gap-8'>
              {CONFIG_ROUTING.contact.map((item, index) => (
                <p
                  key={index}
                  className='text-clip whitespace-pre-wrap text-start text-gray-400'
                >
                  {item.title}
                </p>
              ))}
            </div>
          </div>
          <SocialIcons />
        </div>

        {/* Mobile Accordion */}
        <div className='w-full md:hidden'>
          <div
            className='flex items-center justify-between py-2'
            onClick={() => toggleSection('company')}
          >
            <h2 className='text-white'>Company</h2>
            <span>{openSection === 'company' ? '▲' : '▼'}</span>
          </div>
          <div
            className={`transition-max-height overflow-hidden duration-500 ease-in-out ${
              openSection === 'company' ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            {openSection === 'company' && (
              <div className='mb-4 flex flex-col items-start'>
                {CONFIG_ROUTING.company.map((item, index) => (
                  <a key={index} href={item.link} className='mb-2'>
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div
            className='flex justify-between py-2'
            onClick={() => toggleSection('support')}
          >
            <h2 className='text-white'>Support</h2>
            <span>{openSection === 'support' ? '▲' : '▼'}</span>
          </div>
          <div
            className={`transition-max-height overflow-hidden duration-500 ease-in-out ${
              openSection === 'support' ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            {openSection === 'support' && (
              <div className='mb-4 flex flex-col items-start'>
                {CONFIG_ROUTING.support.map((item, index) => (
                  <a key={index} href={item.link} className='mb-2'>
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div
            className='flex items-center justify-between py-2'
            onClick={() => toggleSection('contact')}
          >
            <h2 className='text-white'>Get In Touch</h2>
            <span>{openSection === 'contact' ? '▲' : '▼'}</span>
          </div>
          <div
            className={`transition-max-height overflow-hidden duration-500 ease-in-out ${
              openSection === 'contact' ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            {openSection === 'contact' && (
              <div className='mb-4 flex flex-col items-start'>
                {CONFIG_ROUTING.contact.map((item, index) => (
                  <p key={index} className='mb-2 text-start'>
                    {item.title}
                  </p>
                ))}
              </div>
            )}
          </div>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

const SocialIcons = () => {
  return (
    <div className='mt-4 flex justify-center'>
      <a href='https://facebook.com' className='mr-4'>
        <SiFacebook className='h-7 w-7' color='white' />
      </a>
      <a href='https://instagram.com' className='mr-4'>
        <FaInstagram className='h-7 w-7' color='white' />
      </a>
      <a href='https://linkedin.com' className='mr-4'>
        <FaLinkedin className='h-7 w-7' color='white' />
      </a>
      <a href='https://youtube.com'>
        <FaYoutube className='h-7 w-7' color='white' />
      </a>
    </div>
  );
};
export default Footer;
