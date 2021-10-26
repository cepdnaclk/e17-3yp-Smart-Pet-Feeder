import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";


const Home = () => {

    const handleDownload = (url) => {
        window.location.href = "https://github.com/cepdnaclk/e17-3yp-Smart-Pet-Feeder/raw/main/Mobile%20App%20APK/smart-pet-feeder.apk"
    }


    return (
        <section className="pt-0 pb-0" id="home">
            <div className="slider-bg flexslider">
                <ul className="slides">
                    <Swiper>
                        <SwiperSlide>
                            <div
                                className="slide-img"
                                style={{
                                    background: `url(${require("../../assets/images/background/home.jpg")}) center center / cover scroll no-repeat`,
                                }}
                            />
                            <div className={"hero-text-wrap "}>
                                <div className="hero-text white-color">
                                    <div className="container text-center">
                                        <h2 className="white-color font-500 letter-spacing-5">
                                            WELCOME TO
                                        </h2>
                                        <h1 className="white-color text-uppercase font-700">
                                            Smart Pet Feeder
                                        </h1>
                                        <h3 className="white-color font-400 fst-italic">
                                            saving one pet won't change the world, but for that one pet
                                            the world will change forever
                                        </h3>

                                        <div className="text-center mt-30">
                                            <div
                                                className={"btn btn-animate btn-circle btn-color"}
                                            >
                                                     <span onClick={handleDownload}>
                                                        Mobile App
                                                        <i className="icofont icofont-arrow-right"/>
                                                    </span>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </ul>
            </div>
        </section>
    )

};

export default Home;