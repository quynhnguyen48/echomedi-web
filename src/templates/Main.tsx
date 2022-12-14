import type { ReactNode } from 'react';
import Header from './Header';
import { useRouter } from 'next/router'

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  let { locale } = useRouter();
  locale = locale ?? "";
  return <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}
    <Header />
    {/* <div className="mx-auto max-w-screen-md"> */}
    {props.children}
    {/* <div className="content py-5 text-xl">{props.children}</div> */}

    {locale == "vi" ? <div className="grid grid-cols-1 gap-1 md:grid-cols-3 relative text-xl text-white p-16 bg-regal-blue">
      <div className='relative'>
      </div>
      <div><h2>HỆ THỐNG ECHO MEDI</h2>

        <p>Hồ Chí Minh</p>
        <p>– Quận 7</p>
        <p>+ 1026 Nguyễn Văn Linh, P. Tân Phong, Quận 7.</p>
        <p>– Quận 2</p>
        <p>+ 46 Nguyễn Thị Định, P. An Phú, Quận 2.</p>

        <p>Bình Dương</p>
        <p>+ Canary Plaza, số 5 Đại lộ Bình Dương, Thuận Giao, Tp. Thuận An.</p>
      </div>
      <div>
        <p>CHÍNH SÁCH</p>
        <p>Chính Sách Bảo Mật</p>

        <p>LIÊN HỆ</p>
        <p>Hotline: 1900 638 408</p>
        <p>Email: contact@echomedi.com</p>

        <p>THỜI GIAN HOẠT ĐỘNG</p>

        <p>Thứ 2-  Thứ 7: 7:00 – 21:00</p>
        <p>Chủ Nhật: 7:00 – 15:00</p>

      </div>
    </div> : 
    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 relative text-xl text-white p-16 bg-regal-blue">
    <div className='relative'>
    </div>
    <div><h2>ECHO MEDI'S LOCATIONS</h2>

      <p>Ho Chi Minh City</p>
      <p> - District 7</p>
      <p> + 1026 Nguyen Van Linh, Tan Phong Ward, District 7.</p>
      <p> - District 2</p>
      <p> + 46 Nguyen Thi Dinh, An Phu Ward, District 2.</p>

      <p>Binh Duong</p>
      <p> + Canary Plaza, 5 Binh Duong Highway, Thuan Giao, Thuan An City.</p>
    </div>
    <div>
      <p>POLICY</p>
      <p>Privacy Policy</p>

      <p>CONTACT</p>
      <p>Hotline: 1900 638 408</p>
      <p>Email: contact@echomedi.com</p>

      <p>CLINIC HOURS</p>

      <p>Monday - Saturday: 7:00 – 21:00</p>
      <p>Sunday: 7:00 – 15:00</p>

    </div>
  </div>}
    {/* </div> */}
  </div>
};

export { Main };
