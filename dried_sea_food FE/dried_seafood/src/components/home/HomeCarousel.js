import React from "react";
import slide1 from "../../img/slide/rong-nho-5.webp"
import slide2 from "../../img/slide/AM-THUC-TRA-VINH.00_03_15_06.Still019-scaled.jpg"
import slide3 from "../../img/slide/Black-Moon-Blog-Banner-69-1.png"

export function HomeCarousel() {
    return (
        <>
            <div className="container-fluid my-5">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                className="active"
                                aria-current="true" aria-label="Slide 1"/>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                aria-label="Slide 2"/>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                aria-label="Slide 3"/>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={5000}>
                            <img src={slide1} className="d-block w-100" height="540" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                            <img src={slide2} height="540"
                                 className="d-block w-100"
                                 alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slide3} className="d-block w-100" height="540"
                                 alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}