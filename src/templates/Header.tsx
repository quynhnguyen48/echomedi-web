import Head from "next/head";
import Link from "next/link";
import React, { Component } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'

const tranlsate = (s: string, locale: string) => {
  let result = "";
  switch (s) {
    case "about_em":
      if (locale === "en")
        return "About ECHO MEDI";
      else 
        return "Về ECHO MEDI";
      break;
    case "services":
      if (locale === "en")
        return "Services";
      else 
        return "Các Dịch Vụ";
      break;
    case "health_plans":
      if (locale === "en")
        return "Health Plans";
      else
        return "Gói Chăm Sóc";
      break;
    case "pharmacy":
      if (locale === "en")
        return "Pharmacy";
      else
        return "Nhà Thuốc";
      break;
    case "in_clinic_service":
      if (locale === "en")
        result = "In-Clinic Services";
      else
        result = "Dịch Vụ Tại Phòng Khám";
      break;
    case "preventive_care":
      if (locale === "en")
        result = "Preventive Care";
      else
        result = "Chăm Sóc Phòng Ngừa";
      break;
    case "primary_care":
      if (locale === "en")
        result = "Primary Care";
      else
        result = "Điều Trị Ban Đầu";
      break;
    case "on_going_care":
      if (locale === "en")
        result = "On-Going Care";
      else 
        result = "Quản Lý Bệnh Mạn Tính";
      break;
    case "wellness":
      if (locale === "en")
        result = "Wellness";
      else
        result = "Sức Khoẻ Toàn Diện";
      break;
    case "home_service":
      if (locale === "en")
        result = "Home Services";
      else
        result = "Dịch Vụ Tại Nhà";
      break;
    case "home_visits":
      if (locale === "en")
        result = "Home Visits";
      else
        result = "Chăm Sóc Tại Nhà";
      break;
    case "telemedicine":
      if (locale === "en")
        result = "Telemedicine";
      else
        result = "Chăm Sóc Từ Xa";
      break;
    case "vn_resident":
      if (locale === "en")
        result = "For Residents in Vietnam";
      else 
        result = "Khách Hàng Tại Việt Nam";
      break;
    case "non_vn_resident":
      if (locale === "en")
        result = "For Non-Residents (Overseas Vietnamese)";
      else 
        result = "Việt Kiều Ở Nước Ngoài";
      break;
    case "preventive_care_package":
      if (locale === "en")
        result = "Preventive Care Packages";
      else
        result = "Gói Chăm Sóc Phòng Ngừa";
      break;
    case "primary_care_package":
      if (locale === "en")
        result = "Primary Care Packages";
      else 
        result = "Gói Điều Trị Ban Đầu";
      break;
    case "on_going_care_package":
      if (locale === "en")
        result = "On-Going Care Packages";
      else
        result = "Gói Quản Lý Bệnh Mạn Tính";
      break;
    case "wellness_package":
      if (locale === "en")
        result = "Wellness Packages";
      else
        result = "Gói Sức Khoẻ Toàn Diện";
      break;
    case "gene_examination_package":
      if (locale === "en")
        result = "Gene Examination Packages";
      else
        result = "Gói Xét Nghiệm Di Truyền";
      break;
  }
  console.log('result', result)
  return result;
}

