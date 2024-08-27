import React, { useState, useEffect, useRef } from 'react';
import img1 from '../../assets/icons/doc.svg';
import img2 from '../../assets/icons/doc2.svg';
import img3 from '../../assets/icons/people.svg';
import MenuOpen from '../../Components/MenuOpen';

const Solution = ({ title, description, buttonText, sections }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsAnimating(false);
      }, 300); // Match the duration of your slide-out animation
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Set focus on the menu when it opens
  useEffect(() => {
    if (menuOpen && menuRef.current) {
      menuRef.current.focus();
    }
  }, [menuOpen]);

  return (
    <>
      {menuOpen && (
        <MenuOpen 
          ref={menuRef}  // Attach ref to the MenuOpen component
          open={menuOpen} 
          close={toggleMenu} 
          isAnimating={isAnimating} 
          tabIndex="-1"  // Make it focusable
        />
      )}
      <div className="bg-[#F7F6F1] px-[5.2%] xs:py-8 py-16">
        <div className="grid grid-cols-2 xs:flex xs:flex-col gap-9 xs:py-0 py-[120px]">
          <div className="flex flex-wrap justify-start items-center xl:gap-20 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={section.img} alt={section.title} className="mb-4 xs:w-[61px]" />
                <h1 className="text-[20px] fgt-ff-normal">{section.title}</h1>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center xs:text-start md:start">
            <span className="fgt-ff-medium xs:text-[35px] xs:text-start text-[50px] lg:text-left">
              {title}
            </span>
            <p
              className="fgt-ff-light text-[20px] xs:pt-2 pt-8 xs:text-start lg:text-left"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          
            <div className="xs:text-start lg:text-start pt-8">
            <a href="#topscroll">
              <button
                className="bg-[#403C5C] text-white fgt-ff-medium px-[42px] py-[14px] rounded-md"
                onClick={toggleMenu} // Add this line
              >
                {buttonText}
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const sections = [
    { img: img1, title: 'Business Law' },
    { img: img2, title: 'BOIR Compliance' },
    { img: img3, title: 'Immigration Law' },
  ];
  window.scrollTo(0, 0);
  return (
    <Solution
      title="We make our practice your solution."
      description="Whether you have personal or business legal needs,  our <br/> team responds quickly and acts decisively."
      buttonText="Practice Areas"
      sections={sections}
    />
  );
};

export default App;
