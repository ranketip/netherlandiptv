import React from 'react';

const VideoShowcase = () => {
  const channelLogos = [
    { id: 1, name: "Channel 1", src: "/logos/1.png" },
    { id: 2, name: "Channel 2", src: "/logos/2.png" },
    { id: 3, name: "Channel 3", src: "/logos/3.png" },
    { id: 4, name: "Channel 4", src: "/logos/4.png" },
    { id: 5, name: "Channel 5", src: "/logos/5.png" },
    { id: 6, name: "Channel 6", src: "/logos/6.png" },
    { id: 7, name: "Channel 7", src: "/logos/7.png" },
  ];

  const firstRow = channelLogos.slice(0, 3);
  const secondRow = channelLogos.slice(3);

  return (
    <div className="mt-12 md:mt-0 w-full bg-black min-h-[50vh]">
      {/* Video section */}
      <div className="w-full flex items-center justify-center h-[50vh]">
        <video
          className="w-full lg:w-1/2 h-full object-contain"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/VIDEO.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Logos section */}
      <div className="bg-black p-4 md:p-6">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-10">
          {/* First row - 3 logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 items-center justify-items-center">
            {firstRow.map((logo) => (
              <div
                key={logo.id}
                className="w-24 h-12 md:w-32 md:h-16 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-200"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain invert"
                />
              </div>
            ))}
          </div>

          {/* Second row - 4 logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 items-center justify-items-center">
            {secondRow.map((logo) => (
              <div
                key={logo.id}
                className="w-24 h-12 md:w-32 md:h-16 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-200"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;