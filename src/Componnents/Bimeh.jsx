import React from 'react'
import Sales from '../assets/digi-pay-assets/icon/بیمه شخص ثالث.png'
import Bmob from '../assets/digi-pay-assets/icon/بیمه موبایل.png'
import Nameha from '../assets/digi-pay-assets/icon/بیمه نامه ها.png'
import Badane from '../assets/digi-pay-assets/icon/بیمه بدنه.png'

import Khalafi from '../assets/digi-pay-assets/icon/خلافی.png'
import Avarez from '../assets/digi-pay-assets/icon/عوارض.png'

import Sarmaye from '../assets/digi-pay-assets/icon/سرمایه گذاری.png'
import Sandogh from '../assets/digi-pay-assets/icon/صندوق.png'
import Stala from '../assets/digi-pay-assets/icon/س طلا.png'
import Tamin from '../assets/digi-pay-assets/icon/تامین.png'

import Butt from '../assets/digi-pay-assets/icon/button.png'
import Tala from '../assets/digi-pay-assets/sliderbanner/tala.webp' 
import Fardat from '../assets/digi-pay-assets/sliderbanner/fardat.png'
import Kimia from '../assets/digi-pay-assets/logo/kimiazarin.png'
import Lotus from '../assets/digi-pay-assets/logo/lotus.png'
import Saman from '../assets/digi-pay-assets/logo/neginsaman.png'
const Bimeh = () => {
  return (
    <section className='mx-auto'>
    <div className='mb-25 lg:ml-100 lg:mt-50'>
        <div className='flex sm:px-15 sm:mt-10 flex-col sm:h-140 sm:w-130 -py-70 bg-white lg:w-190 lg:h-140 lg:justify-end 
        lg:items-end lg:ml-30 rounded-2xl shadow-2xl lg:-mt-20 px-5 mb-5 h-140 max-w-190 mx-auto'>
            <div className='flex flex-col  justify-center items-center text-center lg:justify-end lg:items-end lg:mr-10 lg:mb-7 '>
                <h1 className='mt-5'>خدمات بیمه</h1>
              {/* خدمات پرداخت */}
              <div className='flex flex-row justify-center gap-10 '>


                 <div className='flex-col justify-center text-center'>
                    <a href=""><img src={Badane} className='w-18' alt="" /></a>
                    <h1>بیمه بدنه خودرو</h1>
                 </div>

                <div className='flex-col justify-center text-center'>
                     <a href=""><img src={Nameha} className='w-18' alt="" /></a>
                    <h1>بیمه نامه ها</h1>
                 </div>


                <div className='flex-col justify-center text-center'>
                    <a href=""><img src={Bmob} className='w-18' alt="" /></a>
                    <h1>بیمه موبایل</h1>
                 </div>


               <div className='flex-col justify-center text-center'>
                    <a href=""><img src={Sales} className='w-18' alt="" /></a>
                    <h1 className='mt-0.5 -ml-2'>بیمه شخص ثالث</h1>
                 </div>
              </div>
            </div>


            {/* radife do */}
            <div className='flex flex-col mt-7  lg:justify-end lg:items-end lg:mr-10  lg:mb-5 lg:mt-5 justify-center items-center text-center'>
                <h1>خدمات خودرو</h1>
              {/* خدمات پرداخت */}
              <div className='flex flex-row justify-center gap-10 '>



                 <div className='flex-col justify-center text-center'>
                    <a href=""><img src={Badane} className='w-18' alt="" /></a>
                    <h1 className='lg:mt-1'>بیمه بدنه خودرو</h1>
                 </div>

                <div className='flex-col justify-center text-center'>
                     <a href=""><img src={Sales} className='w-18' alt="" /></a>
                    <h1 className='lg:-ml-1'>بیمه شخص ثالث</h1>
                 </div>


                <div className='flex-col justify-center text-center'>
                    <a href=""><img src={Avarez} className='w-18' alt="" /></a>
                    <h1>عوارض جاده ای</h1>
                 </div>


               <div className='flex-col justify-center text-center '>
                    <a href=""><img src={Khalafi} className='w-19' alt="" /></a>
                    <h1 className=' lg:mt-0.5 '>خلافی</h1>
                 </div>
              </div>
            </div>

           {/* radife se */}
            <div className='flex flex-col justify-center items-center text-center lg:justify-end lg:items-end lg:mr-10 lg:mb-10'>
                <h1 className='mt-10'>مدیریت ثروت</h1>
              {/* خدمات پرداخت */}
              <div className='flex flex-row justify-center gap-10 '>

                 <div className='flex-col justify-center text-center'>
                    <a href=""><img src={Tamin} className='w-18' alt="" /></a>
                    <h1 className='lg:mt-1 -ml-3'>تامین مالی جمعی</h1>
                 </div>

                <div className='flex-col justify-center text-center '>
                     <a href=""><img src={Sarmaye} className='w-18' alt="" /></a>
                    <h1 className='-ml-1'>سرمایه گذاری طلا</h1>
                 </div>


                <div className='flex flex-col justify-center text-center'>
                    <a href=""><img src={Sandogh} className='lg:w-18 sm:w-15 sm:ml-5.5 lg:-ml-0.5 w-11 ml-4 ' alt="" /></a>
                    <h1 className='lg:w-27 lg:-ml-5'>صندوق های سرمایه گذاری طلا</h1>
                 </div>


               <div className='flex-col justify-center text-center '>
                    <a href=""><img src={Sarmaye} className='w-19' alt="" /></a>
                    <h1 className=' lg:mt-0.5'>سرمایه گذاری</h1>
                 </div>
              </div>
            </div>




        </div>













































            <div className='flex flex-col lg:-mt-144 lg:-ml-520 justify-center items-center'>
                <div className=' lg:ml-200 lg:w-82 lg:h-70 bg-white 
                 sm:max-w-127 sm:ml-4 sm:h-90 sm:mr-5 shadow-2xl
                 justify-start items-start max-w-[350px] 
                  h-80 rounded-4xl'>
                     <img src={Fardat} className='rounded-2xl' alt="" />

               <div className='flex lg:flex-col justify-center lg:mr-5'>

                     <div className='flex lg:flex-col lg:justify-end lg:items-end lg:mt-2 lg:mr-15
                     flex-col justify-end items-end mt-5'>
                        
                     <h1>کیمیا زرین کاردان گنج</h1>
                     <p className='text-gray-500'>سرمایه گذاری طلا</p>

                    <div className='lg:mr-50 lg:-mt-14 mr-50 -mt-10'>
                     <a href=""><img src={Butt} className='lg:w-8 lg:mt-5  ' alt="" /></a>
                    </div>
                  </div>
                   <div className=' flex justify-end items-end'>
                      <img src={Kimia} className="lg:w-12  lg:-mt-13 w-12 ml-7"  alt="" />
                   </div>
               </div>



               {/*icon do*/}
               <div className='flex lg:flex-col justify-center lg:mr-5'>

                     <div className='flex lg:flex-col lg:justify-end lg:items-end lg:mt-2 lg:mr-15
                     flex-col justify-end items-end'>
                        
                     <h1>پشتوانه طلا لوتوس </h1>
                     <p className='text-gray-500'>سرمایه گذاری طلا</p>

                    <div className='lg:mr-50 lg:-mt-14 mr-50 -mt-10'>
                     <a href=""><img src={Butt} className='lg:w-8 lg:mt-5  ' alt="" /></a>
                    </div>
                  </div>
                   <div className=' flex justify-end items-end'>
                      <img src={Lotus} className="lg:w-12  lg:-mt-13 w-12 ml-7"  alt="" />
                   </div>
               </div>


               {/*icon3*/}
               <div className='flex lg:flex-col justify-center lg:mr-5'>

                     <div className='flex lg:flex-col lg:justify-end lg:items-end lg:mt-2 lg:mr-15
                     flex-col justify-end items-end'>
                        
                     <h1>نگین سامان کارین</h1>
                     <p className='text-gray-500'>سرمایه گذاری با درآمد ثابت</p>
                    <div className='lg:mr-50 lg:-mt-14 mr-50 -mt-10'>
                     <a href=""><img src={Butt} className='lg:w-8 lg:mt-5  ' alt="" /></a>
                    </div>
                  </div>
                   <div className=' flex justify-end items-end'>
                      <img src={Saman} className="lg:w-12  lg:-mt-13 w-12 ml-7"  alt="" />
                   </div>
               </div>

                </div>
                <div className=' lg:justify-start shadow-2xl max-w
                lg:items-start lg:ml-195 lg:mt-5  justify-center items-center flex mt-7 sm:mt-5  '>
                    <img src={Tala} className='lg:h-64 sm:h-80 h-70'  alt="" />
                </div>
            </div>
    </div>
    </section>
  )
}

export default Bimeh