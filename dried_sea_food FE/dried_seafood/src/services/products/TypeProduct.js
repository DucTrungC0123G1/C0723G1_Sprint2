import axios from "axios";

export const getAllTypeProduct = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/productType`)
        return res.data
    } catch (e) {
        return e;
    }

}