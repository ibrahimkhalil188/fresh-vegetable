import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
const Reviews = () => {
    const success =
        [
            {
                "id": "1",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "2",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "13",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "14",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "15",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "16",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "17",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "18",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "19",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            }
        ]

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>REVIEW</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
                className="mySwiper"
            >

                {
                    success.map(s => <SwiperSlide key={s.id}>
                        <div>
                            <div>
                                <Image height="220px" width="355px" src={s.image} alt="" />
                                <div>
                                    <p>{s.name}</p>
                                    <p>{s.university}</p>
                                    <p>{s.position}</p>
                                    <p>{s.department}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Reviews;