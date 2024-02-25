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
                    "Content-Type": "application/json"
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