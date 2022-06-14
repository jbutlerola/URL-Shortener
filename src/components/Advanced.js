import React from "react";
import brandImage from "../images/icon-brand-recognition.svg";
import detailedRecordsImage from "../images/icon-detailed-records.svg";
import fullyCustomizableImage from "../images/icon-fully-customizable.svg";

export const Advanced = () => {
  return (
    <>
      <section className="bg-gray-100 py-10 lg:pt-20 lg:pb-40">
        <div className="max-width">
          <h2 className="text-4xl font-bold text-slate-800 mb-3 text-center">
            Advanced Statistics
          </h2>
          <p className="text-slate-400 text-center mb-10 lg:mb-20">
            Track how your links are performing across the web <br /> with our
            advanced statistics dashboard.
          </p>

          <div className="relative card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="line"></div>
            <article className="bg-white p-5 rounded relative">
              <img
                className="p-3 -mt-12 bg-slate-800 rounded-full"
                src={brandImage}
                alt="Brand Recognition"
              />
              <h3 className="text-slate-800 text-lg mb-2 font-bold mt-4">
                Brand Recognition
              </h3>
              <p className="text-slate-400 text-sm ">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </article>

            <article className="bg-white p-5 rounded relative">
              <img
                className="p-3 -mt-12 bg-slate-800 rounded-full"
                src={detailedRecordsImage}
                alt="detailed records"
              />
              <h3 className="text-slate-800 text-lg mb-2 font-bold mt-4">
                Detailed Records
              </h3>
              <p className="text-slate-400 text-sm ">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>

            <article className="bg-white p-5 rounded relative">
              <img
                className="p-3 -mt-12 bg-slate-800 rounded-full"
                src={fullyCustomizableImage}
                alt="Fully Customizable"
              />
              <h3 className="text-slate-800 text-lg mb-2 font-bold mt-4">
                Brand Recognition
              </h3>
              <p className="text-slate-400 text-sm ">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
