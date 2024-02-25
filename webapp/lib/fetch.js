// fetch 

const URL = "http://" + process.env.HOST + ":" + process.env.PORT_SERVER;


export async function fetchData(endpoint, method, body) {

    console.log(URL + endpoint, method, body)


    const response = await fetch(
        URL + endpoint,
        {
            method: method,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        })

    // if (!response.ok) {
    //     return JSON.stringify({ error: response.statusText });
    // }
    return response.json();
};
