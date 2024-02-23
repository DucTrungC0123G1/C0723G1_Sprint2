import React from "react";
import HomeHeader from "../home/HomeHeader";
import {HomeCarousel} from "../home/HomeCarousel";
import {HomeFooter} from "../home/HomeFooter";
import squid1 from "../../img/squid/squid1.jpg"

export function ProductDetail() {
    return (
        <>
            <HomeHeader/>
            <HomeCarousel/>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img width="600px" height="500px" src={squid1} className="img-fluid"
                             alt="Product Image"/>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="fw-bold">Mực Khô A5</h2>
                        <p className="text-muted">Danh Mục Sản Phẩm</p>
                        <h3 className="my-4">250.000 VNĐ/KG</h3>
                        <p className="mb-4">Mực khô loại lớn là mực câu chính gốc của vùng biển Tam Hải - Quảng Nam.
                            Sản phẩm làm từ mực lá được xẻ phơi trực tiếp ngay trên tàu, phơi qua 5 -7 nắng giòn, đảm bảo hoàn toàn khô ráo,
                            thịt có vị ngọt lịm tự nhiên, hương vị thơm ngon và có độ dai vừa phải</p>
                        <div className="d-flex gap-3 mb-4">
                            <input type="number" className="form-control" value="0" style={{maxWidth: "80px"}}/>
                            <button className="btn btn-primary" type="button">Thêm Vào Giỏ Hàng</button>
                        </div>
                    </div>
                </div>
                <ul className="nav nav-tabs mt-5" id="productTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="description-tab" data-bs-toggle="tab"
                                data-bs-target="#description"
                                type="button" role="tab" aria-controls="description" aria-selected="true">Mô Tả
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="specs-tab" data-bs-toggle="tab" data-bs-target="#specs"
                                type="button"
                                role="tab" aria-controls="specs" aria-selected="false">Kích Cỡ
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews"
                                type="button"
                                role="tab" aria-controls="reviews" aria-selected="false">Bình Luận
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="productTabContent">
                    <div className="tab-pane fade show active" id="description" role="tabpanel"
                         aria-labelledby="description-tab">
                        <p className="mt-3">
                            Sản phẩm bảo quản trong tủ đông giữ được 12 tháng.  Thích hợp dùng cho ngày lễ, Tất Niên, Tết. Món ăn cả gia đình đều yêu thích hoặc quà biếu sang trọng, thiết thực.
                            Thành phần - quy trình mực khô:
                            Mực tươi 100% được đánh bắt tại vùng biển Phan Thiết . Mực lá được làm sạch nội tạng, phơi khô. Kiểm tra, cho vào bao bì , bảo quản -18 độ C .
                            Sau khi đánh bắt những con mực còn tươi rói, người ta sẽ xẻ và làm sạch con mực, chỉ để lại phần thân và phần đầu rồi đem phơi nắng cho đến khi con mực trở nên khô và thơm đặc trưng hương vị biển.
                            Thành phần dinh dưỡng trong Mực khô :100g ăn được của mực khô: 291 calo, 32,6g nước, 60,1g chất đạm, 4,5g chất béo, 2,5g chất đường bột, 0g chất xơ. Trong mực có chứa một số chất khoáng vi lượng rất quý như sắt, kẽm, mangan, selen... và cả hormon nam testosterone.
                        </p>
                    </div>
                    <div className="tab-pane fade" id="specs" role="tabpanel" aria-labelledby="specs-tab">
                        <table className="table mt-3">
                            <tr>
                                <th>Weight</th>
                                <td>1kg</td>
                            </tr>
                            <tr>
                                <th>Dimensions</th>
                                <td>10 x 20 x 5 cm</td>
                            </tr>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                        <div className="mt-3">
                            <h5>John Doe</h5>
                            <p>I loved this product! It really changed the way I work.</p>
                            <h5>Jane Smith</h5>
                            <p>Great quality and excellent after-sales service.</p>

                        </div>
                    </div>
                </div>
            </div>
            <HomeFooter/>
        </>
    )

}