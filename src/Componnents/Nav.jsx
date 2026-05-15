import React, { useState } from 'react';
import Digi from '../assets/digi-pay-assets/logo/logo1.svg'
import HomeIcon from '../assets/digi-pay-assets/icon/Home.svg'
import ShopIcon from '../assets/digi-pay-assets/icon/Category.svg'
import PayIcon from '../assets/digi-pay-assets/icon/Wallet.svg'
import ContactIcon from '../assets/digi-pay-assets/icon/Bag.svg'
const Nav = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ======== بالا navbar (ثابت و بدون تغییر جایگاه) ======== */}
      <div className="w-full mb-4">
        {/* لوگو */}
        <div className="flex justify-center lg:justify-end lg:mt-10 lg:mr-60 mt-10">
          <img src={Digi} className="w-20 mb-2" alt="logo" />
        </div>

        {/* منوی بالایی */}
        <div className="flex justify-center lg:justify-end lg:ml-44 lg:-mt-5" dir="rtl">
          <ul className="flex gap-6 lg:gap-10 text-sm lg:text-base">
            <li className="hover:text-blue-500 transition"><a href="#">وام و اعتبار </a></li>
            <li className="hover:text-blue-500 transition"><a href="#">بیمه</a></li>
            <li className="hover:text-blue-500 transition"><a href="#">مدیریت سرمایه </a></li>
            <li className="hover:text-blue-500 transition"><a href="#">خدمات کسب و کارها </a></li>
            <li className="hover:text-blue-500 transition"><a href="#">خدمات سازمانی</a></li>
            <li className="hover:text-blue-500 transition"><a href="#">ورود / ثبت نام </a></li>
          </ul>
        </div>
      </div>

      {/* ======== navbar اصلی ======== */}
      <nav
        className="flex  items-center justify-between px-18 lg:ml-25 lg:max-w-[1320px] sticky top-0 z-50 h-18 
                   bg-white shadow-[3px_8px_44px_14px_rgba(0,0,0,0.1)] rounded-4xl"
        dir="rtl"
      >
        {/* لینک‌های دسکتاپ */}
        <ul className="hidden lg:flex items-center gap-7 py-4">
  <li className="flex items-center gap-2 hover:text-blue-500 transition cursor-pointer">
    <img src={HomeIcon} className="w-5 h-5" alt="" />
    <a href="#home">خانه</a>
  </li>

  <li className="flex items-center gap-2 hover:text-blue-500 transition cursor-pointer">
    <img src={ShopIcon} className="w-5 h-5 transition group-hover:brightness-0 group-hover:invert" alt="" />
    <a  className="transition group-hover:text-blue-500" href="#rules">فروشگاه</a>
  </li>

  <li className="flex items-center gap-2 hover:text-blue-500 transition cursor-pointer">
    <img src={PayIcon} className="w-5 h-5" alt="" />
    <a href="#about">پرداخت</a>
  </li>

  <li className="flex items-center gap-2 hover:text-blue-500 transition cursor-pointer">
    <img src={ContactIcon} className="w-5 h-5" alt="" />
    <a href="#contact">تماس با ما</a>
  </li>
</ul>

        {/* آیکون منوی موبایل + قرارگیری کنار آیکون‌ها */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>

        {/* سرچ */}
        <div className="flex">
          <input 
            className="bg-gray-100 w-40 sm:w-56 md:w-72 lg:w-80 h-10 rounded-4xl px-4"
            type="text"
            placeholder="جستجو"
          />
        </div>
      </nav>

      {/* ======== منوی بازشونده موبایل ======== */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white rounded-b-lg shadow-lg py-3 px-6" dir="rtl">
          <ul className="flex flex-col gap-4 text-center">
            <li><a href="#home" className="block py-2 hover:text-blue-500">صفحه اصلی</a></li>
            <li><a href="#blog" className="block py-2 hover:text-blue-500">وبلاگ</a></li>
            <li><a href="#rules" className="block py-2 hover:text-blue-500">قوانین و مقررات</a></li>
            <li><a href="#about" className="block py-2 hover:text-blue-500">درباره طلاین</a></li>
            <li><a href="#contact" className="block py-2 hover:text-blue-500">تماس با ما</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
