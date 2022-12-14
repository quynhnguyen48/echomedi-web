import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="pb-8 relative h-96">

        <p>ECHO MEDI mang đến cho các thành viên dịch vụ chăm sóc sức khoẻ đồng bộ và toàn diện mọi lúc, mọi nơi.
          Các thành viên của ECHO MEDI được theo sát và thiết kế dịch vụ chăm sóc sức khoẻ tổng quát tối ưu bởi đội ngũ tư vấn sức khoẻ cùng các chuyên gia y tế. Chính vì thế, bạn có thể yên tâm uỷ thác sức khoẻ của mình cho chúng tôi.</p>
        <h1>Chúng tôi mang lại gì?</h1>
        <p>Các thành viên của ECHO MEDI sẽ luôn được tiếp cận tất cả dịch vụ y tế và trợ giúp đặc biệt theo nhu cầu. Đồng nghĩa với việc luôn có một đội ngũ bác sĩ, dược sĩ và chuyên gia chăm sóc sức khỏe đồng hành với bạn 24/7</p>
      </div>
      <div className="columns-4	content-center">
        <a className="block" href="/packages/cham-soc-phong-ngua">
          <div className='inline-block'>
            <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="109" height="95" viewBox="0 0 109 95" fill="none"><path d="M98.9926 10.374C96.4313 7.82455 93.3902 5.80212 90.043 4.42228C86.6959 3.04245 83.1083 2.33224 79.4852 2.33224C75.8621 2.33224 72.2745 3.04245 68.9273 4.42228C65.5802 5.80212 62.5391 7.82455 59.9778 10.374L54.6622 15.6626L49.3465 10.374C44.1728 5.22667 37.1558 2.33491 29.8391 2.33491C22.5224 2.33491 15.5054 5.22667 10.3317 10.374C5.15804 15.5214 2.2515 22.5027 2.2515 29.7822C2.2515 37.0616 5.15804 44.043 10.3317 49.1903L15.6474 54.4789L54.6622 93.2952L93.6769 54.4789L98.9926 49.1903C101.555 46.642 103.588 43.6164 104.975 40.2863C106.362 36.9562 107.075 33.3868 107.075 29.7822C107.075 26.1775 106.362 22.6082 104.975 19.2781C103.588 15.9479 101.555 12.9223 98.9926 10.374V10.374Z" stroke="#426045" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <p className='text-center'>Chăm Sóc Phòng Ngừa</p>
          </div>
        </a>
        <a className="block" href="/packages/dieu-tri-ban-dau">
          <div className='inline-block'>
          <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="98" height="111" viewBox="0 0 98 111" fill="none"><path d="M81.0805 28.1515C81.0805 28.1515 55.2195 37.0712 50.1878 59.6952C50.1878 59.6952 48.7836 30.3962 16.0186 14.1518" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M67.3302 44.16C67.3302 44.16 78.8564 49.0038 85.9945 41.9744C93.1326 34.945 96.4091 22.0677 96.4091 22.0677C96.4091 22.0677 83.8296 14.6248 69.9631 18.0509C56.0965 21.4179 58.9049 43.1559 58.9049 43.1559" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M39.4216 47.763C39.4216 47.763 7.88534 46.877 5.77902 27.6199C3.67271 8.36292 6.77368 10.0759 1.85894 3.57816C1.85894 3.57816 29.8262 -1.85629 44.1023 11.3755C58.3199 24.6073 46.2086 44.7504 46.2086 44.7504" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.1347 108.842C62.5771 108.842 73.4744 97.8402 73.4744 84.2687C73.4744 70.6972 62.5771 59.6953 49.1347 59.6953C35.6922 59.6953 24.795 70.6972 24.795 84.2687C24.795 97.8402 35.6922 108.842 49.1347 108.842Z" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M49.134 71.5095V97.0281" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M36.4966 84.2686H61.8309" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <p className='text-center'>Điều Trị Ban Đầu</p>
          </div>
        </a>
        <a className="block" href="/packages/quan-ly-benh-man-tinh">
          <div className='inline-block'>
          <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="87" height="111" viewBox="0 0 87 111" fill="none"><path d="M67.1884 108.842H20.0659C10.2141 108.842 2.26141 100.923 2.26141 91.1138V20.2011C2.26141 10.3915 10.2141 2.47289 20.0659 2.47289H67.1884C77.0403 2.47289 84.9929 10.3915 84.9929 20.2011V91.1138C84.9929 100.923 77.0403 108.842 67.1884 108.842Z" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M43.4489 17.4826V46.0841" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.1579 60.7394H70.0965" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.1579 75.395H70.0965" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.1579 90.0502H45.7637" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.9861 24.6331L55.853 38.9339" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.9861 38.9339L55.853 24.6331" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <p className='text-center'>Quản Lý Bệnh Mãn Tính</p>
          </div>
        </a>
        <a className="block" href="/packages/suc-khoe-toan-dien">
          <div className='inline-block'>
          <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="110" height="93" viewBox="0 0 110 93" fill="none"><path d="M80.677 18.4535H97.5188C103.31 18.4535 108.037 23.1937 108.037 29.0004V80.431C108.037 86.2377 103.31 90.9779 97.5188 90.9779H12.1871C6.3959 90.9779 1.6684 86.2377 1.6684 80.431V29.0004C1.6684 23.1937 6.3959 18.4535 12.1871 18.4535H29.0289V13.2986C29.0289 7.2549 33.9927 2.33699 39.9612 2.33699H69.6855C75.7131 2.33699 80.6179 7.31415 80.6179 13.2986V18.4535H80.677Z" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M70.5129 18.5131H39.1931V15.7875C39.1931 13.3582 41.2023 11.3436 43.6251 11.3436H66.0217C68.4446 11.3436 70.4538 13.3582 70.4538 15.7875V18.5131H70.5129Z" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M63.1259 62.5373V68.4625C63.1259 70.7733 61.2349 72.6694 58.9303 72.6694H50.7162C48.4116 72.6694 46.5205 70.7733 46.5205 68.4625V62.5373H40.6111C38.3065 62.5373 36.4155 60.6412 36.4155 58.3304V50.1537C36.4155 47.8428 38.3065 45.9467 40.6111 45.9467H46.5205V40.0216C46.5205 37.7107 48.4116 35.8147 50.7162 35.8147H58.9303C61.2349 35.8147 63.1259 37.7107 63.1259 40.0216V45.9467H69.0353C71.34 45.9467 73.231 47.8428 73.231 50.1537V58.3304C73.231 60.6412 71.34 62.5373 69.0353 62.5373H63.1259Z" stroke="#426045" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <p className='text-center'>Sức Khoẻ Toàn Diện</p>
          </div>
        </a>
      </div>
    </Main>
  );
};

export default Index;
