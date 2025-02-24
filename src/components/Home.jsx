import React, { useState, useEffect } from "react";
import { shoes } from "../constants/index"; // Keeping only necessary imports
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Home = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % shoes.length;
    setCurrentIndex(newIndex);
    setBigShoeImg(shoes[newIndex].bigShoe);
  };

  // Statistics data directly inside Home.jsx
  const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
  ];

  // Helper function to convert value with suffixes (like 1k, 250k) to number
  const parseValue = (value) => {
    const match = value.match(/(\d+)([a-zA-Z]+)/); // Match number and suffix (e.g., 1k)
    if (match) {
      const number = parseInt(match[1], 10); // The numeric part
      const suffix = match[2].toLowerCase(); // The suffix (e.g., k, m)
      switch (suffix) {
        case 'k': return number * 1000;
        case 'm': return number * 1000000;
        default: return number;
      }
    }
    return 0;
  };

  // State for statistics counter
  const [countValues, setCountValues] = useState(
    statistics.map((stat) => ({
      value: 0,
      target: parseValue(stat.value), // Convert the value to a number
    }))
  );

  useEffect(() => {
    const counters = statistics.map((stat, index) => {
      const target = countValues[index].target;
      const increment = Math.ceil(target / 100); // Increment by small values

      const interval = setInterval(() => {
        setCountValues((prev) => {
          const newValues = [...prev];
          if (newValues[index].value < newValues[index].target) {
            newValues[index].value += increment;
            if (newValues[index].value >= newValues[index].target) {
              newValues[index].value = newValues[index].target;
              clearInterval(interval); // Stop once target is reached
            }
          }
          return newValues;
        });
      }, 30); // Adjust the speed of counting

      return interval;
    });

    return () => {
      counters.forEach(clearInterval); // Cleanup on component unmount
    };
  }, [countValues]);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 px-6 md:px-10 lg:px-16"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-0">
        <p className="text-black font-bold lg:text-[40px] sm:text-[35px] xs:text-[30px] text-[25px] lg:leading-[50px]">
          Our Summer collections
        </p>

        <h1 className="font-black text-black lg:text-[100px] sm:text-[80px] xs:text-[70px] text-[60px] lg:leading-[110px] mt-2">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New</span>
          <br />
          <span className="text-[#ffd700] inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-black text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>

        <div className="flex justify-start items-start flex-wrap w-full mt-2 gap-16">
          {countValues.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">
                {stat.value}+
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistics[index].label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Big Shoe Image Section */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-10 vibrant-gold-gradient bg-opacity-50 bg-cover bg-center mt-0 pt-0">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={502}
          className="object-contain relative z-10 max-w-full sm:w-2/3 md:w-1/2 lg:w-2/3 w-1/3"
        />

        {/* Navigation Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-5 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <img src={arrowRight} alt="Next" className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Home;