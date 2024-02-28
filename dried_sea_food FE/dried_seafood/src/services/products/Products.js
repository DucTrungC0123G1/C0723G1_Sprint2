import axios from "axios";
import {toast} from "react-toastify";

export const getAllProduct = async (nameProduct, page) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/products/list?nameProduct=${nameProduct}&page=${page}`);
        return res;
    } catch (e) {
        console.log(e)
        return e;
    }

}

export function showMsgWarning(msg) {
    toast.warning(msg, {
        position: "top-right",
        autoClose: 2000,
    });
}