import React from 'react';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Content from '../../Components/Content/Content';
import Footer from "../../Layout/Footer/Footer"
import SecondHeader from '../../Layout/Header/SecondHeader';
import Founders from '../../Pages/Founders/Founder';
import lkdnicon2 from '../../assets/icons/drpdwicon2.svg';
import fbicon2 from '../../assets/icons/drpdwicon3.svg';
import twittericon2 from '../../assets/icons/drpdwicon4.svg';

const  ImmigrationLaw = ()=> {
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

export default ImmigrationLaw
