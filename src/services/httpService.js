import axios from 'axios';

let protocol = 'http',
    serverHost = 'localhost',
    port = '9000';

const API_URL = `${protocol}://${serverHost}:${port}/api`;
const APP_URL = `${protocol}://${serverHost}:${port}/app`;

export const SERVER_URLS = {api: API_URL, app: APP_URL};
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