function MyApp({ }: {}) {
  const router = useRouter();
  let { locale } = useRouter();
  locale = locale ?? "";
  // const locale = locales.includes(nextRouter.locale || '')
  //   ? nextRouter.locale
  //   : defaultLocale;
  return (
    <div className='w-full'>
      <header className="flex items-center p-5 justify-around	">
        <Link href={'/'}>
          <Image src="/logo.png" width={200} height={100} alt="me" />
        </Link>
        <nav className="flex ml-10">
          <ul className="flex">
            {/* {navLinks.map((link, index) => {
              return (
                <Link href={link.path}>
                  <li className="p-5 text-black" key={index}>{link.name}</li>
                </Link>
              );
            })} */}
            <Link href={"/about"} className="flex">
              <li className="p-5 text-black font-bold" key={0}>{tranlsate("about_em", locale)}</li>
            </Link>
            <div className="flex">
              {/* <li className="p-5 text-black" key={0}>Các dịch vụ</li> */}
              <div className="relative group ">
                <button className="h-full flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                  <span className="mr-2">{tranlsate("services", locale)}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
                </button>
                <div className="absolute z-10 hidden bg-grey-200 group-hover:block bg-regal-blue" style={{ width: "550px" }}>
                  <div className="px-1 pt-1 pb-1 bg-regal-blue shadow-lg text-white">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 p-5 text-lg">
                      <div>
                        <p className="text-xl underline font-bold underline-offset-8">
                        {tranlsate("in_clinic_service", locale ? locale : "")}
                        </p>
                        <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/cham-soc-phong-ngua"}>
                          <p>
                            {tranlsate("preventive_care", locale)}
                          </p>
                        </Link>
                        <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/dieu-tri-ban-dau"}>
                        <p>
                          {tranlsate("primary_care", locale)}
                        </p>
                        </Link>
                        <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/quan-ly-benh-man-tinh"}>
                        <p>
                          {tranlsate("on_going_care", locale)}
                        </p>
                        </Link>
                        <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/suc-khoe-toan-dien"}>
                        <p>
                        {tranlsate("wellness", locale)}
                        </p>
                        </Link>
                      </div>
                      <div>
                      <p className="text-xl underline font-bold underline-offset-8">
                          {tranlsate("home_service", locale)}
                        </p>
                        <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/cham-soc-tai-nha"}>
                        <p>
                        {tranlsate("home_visits", locale)}
                        </p>
                        </Link>
                        <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/cham-soc-tu-xa"}>
                        <p>
                        {tranlsate("telemedicine", locale)}
                        </p>
                        </Link>
                        {/* <p>
                          {tranlsate("vn_resident", locale)}
                        </p>
                        <p>
                          {tranlsate("non_vn_resident", locale)}
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              {/* <li className="p-5 text-black" key={0}>Các dịch vụ</li> */}
              <div className="relative group">
                <button className="h-full flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                  <span className="mr-2">{tranlsate("health_plans", locale)}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
                </button>
                <div className="absolute z-10 hidden bg-grey-200 group-hover:block bg-regal-blue" style={{ width: "300px" }}>
                  <div className="px-1 pt-1 pb-1 bg-regal-blue shadow-lg text-white">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1 pl-5 text-lg">
                      <div>
                        <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/goi-cham-soc-phong-ngua"}>
                          <p>
                          {tranlsate("preventive_care_package", locale)}
                          </p>
                        </Link>
                        <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/goi-dieu-tri-ban-dau"}>
                        <p>
                        {tranlsate("primary_care_package", locale)}
                        </p>
                        </Link>
                        <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/goi-quan-ly-benh-man-tinh"}>
                        <p>
                        {tranlsate("on_going_care_package", locale)}
                        </p>
                        </Link>
                        <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/goi-suc-khoe-toan-dien"}>
                        <p>
                        {tranlsate("wellness_package", locale)}
                        </p>
                        </Link>
                        <Link className="p-5 text-white hover:text-slate-200 font-semibold" href={"/packages/goi-xet-nghiem-di-truyen"}>
                        <p>
                        {tranlsate("gene_examination_package", locale)}
                        </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="flex">
              {/* <li className="p-5 text-black" key={0}>Các dịch vụ</li> */}
              <div className="relative group">
                <button className="h-full flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
                  <span className="mr-2">{tranlsate("pharmacy", locale)}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
                </button>
                <div className="absolute z-10 hidden bg-grey-200 group-hover:block bg-regal-blue" style={{ width: "500px" }}>
                  <div className="px-2 pt-2 pb-4 bg-regal-blue shadow-lg text-white">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 p-5 text-lg">
                      <div>
                        <p className="text-xl underline underline-offset-4">
                          {/* Dịch vụ tại phòng khám */}
                          {tranlsate("in_clinic_service", locale ? locale : "")}
                        </p>
                        <Link className="p-5 text-white hover:text-slate-200" href={"/packages/cham-soc-phong-ngua"}>
                          <p>
                            Chăm sóc phòng ngừa
                          </p>
                        </Link>
                        <Link className="p-5 text-white hover:text-slate-200" href={"/packages/dieu-tri-ban-dau"}>
                        <p>
                          Điều trị ban đầu
                        </p>
                        </Link>
                        <Link className="p-5 text-white hover:text-slate-200" href={"/packages/quan-ly-benh-man-tinh"}>
                        <p>
                          Quản lý bệnh mãn tính
                        </p>
                        </Link>
                        <Link className="p-5 text-white hover:text-slate-200" href={"/packages/suc-khoe-toan-dien"}>
                        <p>
                          Sức khoẻ toàn diện
                        </p>
                        </Link>
                      </div>
                      <div>
                      <p className="text-xl underline">
                          Dịch vụ tại nhà
                        </p>
                        <Link className="p-5 text-white hover:text-slate-200" href={"/packages/cham-soc-tai-nha"}>
                        <p>
                          Chăm sóc tại nhà
                        </p>
                        </Link>
                        <Link className="p-5 text-white hover:text-slate-200" href={"/packages/cham-soc-tu-xa"}>
                        <p>
                          Chăm sóc từ xa
                        </p>
                        </Link>
                        <p>
                          Khách hàng tại Việt Nam
                        </p>
                        <p>
                          Việt kiều ở nước ngoài
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            {/* <Link href={"/"}>
              <li className="p-5 text-black" key={0}>Gói Chăm Sóc</li>
            </Link>
            <Link href={"/"}>
              <li className="p-5 text-black" key={0}>Nhà Thuốc</li>
            </Link> */}

          </ul>
        </nav>

        {/* <a>Tài Khoản</a>
        <button>Liên Hệ</button> */}
  {/* <span className="ml-3 text-sm font-medium text-black">Vietnamese</span> */}
  <div>
    
  </div>
  {/* <div>
  <Image src="/vietnam.png" width={25} height={25} alt="me" className="mr-2 inline align-top	"/>

        <label className="inline-flex relative items-center cursor-pointer">
          
          <input type="checkbox" value="" className="sr-only peer" onChange={(value) => {
            router.push(router.asPath, router.asPath, { locale: router.locale ==="en" ? "vi" : "en"})

          }}/>
          
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-250 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <Image src="/uk.png" width={25} height={25} alt="me" className="ml-2"/>
          
        </label>
        </div> */}
        <div className="lang"> 
        <div 
        >
        </div>
        <ul className="flex">
          <li className="inline mr-2 cursor-pointer" onClick={() => {
            router.push(router.asPath, router.asPath, { locale: "en"})
          }}>          <Image src="/uk.png" width={25} height={25} alt="me" className="ml-2"/>
          </li>
          <li className="inline cursor-pointer" onClick={() => {
            router.push(router.asPath, router.asPath, { locale: "vi"})
          }}>  <Image src="/vietnam.png" width={25} height={25} alt="me" className="mr-2 inline align-top	"/>
          </li>
        </ul>
      </div>
      </header>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
    </div>
  );
}

export default MyApp;