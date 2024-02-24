'use server'

import config from 'dotenv';
import { redirect } from 'next/navigation'
// import { cookies } from "next/headers";

config.config();
const URL = "http://127.0.0.1:"+String(process.env.PORT_SERVER)

export async function login(formData) {
    const response = await fetch(URL + '/auth/', {
        method: 'POST',
        body: formData
    })

    if (!response.ok) {
        return "Something went wrong. Please try again."
    }
    const data = response.json()
    console.log(data)
    // redirect("/" + data.username)}
}