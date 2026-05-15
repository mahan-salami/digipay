import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import Image1 from '../assets/digi-pay-assets/sliderbanner/09daf5195144e302425196430a95e9c4.webp';
import Image2 from '../assets/digi-pay-assets/sliderbanner/5c0ed8bc8aab761768ab321d96f3ba7d.webp';
import Image3 from '../assets/digi-pay-assets/sliderbanner/bd57c2c63e62f158a2cb38788fee5a39.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroData = [
  { id: 1, img: Image1 },
  { id: 2, img: Image2 },
  { id: 3, img: Image3 },
];

const Slide = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // نمایش 3 اسلاید در هر زمان
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    centerMode: true, // فعال کردن حالت مرکزی برای اسلاید فعلی
    // تنظیم centerPadding برای ایجاد فضای خالی و نمایش بخشی از اسلایدهای کناری
    // مقدار "15%" را به عنوان نقطه شروع تنظیم کرده‌ام. ممکن است نیاز به تنظیم دقیق‌تر باشد.
    centerPadding: "20%",
    beforeChange: (oldIndex, newIndex) => setCurrent(newIndex),
    responsive: [
      {
        breakpoint: 1024, // اندازه تبلت
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "0%", // تنظیم padding برای تبلت
        }
      },
      {
        breakpoint: 768, // اندازه موبایل
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: false, // غیرفعال کردن حالت مرکزی برای موبایل
          centerPadding: "0px", // حذف padding برای موبایل
        }
      }
    ]
  };

  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8  max-w-340'>
      <div className='relative overflow-hidden rounded-3xl mt-10 '>

        {/* Arrows */}
        <div className="lg:hidden absolute top-1/2 right-3 transform -translate-y-1/2 z-10 cursor-pointer text-white text-4xl" onClick={nextSlide}>
          <IoIosArrowBack className="rotate-180" />
        </div>
        <div className="lg:hidden absolute top-1/2 left-3 transform -translate-y-1/2 z-10 cursor-pointer text-white text-4xl" onClick={prevSlide}>
          <IoIosArrowBack />
        </div>

        <Slider ref={sliderRef} {...settings}>
          {HeroData.map(({ id, img }) => (
            <div key={id} className='relative w-full h-[400px] sm:h-[500px] lg:h-[585px]'>
              <img
                src={img}
                alt={`Slide ${id}`}
                // برای اینکه عکس‌ها در حالت mode مرکزی به درستی نمایش داده شوند،
                // و فضای کناری آنها مشخص شود، کلاس‌های زیر اضافه شده‌اند:
                className='lg:h-100 lg:w-188 w-full h-full'
              />
            </div>
          ))}
        </Slider>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {HeroData.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 lg:-mt-38 rounded-full cursor-pointer transition-colors duration-300 ${
                current === index ? 'bg-black' : 'bg-gray-300'
              }`}
              onClick={() => sliderRef.current.slickGoTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
