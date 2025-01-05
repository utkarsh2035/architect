import React from "react";
import { motion } from "framer-motion";

const sliderData = [
  {
    id: 1,
    text: "Modern Architecture Design",
    img: "https://media.timeout.com/images/103408770/image.jpg",
  },
  {
    id: 2,
    text: "Innovative Building Ideas",
    img: "https://media.architecturaldigest.com/photos/59a838a9a8a79c392f89eba2/master/w_5121,h_3414,c_limit/GettyImages-481686221.jpg",
  },
  {
    id: 3,
    text: "Sustainable Architecture",
    img: "https://images.adsttc.com/media/images/5255/c9ce/e8e4/4e67/bf00/06fa/large_jpg/th_65d1300db123ce22f6e2569fb36764f8_1271_opus_rend_10.jpg?1381353924",
  },
  {
    id: 4,
    text: "Futuristic Urban Spaces",
    img: "https://th.bing.com/th/id/OIP.ucQnoha8DDYIqcWu27TauAHaFS?w=600&h=429&rs=1&pid=ImgDetMain",
  },
];

const ImageSlider = () => {
  return (
    <div className="slider-container overflow-x-hidden snap-y snap-mandatory h-screen relative">
      {/* Animated Background */}
      <div className="absolute inset-0 z-[-1] bg-cover bg-center background-animation"></div>

      {/* Slider Content */}
      {sliderData.map((slide, index) => (
        <SliderItem
          key={slide.id}
          text={slide.text}
          img={slide.img}
          animationDirection={index % 2 === 0 ? "left" : "right"}
          swapPosition={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

const SliderItem = ({ text, img, animationDirection, swapPosition }) => {
  return (
    <motion.div
      className={`slider-item snap-start flex items-center justify-center w-full h-screen ${
        swapPosition ? "flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Text Section */}
      <motion.div
        className="text-section w-full md:w-1/2 p-8 text-center md:text-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{text}</h2>
        <p className="text-gray-600 text-lg">
          Explore cutting-edge designs and ideas that define the future of
          architecture.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="image-section w-full md:w-1/2 relative mx-5"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={img}
          alt={text}
          className="w-full h-full object-cover rounded-lg transition-transform duration-500"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ImageSlider;