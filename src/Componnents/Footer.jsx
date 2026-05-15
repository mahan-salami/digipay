import { FaTelegram, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/digi-pay-assets/logo/dp-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-white mt-10" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-12 ">
        {/* بخش لینک‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 text-sm">
          {/* ستون منابع */}
          <div>
            <h3 className="font-bold mb-4">درباره ما</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition duration-500">درباره دیجی‌پی</a></li>
              <li><a href="#" className="hover:text-blue-500 transition duration-500">گزارش سالانه</a></li>
              <li><a href="#" className="hover:text-blue-500 transition duration-500">فرصت‌های شغلی</a></li>
              <li><a href="#" className="hover:text-blue-500 transition duration-500">مجله اینترنتی دیجی‌پی</a></li>
              <li><a href="#" className="hover:text-blue-500 transition duration-500">مستندات فنی</a></li>

            </ul>
          </div>

          {/* ستون زرین‌پال */}
          <div>
            <h3 className="font-bold mb-4">خدمات ما</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition duration-500">خدمات ویژه مالی</a></li>
              <li><a href="#" className="hover:text-blue-500 transition duration-500">فروشگاه‌ها</a></li>


            </ul>
          </div>

          {/* ستون خدمات بیشتر */}
          <div>
            <h3 className="font-bold mb-4">خدمات مشتریان </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition duration-500">سوالات متداول</a></li>
              <li><a href="#" className="hover:text-blue-500 transition duration-500">قوانین و مقررات</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition duration-500">تماس با ما</a></li>
            </ul>
          </div>
        </div>

        <div
          className=" border-gray-300 px-6 sm:px-12 lg:px-20 py-6"
          dir="ltr"
        >
          {/* بخش بالا: قوانین و شبکه‌های اجتماعی */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-300 pb-4 mt-10">
            {/* قوانین */}


            {/* شبکه‌های اجتماعی */}
            <div className="flex gap-4 text-xl text-gray-700">
              <a href="#" className="hover:hover:text-blue-500 transition duration-500"><FaLinkedin /></a>
              <a href="#" className="hover:hover:text-blue-500 transition duration-500"><FaTelegram /></a>
              <a href="#" className="hover:hover:text-blue-500 transition duration-500"><FaInstagram /></a>
              <a href="#" className="hover:hover:text-blue-500 transition duration-500"><FaXTwitter /></a>
            </div>
            <div className="flex items-center gap-2">
              <img src={Logo} alt="TALINE " className="h-6" />
            </div>
          </div>

          {/* بخش پایین: لوگو + نماد + انتخاب زبان */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6">
            {/* لوگو */}



          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="flex flex-col justify-center items-center text-center">
           <p>آدرس: تهران، خیابان ملاصدرا، خیابان شیخ بهایی شمالی، نبش لادن، پلاک ۸۵ </p>
           <p>شماره تماس: 02153924000</p>
        </div>
        <p className="mt-44 md:mt-10 justify-center text-center">کلیه حقوق این وبسایت متعلق به دیجی پی می باشد </p>
      </div>
    </footer>
  );
}
