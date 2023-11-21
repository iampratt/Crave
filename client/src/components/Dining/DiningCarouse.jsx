import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import PosterCard from '../PosterCard';

function DiningCarouse() {
  const [items, setItem] = useState([
    {
      image:
        'https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708807.jpg',
      title: 'Newly Opened',
      places: '4 Places',
    },
    {
      image:
        'https://content3.jdmagicbox.com/comp/jaipur/a7/0141px141.x141.130626145026.s2a7/catalogue/manipal-university-jaipur-gpo-jaipur-mba-institutes-jeigp729w8.jpg',
      title: 'Best of MUJ',
      places: '36 Places',
    },
    {
      image:
        'https://b.zmtcdn.com/data/collections/174480faee1a4a2c0f0fdd82cac5d8a5_1647240902.jpg',
      title: 'Trending This Weak',
      places: '20 Places',
    },
    {
      image:
        'https://blog.pureindianfoods.com/wp-content/uploads/2018/10/indian-samosas.jpg',
      title: 'Budget Food',
      places: '16 Places',
    },
    {
      image:
        'https://b.zmtcdn.com/data/collections/9d8fe0107063fddcd78818af5fbe2146_1647245872.jpg',
      title: 'Most Popular Restraunt',
      places: '10 Places',
    },
  ]);
  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    modules: [Navigation],
    className: 'posterSwiper',
    navigation: true,
  };
  return (
    <div className='lg:px-24 px-4'>
      <Swiper {...slideConfig}>
        {items.map((item) => (
          <SwiperSlide>
            <PosterCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DiningCarouse;
