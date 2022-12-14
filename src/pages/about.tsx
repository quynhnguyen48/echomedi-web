import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Image from 'next/image'
import { useRouter } from 'next/router'

const About = () => {
  let { locale } = useRouter();
  locale = locale ?? "";
  return <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className="pt-16 pb-8 relative h-72">
      <Image src="/banner.jpg" layout="fill" objectFit="cover" alt="me" className='object-fill h-48 relative'/>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 relative text-xl mx-60">
      {locale == "vi" ?<div className='p-20'>
<p>Hệ thống y tế ECHO MEDI bổ sung cho những phương pháp chăm sóc sức khoẻ truyền thống hiện nay thông qua bốn nền tảng: chăm sóc phòng ngừa, điều trị ban đầu, quản lý bệnh mạn tính và sức khoẻ toàn diện.

Chúng tôi đặc biệt đề cao việc phòng ngừa và tối ưu chất lượng cuộc sống cho các thành viên, góp phần thay đổi tư duy và áp dụng lối sống lành mạnh để ngăn ngừa bệnh tật, cải thiện sức khoẻ thể chất và tinh thần, hướng tới một sức khoẻ toàn diện.

ECHO MEDI tự hào với đội ngũ chuyên gia, bác sĩ, dược sĩ và điều dưỡng được đào tạo và làm việc tại các đơn vị hàng đầu trong và ngoài nước: Đại Học Y Khoa Wisconsin (Hoa Kỳ), Đại Học Y Dược TP Hồ Chí Minh, Đại Học Y Khoa Phạm Ngọc Thạch,… Bệnh Viện USC (Hoa Kỳ), Bệnh Viện Chợ Rẫy, Bệnh Viện Thống Nhất, Bệnh Viện Nhiệt Đới, Bệnh Viện 115…</p>
</div> : 
<div className='p-20'>
<p>ECHO MEDI’s healthcare system supplements to the current healthcare crisis management.

ECHO MEDI’s four pillars of healthcare system is to utilize a pathogenic and reactive approach, focusing on causes, consequences, diagnosis and treatment of diseases and injuries. We focus proactively on prevention as well as maximizing our members vitality, adopting attitudes and lifestyles that prevent disease, improve health, and enhance their quality of life and sense of wellbeing.

Besides, ECHO MEDI is proud to have a team of experts, doctors, pharmacists and nurses coming from leading domestic and foreign training institutions, for example, Milwaukee-Wisconsin Medical University, Ho Chi Minh City University of Medicine and Pharmacy, Pham Ngoc Thach Medical University, Ton Duc Thang University.</p>
</div>}
      <div className='relative p-20'>
        <Image 
        className='p-20'
        src="/water-fall.jpg" fill
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" alt='me'/>
      </div>
    </div>
    
  </Main>
};

export default About;
