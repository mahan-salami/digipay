import React from 'react';
// فرض می‌کنیم ایمپورت‌های شما درست هستند
import B1 from '../assets/digi-pay-assets/sliderbanner/4f0046251c469e55491d8666633be6c1.webp';
import B2 from '../assets/digi-pay-assets/sliderbanner/27a38c1ecf6de08a483fd594af3d04f6.webp';
import B3 from '../assets/digi-pay-assets/sliderbanner/a89cfb607934c161190b04af3de6007f.webp';
import B4 from '../assets/digi-pay-assets/sliderbanner/db86dcd3d3a01148e6ce4aa2c077f923.webp';

const Banner = () => {
  return (
    <section className='w-full py-5 lg:px-35 md:px-20 '> {/* w-full برای ریسپانسیو بودن عرض و padding برای فضای اطراف */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-auto '> {/* تغییر اصلی در اینجا */}
        {/* هر آیتم یک ستون در حالت موبایل، دو ستون در تبلت و چهار ستون در دسکتاپ */}
        <div className='flex justify-center items-center'>
          <a href=""><img src={B1} className='max-w-65 h-auto mb-3' alt="" /></a>
        </div>
        <div className='flex justify-center items-center'>
          <a href=""><img src={B2} className='max-w-65 h-auto mb-3' alt="" /></a>
        </div>
        <div className='flex justify-center items-center'>
          <a href=""><img src={B3} className='max-w-65 h-auto mb-3' alt="" /></a>
        </div>
        <div className='flex justify-center items-center'>
          <a href=""><img src={B4} className='max-w-65 h-auto mb-3' alt="" /></a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
