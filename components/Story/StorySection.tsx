import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Story from "./Story";
import "swiper/css/scrollbar";
import { testimonials } from "@/public/testimonials";

const StorySection = () => {
  return (
    <div className="m-7 lg:p-7 lg:m-10 bg-[#28322b]  rounded-3xl">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper p-8 bg-[#fff]  rounded-3xl"
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.key as React.Key}>
            <SwiperSlide>
              <Story
                body={testimonial.body}
                designation={testimonial.designation}
                imagePath={testimonial.imagePath}
                quotation={testimonial.quotation}
                key={testimonial.key as React.Key}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default StorySection;
