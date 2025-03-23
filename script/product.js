const thumSwiper = new Swiper('.thum_swiper',{
    slidesPerView:4,
    slidesPerGroup:4,
    speed:1000,
    navigation:{
        prevEl:'.photo_wrap .prev',
        nextEl:'.photo_wrap .next',
    },
});

const reviewSwiper = new Swiper('.photo_swiper .review_swiper',{
    slidsePerView:5.4,
    slidesPerGroup:5.4,
    spaceBetween:20,
    speed:1000,
});