"use client";

import { useEffect, useState } from "react";

const Map = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="w-full">
        <iframe
          width="100%"
          height="600"
          // frameborder="0"
          scrolling="no"
          // marginheight="0"
          // marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5-8%20Hammersley%20House,%20Warwick%20St,%20W1B%205LU,%20London,%20England+(My%20Business%20Name)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">Apartment</a>
        </iframe>
      </div>
    )
  );
};
export default Map;
