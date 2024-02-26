// fetch 
import { get_headers } from '@/lib/cookies'

const URL = "http://" + process.env.HOST + ":" + process.env.PORT_SERVER;

const defaultHeaders = {
    "Content-Type": "application/json",
}
export async function fetchData(endpoint, method, body) {
    const headers = await get_headers()
    const response = await fetch(
        URL + endpoint,
        {
            method: method,
            body: JSON.stringify(body),
            headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
        });
    const data = await response.json();
    return data;
};
