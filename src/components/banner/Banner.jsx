import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Banner = () => {
  return (
    <Swiper className='rounded-[20px]' spaceBetween={30} slidesPerView={1} autoplay={{ delay: 1000 }}>
      <SwiperSlide>
        <img src="https://zon.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finverter_protech_desktop.ab03b610.webp&w=3840&q=75" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://zon.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpollwon_desktop.29ae1837.webp&w=3840&q=75" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://zon.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fresanta-desk.f316dc1c.webp&w=3840&q=75" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://zon.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdewalt_new_desktop.25f55bed.webp&w=3840&q=75" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://zon.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrown-desk.f24a79e4.webp&w=3840&q=75" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
