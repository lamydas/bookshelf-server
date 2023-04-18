

import ImageSlider from './ImageSlider';
import ClientHolder from './ClientHolder';
import FeatureBooks from './FeatureBooks';
import PopularBooks from './PopularBooks';
import Quotation from './Quotation';

import { SliderData } from './SliderData';

const Landing = () => {

  return (
    <>
      
      <ImageSlider slides={SliderData} />
      <ClientHolder></ClientHolder>
      <FeatureBooks></FeatureBooks>
      <PopularBooks></PopularBooks>
      <Quotation></Quotation>


    </>
  );
};

export default Landing;
