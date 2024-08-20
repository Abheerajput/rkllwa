import React from 'react'
import lkdnicon2 from '../../assets/icons/drpdwicon2.svg';
import fbicon2 from '../../assets/icons/drpdwicon3.svg';
import twittericon2 from '../../assets/icons/drpdwicon4.svg';
import SecondHeader from '../../Layout/Header/SecondHeader';
const Business = () => {
    const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];
  return (
    <>
       <SecondHeader
        socialIcons2={socialIcons2}
        mainTitle="Business Law"
      />
    </>
  )
}

export default Business
