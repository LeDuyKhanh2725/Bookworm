
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
                <Card className='col-md-3 me-3' style={{ width: '18rem' }}>
                    <Card.Img height={'250px'} variant="top" src={"/bookcover/" + item.book_cover_photo + ".jpg"} />
                    <Card.Body>
                        <Card.Title height={'50px'}>{item.book_title}</Card.Title>
                        <Card.Text height={'50px'}>
                            {item.author_name}
                        </Card.Text>
                        <Card.Text height={'50px'}>
                            {item.book_price}/{item.discount_price}
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
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
