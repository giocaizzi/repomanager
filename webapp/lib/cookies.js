'use server'

import { cookies } from 'next/headers'

export async function create_login_cookie(data) {
  if ("token" in data) {
    cookies().set('token', data.token)
    cookies().set('username', data.username)
    console.log("Cookie set")
  }
  else {
    throw new Error("No token in data")
  }
};

export async function delete_login_cookie() {
  cookies().delete('token')
  cookies().delete('username')
  console.log("Login cookies deleted! Logged out!")
};

export async function get_login_cookie() {
  return {
    "token": cookies().get('token'),
    "username": cookies().get('username')
  }
}


export async function set_headers() {
  const headers = {
    "Authorization": "Bearer " + cookies().get("token").value
  }
  return headers
}