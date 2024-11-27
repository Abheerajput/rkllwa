import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    // Add error handling for the script
    script.onerror = () => {
      console.error("Calendly widget script failed to load.");
    };

    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Initialize the widget once the script is loaded
    const interval = setInterval(() => {
      if (window.Calendly) {
        clearInterval(interval);
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/ar0776631",
          parentElement: document.getElementById("SAMPLEdivID"),
          prefill: {},
          utm: {}
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        id="SAMPLEdivID"
        className="calendly-inline-widget"
        style={{ minWidth: "320px", height: "580px" }}
      ></div>
    </div>
  );
};

export default CalendlyWidget;




// import React, { useEffect } from 'react';

// const CalendlyWidget = () => {
//   useEffect(() => {
//     // Load Calendly widget script
//     const script = document.createElement('script');
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     // Cleanup script when component unmounts
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   useEffect(() => {
//     // Initialize Calendly widget once the script is loaded
//     const interval = setInterval(() => {
//       if (window.Calendly) {
//         clearInterval(interval);
//         window.Calendly.initInlineWidget({
//           url: "https://calendly.com/ar0776631",
//           parentElement: document.getElementById("SAMPLEdivID"),
//           prefill: {},
//           utm: {}
//         });
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <div
//         id="SAMPLEdivID"
//         className="calendly-inline-widget"
//         style={{ minWidth: "320px", height: "580px" }}
//       ></div>
//     </div>
//   );
// };

// export default CalendlyWidget;
