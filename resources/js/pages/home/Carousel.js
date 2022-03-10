
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Button, Card } from "react-bootstrap";

export default function Carousel({ list }) {


    const renderListItem = (list = []) => {
        return list.map((item) => {
            return (<SwiperSlide >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"/bookcover/" + item.book_cover_photo + ".jpg"} />
                    <Card.Body>
                        <Card.Title>{item.book_title}</Card.Title>
                        <Card.Text>
                            {item.author_name}
                        </Card.Text>
                        <Button variant="primary">{item.book_price}/{item.discount_price}</Button>
                    </Card.Body>
                </Card>
            </SwiperSlide>)
        })
    }

    return (
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            {renderListItem(list)}
            </Swiper>
        </>
    );
}
