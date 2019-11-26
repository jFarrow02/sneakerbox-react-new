import axios from 'axios';

/**
 * headers: {'Authorization': 'Bearer <token>'}
 */
export const httpGet = async (configObj)=>{
    const {method, url, headers} = configObj;
    const data = await axios(
        {
            headers: headers || null,
            method: method,
            responseType: 'json',
            url: url,
        }
    );

    return data;
}