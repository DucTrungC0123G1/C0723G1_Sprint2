import React from "react";
import logo from "../../img/logo/T_T-removebg-preview.png"

const HomeHeader = () => {
    return (
        <>
            {/*Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height: "7rem"}}>
                <div className="row-col-2">
                    <img className="align-items-center" src={logo} height="300" width="300" alt="image"/>
                    {/*<button class="navbar-toggler" type="button" data-bs-toggle="collapse" */}
                    {/*        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" */}
                    {/*        aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>*/}
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom: "-50px"}}>
                <header className="p-8 text-bg-success w-100">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 gap-2">
                                <li><a href="/" className="nav-link px-2 text-white">Trang Chủ</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Hải Sản
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Hải Sản Khô</a></li>
                                        <li><a className="dropdown-item" href="#">Hải Sản Khô Ăn Liền</a></li>
                                        <li><a className="dropdown-item" href="#">Hải Sản Cao Cấp</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Thực Phẩm
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Thực Phẩm Chế Biến</a></li>
                                        <li><a className="dropdown-item" href="#">Đặc Sản</a></li>
                                        <li><a className="dropdown-item" href="#">Thực Phẩm Tươi Sạch</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tin Tức
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Chế Biến Món Ngon</a></li>
                                        <li><a className="dropdown-item" href="#">Du Lịch Đặc Sắc</a></li>
                                        <li><a className="dropdown-item" href="#">Sức Khỏe Gia Đình</a></li>
                                    </ul>
                                </li>
                                <li><a href="#" className="nav-link px-2 text-white">Liên Hệ</a></li>
                            </ul>

                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex" role="search">
                                <input type="search" className="form-control form-control-dark text-bg-light" placeholder="Search..." aria-label="Search"></input>
                                    <button type="button" className="btn btn-outline-light me-2"><i class="fas fa-search"></i></button>
                            </form>

                            <div className="text-end">
                                <button type="button" className="btn btn-success"><a className="link-light" href="/cart"><i className="fas fa-shopping-cart"></i></a></button>

                            </div>
                            <div>
                                <button type="button" className="btn btn-success"><a className="link-light" href="/login"><i className="fas fa-sign-in-alt"></i></a></button>
                            </div>
                        </div>
                    </div>
                </header>
            </nav>
        </>
    )
};
export default HomeHeader;