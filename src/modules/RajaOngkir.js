import axios from "axios";

const config = {
    headers : {
        key : process.env.REACT_APP_RAJA_ONGKIR
    }
}

const rajaongkirhost = process.env.REACT_APP_RAJAONGKIR_HOST
export const getProvince = ()=>{
    return axios.get(`${rajaongkirhost}/province`, config)
}