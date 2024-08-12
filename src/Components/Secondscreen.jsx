import React from 'react';
import Breadcrumb from './Breadcrumb';
import Content from './Content';
import Footer from "./Footer"
import SecondHeader from './SecondHeader';
import Founders from './Founder';
import lkdnicon2 from '../assets/icons/drpdwicon2.svg';
import fbicon2 from '../assets/icons/drpdwicon3.svg';
import twittericon2 from '../assets/icons/drpdwicon4.svg';

const  Secondscreen = ()=> {
  const socialIcons = [lkdnicon2, fbicon2, twittericon2];

  return (
    <div>
      <SecondHeader
        socialIcons2={socialIcons}
        mainTitle="We make our practice your solution"
      />
      <Breadcrumb/>
      <Content/>
      <Founders/>
      <Footer/>
    
      
    </div>
  );
}

export default Secondscreen
