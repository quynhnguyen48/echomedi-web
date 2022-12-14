import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Image from 'next/image'

const Services = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className="pt-16 pb-8 relative">
      <Image src="/banner.jpg" layout="fill" objectFit="cover" alt="me"/>
    </div>
    <div className="pt-16 pb-8 relative content py-5 text-xl">
    <p>Hệ thống y tế ECHO MEDI bổ sung cho những phương pháp chăm sóc sức khoẻ truyền thống hiện nay thông qua bốn nền tảng: chăm sóc phòng ngừa, điều trị ban đầu, quản lý bệnh mạn tính và sức khoẻ toàn diện.

Chúng tôi đặc biệt đề cao việc phòng ngừa và tối ưu chất lượng cuộc sống cho các thành viên, góp phần thay đổi tư duy và áp dụng lối sống lành mạnh để ngăn ngừa bệnh tật, cải thiện sức khoẻ thể chất và tinh thần, hướng tới một sức khoẻ toàn diện.

ECHO MEDI tự hào với đội ngũ chuyên gia, bác sĩ, dược sĩ và điều dưỡng được đào tạo và làm việc tại các đơn vị hàng đầu trong và ngoài nước: Đại Học Y Khoa Wisconsin (Hoa Kỳ), Đại Học Y Dược TP Hồ Chí Minh, Đại Học Y Khoa Phạm Ngọc Thạch,… Bệnh Viện USC (Hoa Kỳ), Bệnh Viện Chợ Rẫy, Bệnh Viện Thống Nhất, Bệnh Viện Nhiệt Đới, Bệnh Viện 115…</p>
    </div>
  </Main>
);

export default Services;
