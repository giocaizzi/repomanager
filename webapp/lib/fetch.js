// fetch 

const URL = "http://" + process.env.HOST + ":" + process.env.PORT_SERVER;


export async function fetchData(endpoint, method, body) {
    const response = await fetch(
        URL + endpoint,
        {
            method: method,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        });
    const data = await response.json();
    return data;
};
