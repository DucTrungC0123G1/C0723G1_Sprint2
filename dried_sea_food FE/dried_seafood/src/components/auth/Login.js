import React from "react";

export function Login() {
return(
    <>
        <div className="container-fluid ps-md-0">
            <div className="row g-0">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <h3 className="login-heading mb-4">Xin Chào Quý Khách !!</h3>

                                    {/*Sign In Form*/}
                                    <form>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput"
                                                   placeholder="name@example.com"/>
                                                <label htmlFor="floatingInput">Tài Khoản</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword"
                                                   placeholder="Password"/>
                                                <label htmlFor="floatingPassword">Mật Khẩu</label>
                                        </div>

                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="rememberPasswordCheck"/>
                                                <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                                    Ghi nhớ mật khẩu
                                                </label>
                                        </div>

                                        <div className="d-grid">
                                            <button
                                                className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                                                type="submit">Đăng Nhập
                                            </button>
                                            <div className="text-center">
                                                <a className="small" href="#">Quên Mật Khẩu.</a><p></p>
                                                <a className="small" href="/">Quay Lại </a>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
)
}