import { redirect } from 'next/navigation'
// import { cookies } from "next/headers";

export async function login(formData) {
    const response = await fetch('/api/auth/', {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        return "Something went wrong. Please try again."
    }
    const data = response.json()
    console.log(data)
    // redirect("/" + data.username)
}