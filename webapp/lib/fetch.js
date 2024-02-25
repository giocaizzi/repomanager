// fetch 

const URL = "http://" + process.env.HOST + ":" + process.env.PORT_SERVER;


export async function fetchData(endpoint, method, body) {

    console.log(URL + endpoint, method, body)

    try {
        const response = await fetch(
            URL + endpoint,
            {
                method: method,
                body: body,
                headers: {
                    "Content-Type": "application/json",
                    // cors
                    "Access-Control-Allow-Origin":  "*",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers":
                        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
                    "Access-Control-Max-Age": "86400",
                }
            }
        )
        // check for errors in the response
        if (!response.ok) {
            throw new Error("RequestError: " + response.status + " " + response.statusText)
        }
    }
    // other errors
    catch (error) {
        console.error(error)
        throw new Error("Error: " + error.message)
    }
    // 
    console.log(response)

    return response
}