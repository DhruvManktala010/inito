import AdvertisementSection from './components/AdvertisementSection/AdvertisementSection';
import FAQSection from './components/FAQSection/FAQSection';
import FertilityKit from './components/FertilityKit/FertilityKit';
import FertilityLabSection from './components/FertilityLabSection/FertilityLabSection';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import OvulationDataSection from './components/OvulationDataSection/OvulationDataSection';
import SmarterWayPregnantSection from './components/SmarterWayPregnantSection/SmarterWayPregnantSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <HeroSection />
      <AdvertisementSection />
      <FertilityKit />
      <OvulationDataSection />
      <SmarterWayPregnantSection />
      <FertilityLabSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
