import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {login} from "../../services/auth/AuthService";
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";

export function Login() {
    const user = JSON.parse(localStorage.getItem(`user`))
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, []);
    const initValues = {
        userName: "",
        password: ""
    }
    const validateFormLogin = {
        userName: Yup.string()
            .required("Vui lòng nhập tài khoản"),
        password: Yup.string()
            .required("Vui lòng nhập mật khẩu")
    };

    const handleSubmitFormLogin = async (values, {setFieldError}) => {
        try {
            const res = await login(values);
            if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.data));
                navigate("/")
                toast.success("Đăng nhập thành công!");
            }
        } catch (e) {
            setFieldError("password", e.data);
        }
    }

    return (
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
                                        <Formik initialValues={initValues}
                                                onSubmit={(values, {setFieldError}) => handleSubmitFormLogin(values, {setFieldError})}
                                                validationSchema={Yup.object(validateFormLogin)}
                                        >
                                            <Form>
                                                <div className="form-floating mb-3">
                                                    <Field type="text" className="form-control" id="userName" name="userName"
                                                           placeholder="Tên tài khoản"/>
                                                    <label htmlFor="floatingInput">Tài Khoản</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <Field type="password" className="form-control" id="password" name="password"
                                                           placeholder="mật khẩu"/>
                                                    <label htmlFor="floatingPassword">Mật Khẩu</label>
                                                </div>

                                                <div className="form-check mb-3">
                                                    <Field className="form-check-input" type="checkbox" value=""
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
                                            </Form>
                                        </Formik>
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