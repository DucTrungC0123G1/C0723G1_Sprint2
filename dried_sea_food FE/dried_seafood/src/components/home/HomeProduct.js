import squid1 from "../../img/squid/squid1.jpg"
import squid2 from "../../img/squid/squid2.jpg"
import squid3 from "../../img/squid/squid3.jpg"
import squid4 from "../../img/squid/squid4.jpg"
import squid5 from "../../img/squid/squid5.jpg"
import squid6 from "../../img/squid/squid6.jpg"
import squid7 from "../../img/squid/squid7.jpg"
import squid8 from "../../img/squid/squid8.jpg"
import squid9 from "../../img/squid/squid9.jpg"
import squid10 from "../../img/squid/squid10.jpg"
import React from "react";
export function HomeProduct() {
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div><p className="fs-1 fw-bold">Hải Sản Khô</p></div>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/*Product image*/}
                                <img className="card-img-top" width="450px" height="300px"
                                     src={squid1}
                                     alt="..."/>
                                {/*Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 id="text-limit" className="fw-bolder">Mực Khô A5</h5>
                                        250.000 VNĐ/KG
                                    </div>
                                </div>
                               {/*Product actions*/}
                                <div className="card-footer gap-2 d-flex justify-content-center p-4 pt-0 border-top-0 bg-transparent ">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/product-detail">Chi
                                        Tiết</a></div>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Giỏ Hàng</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                             {/*Sale badge*/}
                                <div className="badge bg-danger text-white position-absolute"
                                     style={{top: "0.5rem",right: "0.5rem"}}>Sale
                                </div>
                                {/*Product image*/}
                                <img className="card-img-top" width="450px" height="300px"
                                     src={squid2}
                                     alt="..."/>
                                {/*Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/*// <!-- Product name-->*/}
                                        <h5 className="fw-bolder">Mực Khô A4</h5>
                                        {/*// <!-- Product reviews-->*/}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/*// <!-- Product price-->*/}
                                        <span className="text-muted text-decoration-line-through">200.000  </span>
                                        180.000 VNĐ/KG
                                    </div>
                                </div>
                                {/*// <!-- Product actions-->*/}
                                <div className="card-footer gap-2 d-flex justify-content-center p-4 pt-0 border-top-0 bg-transparent ">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Chi
                                        Tiết</a></div>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Giỏ Hàng</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/*// <!-- Sale badge-->*/}
                                <div className="badge bg-dark text-white position-absolute"
                                     style={{top: "0.5rem",right: "0.5rem"}}>Sale
                                </div>
                                {/*// <!-- Product image-->*/}
                                <img className="card-img-top" width="450px" height="300px"
                                     src={squid3} alt="..."/>
                                {/*// <!-- Product details-->*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/*// <!-- Product name-->*/}
                                        <h5 className="fw-bolder">Mực Khô A3</h5>
                                        {/*// <!-- Product price-->*/}
                                        <span className="text-muted text-decoration-line-through">350.000  </span>
                                        300.000 VNĐ/KG
                                    </div>
                                </div>
                                {/*// <!-- Product actions-->*/}
                                <div className="card-footer gap-2 d-flex justify-content-center p-4 pt-0 border-top-0 bg-transparent ">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Chi
                                        Tiết</a></div>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Giỏ Hàng</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/*// <!-- Product image-->*/}
                                <img className="card-img-top" width="450px" height="300px"
                                     src={squid4} alt="..."/>
                                {/*// <!-- Product details-->*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/*// <!-- Product name-->*/}
                                        <h5 className="fw-bolder">Mực Khô A5</h5>
                                        {/*// <!-- Product reviews-->*/}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/*// <!-- Product price-->*/}
                                        300.000 VNĐ/KG
                                    </div>
                                </div>
                                {/*// <!-- Product actions-->*/}
                                <div className="card-footer gap-2 d-flex justify-content-center p-4 pt-0 border-top-0 bg-transparent ">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Chi
                                        Tiết</a></div>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Giỏ Hàng</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/*// <!-- Sale badge-->*/}
                                <div className="badge bg-dark text-white position-absolute"
                                     style={{top: "0.5rem",right: "0.5rem"}}>Sale
                                </div>
                                {/*// <!-- Product image-->*/}
                                <img className="card-img-top" width="450px" height="300px"
                                     src={squid5} alt="..."/>
                                {/*// <!-- Product details-->*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/*// <!-- Product name-->*/}
                                        <h5 className="fw-bolder">Mực Một Nắng</h5>
                                        {/*// <!-- Product price-->*/}
                                        <span className="text-muted text-decoration-line-through">400.000  </span>
                                        300.000 VNĐ/KG
                                    </div>
                                </div>
                                {/*// <!-- Product actions-->*/}
                                <div className="card-footer gap-2 d-flex justify-content-center p-4 pt-0 border-top-0 bg-transparent ">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Chi
                                        Tiết</a></div>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Giỏ Hàng</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" width="450px" height="300px"
                                     src={squid6} alt="..."/>

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Mực Khô A6</h5>
                                        450.000 VNĐ/KG
                                    </div>
                                </div>

                                <div className="card-footer gap-2 d-flex justify-content-center p-4 pt-0 border-top-0 bg-transparent ">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Chi
                                        Tiết</a></div>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Giỏ Hàng</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <div className="badge bg-dark text-white position-absolute"
                                     style={{top: "0.5rem",right: "0.5rem"}}>Sale
                                </div>

                                <img className="card-img-top" width="450px" height="300px"
                                     src={squid7} alt="..."/>

                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Mực Hai Nắng</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        <span className="text-muted text-decoration-line-through">250.000  </span>
                                        220.000 VNĐ/KG
                                    </div>
                                </div>
                                <div className="card-footer gap-2 d-flex justify-content-center p-4 pt-0 border-top-0 bg-transparent ">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Chi
                                        Tiết</a></div>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Giỏ Hàng</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" width="450px" height="300px"
                                     src={squid8} alt="..."/>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Mực Khô A7</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        350.000 VNĐ/KG
                                    </div>
                                </div>
                                <div className="card-footer gap-2 d-flex justify-content-center p-4 pt-0 border-top-0 bg-transparent ">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Chi
                                        Tiết</a></div>
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Giỏ Hàng</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}