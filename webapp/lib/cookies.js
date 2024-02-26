'use server'

import { cookies } from 'next/headers'

// create and delete cookies

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

//////////////////////////////////////////

// get login cookies

export async function get_login_cookie() {
  return {
    "token": cookies().get('token'),
    "username": cookies().get('username')
  }
}

// get headers with token for requests

export async function get_headers() {
  var header = null
  // if token exists in cookies, return header with token
  if (cookies().get("token")) {
    header = {
      "Authorization": "Bearer " + cookies().get("token").value
    }
  }
  return header
}