  import React from 'react';
  import News from "../assets/icons/news.svg"
  import calender from "../assets/icons/calender.svg"
  const SectionCard = ({ icon, title, items, bgColor }) => {
    return (
      <div className={`flex flex-col items-center py-[125px] ${bgColor} `}>
        <div className="text-[#EEB26D] mb-4 text-4xl">
        <img src={icon} alt={title} />
          </div>
        <h2 className="text-[35px] fgt-ff-normal mb-4 text-center"  dangerouslySetInnerHTML={{ __html:title }}>

        </h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="text-start">
              <p className="text-gray-700 mb-2">

                <p className="text[20px] fgt-ff-light text-[#313131] mb-2" dangerouslySetInnerHTML={{ __html: item.description }} />
              </p>
              <a href={item.link} className="text-[24px] fgt-ff-medium">Read More →</a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const NewsAndEvents = () => {
    const newsItems = [
      {
        description: "Lasher Holzapfel Sperry & Ebberson  PLLC  <br/> Celebrating 50 Years",
        link: "#"
      },
      {
        description: "Lasher Holzapfel Sperry & Ebberson Adds <br/> New Lawyers to Estate Planning Practice <br/> Group",
        link: "#"
      }
    ];

    const pressItems = [
      {
        description: "Lasher Holzapfel Sperry & Ebberson PLLC <br/> Celebrating 50 Years",
        link: "#"
      },
      {
        description: "Lasher Holzapfel Sperry & Ebberson PLLC <br/> Celebrating 50 Years",
        link: "#"
      }
    ];

    return (
      <div className="  grid xs:grid-cols-1 grid-cols-2 gap-8">
        <SectionCard
          icon={calender}
          title="News & Events"
          items={newsItems}
          bgColor="bg-white"
        />
        <SectionCard
          icon={News}
          title="Press Releases &  <br/> Publications"
          items={pressItems}
          bgColor="bg-[#FFDDB6]"
        />
      </div>
    );
  };

  export default NewsAndEvents;

