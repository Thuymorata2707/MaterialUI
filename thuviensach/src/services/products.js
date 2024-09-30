// // Import Axios library

// import axios from "axios";


// // URL of the server endpoint you want to retrieve data from
// const baseUrl = 'http://localhost:30000/bags/api/v1';



// const getProducts = async (from, limit) => {
//     // Making a GET request using Axios
//     const response = await axios.get(`${baseUrl}/product/pagination/${from}/${limit}`);
//     return response.data;
// }

import { products} from '../data/index';

const getProducts = async (from, limit) => {
    return new Promise((resolve, reject) => {
        const paginatedProducts = products.slice(from, from + limit);
        resolve({
            total: products.length,
            data: paginatedProducts
        })
    })
}

export const ProductService = {
    getProducts: getProducts,
}