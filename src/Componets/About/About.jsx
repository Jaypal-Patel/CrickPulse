import React from "react";
import Header from "../../CommadItem/Header";
import Footer from "../../CommadItem/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="p-8 px-24 bg-gray-100 min-h-screen mt-[55px]">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          About
        </h1>

        <div className="flex flex-col md:flex-row items-center my-16">
          <div className="flex justify-center items-center flex-col w-[50%] ">
            <img
              src="/public/About/BCCI.png"
              alt="BCCI"
              className="w-48 h-48 object-cover rounded-full mb-4 md:mb-0"
            />
            <p>1929 - 2024</p>
            <h2 className="text-2xl font-semibold text-gray-800 ">BCCI</h2>
          </div>
          <div className="md:ml-8 w-[50%]">
            <p className="text-gray-700 mb-2">
              The Board of Control for Cricket in India (BCCI) is the national
              governing body for cricket in India, established in December 1928.
              It is headquartered in Mumbai, Maharashtra, and has been
              affiliated with the International Cricket Council (ICC) since
              1929. The BCCI is one of the wealthiest and most powerful cricket
              boards globally, playing a crucial role in the administration and
              development of cricket in India.
            </p>
            <p>
              The BCCI is responsible for organizing domestic and international
              cricket matches in India, managing the Indian national cricket
              teams (men's, women's, and junior), and implementing cricketing
              policies and strategies. The board oversees the development of
              cricket infrastructure and facilities across the country and
              promotes grassroots cricket development programs to nurture young
              talent.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="text-center">
            <img
              src="/public/About/Roger_Binny.jpg"
              alt="Roger Binny"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
            />
            <h2 className="text-lg font-medium text-gray-800">Roger Binny</h2>
            <p>President</p>
          </div>
          <div className="text-center">
            <img
              src="/public/About/Amin.jpeg"
              alt="Hemang Amin"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
            />
            <h2 className="text-lg font-medium text-gray-800">Hemang Amin</h2>
            <p>CEO</p>
          </div>
          <div className="text-center">
            <img
              src="/public/About/RajeevShukla.jpg"
              alt="Rajeev Shukla"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
            />
            <h2 className="text-lg font-medium text-gray-800">Rajeev Shukla</h2>
            <p>Vice president</p>
          </div>
          <div className="text-center">
            <img
              src="/public/About/Jay.jpg"
              alt="Jay Shah"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
            />
            <h2 className="text-lg font-medium text-gray-800">Jay Shah</h2>
            <p>Secretary</p>
          </div>
          <div className="text-center">
            <img
              src="/public/About/AjitAgarkar.jpg"
              alt="Ajit Agarkar"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
            />
            <h2 className="text-lg font-medium text-gray-800">Ajit Agarkar</h2>
            <p>Chief Selector</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
