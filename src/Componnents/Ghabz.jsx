import React from 'react'
import Ghabz1 from '../assets/digi-pay-assets/icon/ghabz.png'
import Kart from  '../assets/digi-pay-assets/icon/kart.png'
import Kif from '../assets/digi-pay-assets/icon/kif.png'
import Barc from '../assets/digi-pay-assets/icon/barc.png'
import Kheir from '../assets/digi-pay-assets/icon/kheir.png'
import Sharj from '../assets/digi-pay-assets/icon/sim.png'
import Inter from '../assets/digi-pay-assets/icon/inter.png'
import Av from '../assets/digi-pay-assets/icon/ha.png'
import Ir from '../assets/digi-pay-assets/icon/ir.png'
import ri from '../assets/digi-pay-assets/icon/ri.png'
import Bargh from '../assets/digi-pay-assets/icon/ba.png'
import Ab from '../assets/digi-pay-assets/icon/ab.png'
import Gaz from '../assets/digi-pay-assets/icon/gaz.png'
import tel from '../assets/digi-pay-assets/icon/tel.png'
import ham from '../assets/digi-pay-assets/icon/Screenshot 2026-04-15 at 21-49-56 خدمات دیجی‌پی.png'
import Ban1 from '../assets/digi-pay-assets/sliderbanner/1.webp'
import Box2 from '../assets/digi-pay-assets/sliderbanner/multi-box-heading-1.webp'
import Vam from '../assets/digi-pay-assets/icon/Vam.png'
import Kharid from '../assets/digi-pay-assets/icon/etebar.png'
import Aghsat from '../assets/digi-pay-assets/icon/aghsat.png'
import Butt from '../assets/digi-pay-assets/icon/button.png'
const Ghabz = () => {
  return (
    <section className='mx-auto'>
    <div className='mb-25 lg:ml-0 mx-auto '>
        <div className='flex sm:px-15 sm:mt-10 flex-col sm:h-120 sm:w-130 -py-70 bg-white lg:w-190 lg:h-140 lg:justify-end lg:items-end lg:ml-30 rounded-2xl shadow-2xl lg:-mt-20 mb-5 h-120 max-w-190 mx-auto'>
            <div className='flex flex-col  justify-center items-center text-center lg:justify-end lg:items-end lg:mr-10 lg:mb-7 '>
                <h1 className='mt-5'>خدمات پرداخت</h1>
              {/* خدمات پرداخت */}
              <div className='flex flex-row justify-center gap-10 '>
                  <div className='flex-col justify-center '>
                    <a href=""><img src={Kheir} className='w-18' alt="" /></a>
                    <h1 className='lg:ml-5'>خیریه</h1>
                 </div>


                 <div className='flex-col justify-center text-center'>
                    <a href=""><img src={Barc} className='w-18' alt="" /></a>
                    <h1>بارکدخوان</h1>
                 </div>

                <div className='flex-col justify-center text-center'>
                     <a href=""><img src={Kif} className='w-18' alt="" /></a>
                    <h1>مدیرت کیف پول</h1>
                 </div>


                <div className='flex-col justify-center text-center'>
                    <a href=""><img src={Kart} className='w-18' alt="" /></a>
                    <h1>کارت به کارت</h1>
                 </div>


               <div className='flex-col justify-center text-center'>
                    <a href=""><img src={Ghabz1} className='w-18' alt="" /></a>
                    <h1>پرداخت قبض</h1>
                 </div>
              </div>
            </div>


            {/* radife do */}
            <div className='flex flex-col mt-7  lg:justify-end lg:items-end lg:mr-10  lg:mb-5 lg:mt-5 justify-center items-center text-center'>
                <h1>خدمات موبایل</h1>
              {/* خدمات پرداخت */}
              <div className='flex flex-row justify-center gap-10 '>
                  <div className='flex-col justify-center text-center '>
                    <a href=""><img src={ri} className='w-18' alt="" /></a>
                    <h1 className='lg:ml-2 lg:mt-1'>قبض رایتل</h1>
                 </div>


                 <div className='flex-col justify-center text-center'>
                    <a href=""><img src={Ir} className='w-18' alt="" /></a>
                    <h1 className='lg:mt-1'>قبض ایرانسل</h1>
                 </div>

                <div className='flex-col justify-center text-center'>
                     <a href=""><img src={Av} className='w-18' alt="" /></a>
                    <h1 className='lg:-ml-1'>قبض همراه اول</h1>
                 </div>


                <div className='flex-col justify-center text-center'>
                    <a href=""><img src={Inter} className='w-18' alt="" /></a>
                    <h1>بسته اینترنت</h1>
                 </div>


               <div className='flex-col justify-center text-center '>
                    <a href=""><img src={Sharj} className='w-19' alt="" /></a>
                    <h1 className='lg:ml-3 lg:mt-0.5'>خرید شارژ</h1>
                 </div>
              </div>
            </div>

           {/* radife se */}
            <div className='flex flex-col justify-center items-center text-center lg:justify-end lg:items-end lg:mr-10 lg:mb-10'>
                <h1 className='mt-10'>قبوض خدماتی</h1>
              {/* خدمات پرداخت */}
              <div className='flex flex-row justify-center gap-10 '>
                  <div className='flex-col justify-center text-center'>
                    <a href=""><img src={ham} className='w-18' alt="" /></a>
                    <h1 className='lg:ml-2 lg:mt-1'>همراه اول</h1>
                 </div>


                 <div className='flex-col justify-center text-center'>
                    <a href=""><img src={tel} className='w-18' alt="" /></a>
                    <h1 className='lg:mt-1'>مخابرات</h1>
                 </div>

                <div className='flex-col justify-center text-center '>
                     <a href=""><img src={Gaz} className='w-18' alt="" /></a>
                    <h1 className=''>گاز</h1>
                 </div>


                <div className='flex-col justify-center text-center'>
                    <a href=""><img src={Bargh} className='w-18' alt="" /></a>
                    <h1>برق</h1>
                 </div>


               <div className='flex-col justify-center text-center '>
                    <a href=""><img src={Ab} className='w-19' alt="" /></a>
                    <h1 className=' lg:mt-0.5'>آب</h1>
                 </div>
              </div>
            </div>




        </div>













































            <div className='flex flex-col lg:-mt-144 lg:-ml-20 justify-center items-center'>
                <div className=' lg:ml-200 lg:w-82 lg:h-70 bg-white
                 sm:max-w-110 sm:mr-5 shadow-2xl
                 justify-start items-start max-w-[350px]
                  h-80 rounded-4xl'>
                     <img src={Box2} alt="" />

               <div className='flex lg:flex-col justify-center lg:mr-5'>

                     <div className='flex lg:flex-col lg:justify-end lg:items-end lg:mt-2 lg:mr-15
                     flex-col justify-end items-end mt-5'>
                        
                     <h1>وام خرید کالا</h1>
                     <p className='text-gray-500'>تا سقف ۱۰۰ میلیون
                                                    تومان</p>

                    <div className='lg:mr-50 lg:-mt-14 mr-50 -mt-10'>
                     <a href=""><img src={Butt} className='lg:w-8 lg:mt-5  ' alt="" /></a>
                    </div>
                  </div>
                   <div className=' flex justify-end items-end'>
                      <img src={Vam} className="lg:w-12  lg:-mt-13 w-12 ml-7"  alt="" />
                   </div>
               </div>



               {/*icon do*/}
               <div className='flex lg:flex-col justify-center lg:mr-5'>

                     <div className='flex lg:flex-col lg:justify-end lg:items-end lg:mt-2 lg:mr-15
                     flex-col justify-end items-end'>
                        
                     <h1>خرید اعتباری</h1>
                     <p className='text-gray-500'>پرداخت یک قسط و چهار قسط </p>

                    <div className='lg:mr-50 lg:-mt-14 mr-50 -mt-10'>
                     <a href=""><img src={Butt} className='lg:w-8 lg:mt-5  ' alt="" /></a>
                    </div>
                  </div>
                   <div className=' flex justify-end items-end'>
                      <img src={Kharid} className="lg:w-12  lg:-mt-13 w-12 ml-7"  alt="" />
                   </div>
               </div>


               {/*icon3*/}
               <div className='flex lg:flex-col justify-center lg:mr-5'>

                     <div className='flex lg:flex-col lg:justify-end lg:items-end lg:mt-2 lg:mr-15
                     flex-col justify-end items-end'>
                        
                     <h1>پرداخت اقساط</h1>
                     <p className='text-gray-500'>باز پرداخت بدهی</p>
                    <div className='lg:mr-50 lg:-mt-14 mr-50 -mt-10'>
                     <a href=""><img src={Butt} className='lg:w-8 lg:mt-5  ' alt="" /></a>
                    </div>
                  </div>
                   <div className=' flex justify-end items-end'>
                      <img src={Aghsat} className="lg:w-12  lg:-mt-13 w-12 ml-7"  alt="" />
                   </div>
               </div>

                </div>
                <div className=' lg:justify-start shadow-2xl
                lg:items-start lg:ml-195 lg:mt-5  justify-center items-center flex mt-10 sm:mt-5 '>
                    <img src={Ban1} className='lg:h-64 sm:h-80 h-70'  alt="" />
                </div>
            </div>
    </div>
    </section>
  )
}

export default Ghabz