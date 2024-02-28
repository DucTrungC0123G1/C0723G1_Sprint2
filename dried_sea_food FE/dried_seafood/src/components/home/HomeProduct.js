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
import React, {useEffect, useState} from "react";
import {getAllTypeProduct} from "../../services/products/TypeProduct";
import {getAllProduct, showMsgWarning} from "../../services/products/Products";
import {map} from "async";
import Pagination from "../pagination/Pagination";

export function HomeProduct() {

    const [products, setProducts] = useState([]);
    // const [typeProduct, setTypeProduct] = useState([]);

    const [nameSearchProduct, setNameSearchProduct] = useState("");
    // const [typeSearchProduct, setTypeSearchProduct] = useState("");

    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        displayProduct(0,nameSearchProduct)
        // displayTypeProduct()
    }, [page])
    // const displayTypeProduct = async () => {
    //     const res = await getAllTypeProduct();
    //     setTypeProduct(res);
    // }

    const displayProduct = async () => {
        const res = await getAllProduct(nameSearchProduct, page);
        console.log(res)
        if (res.status === 204) {
            setProducts([]);
            setTotalPage(0);
        } else if (res.status === 200) {
            setTotalPage(res.data.totalPages);
            setProducts(res.data.content);
        }
    }
    console.log(products)
    const dontContainsSpecialCharacters = (string) => {
        const regex = /^[^!@#$%^&*()_+={}\[\]:;,<.>?\\\/'"`]*$/;
        return regex.test(string);
    };
    const search = () => {
        if (dontContainsSpecialCharacters(nameSearchProduct)) {
            displayProduct().then()
        } else {
            showMsgWarning("Tên Tìm Kiếm Không Hợp Lệ")
        }
    }
    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    };


    return (
        <>
            <section className="py-3">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="bg-success mb-lg-3 text-center d-flex"
                         style={{borderRadius: "10px", height: "60px"}}>
                        <p className="fs-1 fw-bold text-white col-6" style={{marginLeft: "25%"}}>Hải Sản Khô</p>
                        <form style={{width: "20%", alignContent: "center"}} className="input-group mb-3 mb-md-2 "
                              role="search">
                            <input type="search" className="form-control form-control-dark text-bg-light col-6"
                                   placeholder="Tìm Kiếm..." aria-label="Search" onChange={(event) => {
                                setNameSearchProduct("" + (event.target.value))

                            }}/>
                            <button type="submit" className="btn btn-outline-light me-2"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        search()
                                        setPage(0)
                                    }}><i
                                className="fas fa-search"/></button>
                        </form>
                    </div>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {products && products.length !== 0 ?
                                products.map(pro => (
                                    <div className="col mb-5">
                                        <div className="card h-100" key={pro.id}>
                                            {/*Product image*/}
                                            <img className="card-img-top" width="450px" height="300px"
                                                 src={pro.image.name}
                                                 alt="..."/>
                                            {/*Product details*/}
                                            <div className="card-body p-4">
                                                <div className="text-center">
                                                    <h5 id="text-limit" className="fw-bolder">{pro.name}</h5>
                                                    250.000 VNĐ/KG
                                                </div>
                                            </div>
                                            {/*Product actions*/}
                                            <div
                                                className="card-footer gap-2 d-flex justify-content-center p-4 pt-0 border-top-0 bg-transparent ">
                                                <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                                href="/product-detail">Chi
                                                    Tiết</a></div>
                                                <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                                href="/cart">Giỏ Hàng</a></div>
                                            </div>
                                        </div>
                                    </div>
                                )) : <p id="trivn-p-a">
                                Không Có Dữ Liệu. Vui Lòng Nhập Lại !!!
                            </p>
                        }

                    </div>
                </div>
                {
                    totalPage > 1 && (<Pagination page={page} totalPages={totalPage}
                                                  onPageChange={handlePageChange}/>)
                }
            </section>
        </>
    )
}