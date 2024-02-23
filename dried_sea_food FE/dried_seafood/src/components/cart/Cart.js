import HomeHeader from "../home/HomeHeader";
import {HomeCarousel} from "../home/HomeCarousel";
import React from "react";
import {HomeFooter} from "../home/HomeFooter";
import squid1 from "../../img/squid/squid1.jpg"
import squid2 from "../../img/squid/squid2.jpg"
import squid3 from "../../img/squid/squid3.jpg"

export function Cart() {
    return (
        <>
            <HomeHeader/>
            <HomeCarousel/>
            <div className="container">
                <h2 className="text-center mt-3 mb-4 ">GIỎ HÀNG CỦA BẠN</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <table className="table table-hover">
                            <thead className="">
                            <tr className="text-center">
                                <th></th>
                                <th>SẢN PHẨM</th>
                                <th>GIÁ</th>
                                <th>SỐ LƯỢNG</th>
                                <th>TỔNG TIỀN</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody className="text-center fw-bold align-text-top">
                            <tr>
                                <td><img
                                    src={squid1}
                                    width="100" height="100"/>
                                </td>
                                <td className="text-start">
                                    <span>Mực Khô A5</span>
                                    {/*<span className="d-block">50 KG</span>*/}
                                </td>
                                <td>
                                    250.000 VNĐ
                                </td>
                                <td className=" align-items-center">
                                    <div className="d-flex justify-content-center row">
                                        <a href="#" className="col-5 text-end text-dark"><i
                                            className="fas fa-minus"></i></a>
                                        <input type="number" className="form-control-sm col-2 fw-bold text-center"
                                               value="1"/>
                                        <a href="#" className="col-5 text-start text-dark"><i
                                            className="fas fa-plus"></i></a>
                                    </div>
                                </td>
                                <td className="align-items-center">250.000 VNĐ</td>
                                <td className="align-items-center">
                                    <button className="btn btn-outline-danger"><i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><img
                                    src={squid2}
                                    width="100" height="100"/></td>
                                <td className="text-start">
                                    <span>Mực Khô A4</span>
                                    {/*<span className="d-block">(25 cái)</span>*/}
                                </td>
                                <td>
                                    180.000 VNĐ
                                </td>
                                <td>
                                    <div className=" d-flex justify-content-center row">
                                        <a href="#" className="col-5 text-end text-dark"><i
                                            className="fas fa-minus"></i></a>
                                        <input type="number" className="form-control-sm col-2 fw-bold text-center"
                                               value="1"/>
                                        <a href="#" className="col-5 text-start text-dark"><i
                                            className="fas fa-plus"></i></a>
                                    </div>

                                </td>
                                <td>
                                    180.000 VNĐ
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger"><i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><img src={squid3}
                                         width="100" height="100"/></td>
                                <td className="text-start">
                                    <span>Mực Khô A3</span>
                                    {/*<span className="d-block">(25 cái)</span>*/}
                                </td>
                                <td>
                                    300.000 VNĐ
                                </td>
                                <td>
                                    <div className=" d-flex justify-content-center row">
                                        <a href="#" className="col-5 text-end text-dark"><i
                                            className="fas fa-minus"></i></a>
                                        <input type="number" className="form-control-sm col-2 fw-bold text-center"
                                               value="1"/>
                                            <a href="#" className="col-5 text-start text-dark"><i
                                                className="fas fa-plus"></i></a>
                                    </div>
                                </td>
                                <td>
                                    300.000 VNĐ
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger"><i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <form>
                            <div className="d-flex mb-3">
                                <span className="fw-bold">Địa Chỉ</span>
                                <button type="button" className="ms-auto btn btn-secondary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </button>

                            </div>
                            <div className="fw-bold mb-3">
                                <span className="me-2">Nguyễn Đức Trung</span>|| <span className="ms-2">0905555666</span>
                            </div>
                            <div className="mb-5">
                                <span>Hải Châu, Tp Đà Nẵng</span>
                            </div>
                            <div className="mb-3 h5">
                                Tổng tiền: <span className="text-danger">630.000 VNĐ</span>
                            </div>
                            <button className="btn btn-outline-danger w-100">Thanh Toán</button>
                        </form>
                    </div>
                </div>

            </div>
            <HomeFooter/>
        </>
)

}