import { cookies } from 'next/headers'
import { fetchData } from '@/lib/fetch'

export default async function User({ params }) {
  const cookieStore = cookies()
  const headers = {
    "Authorization": "Bearer " +cookieStore.get("token").value
  }
  const data = await fetchData("/" + params.user, "GET", headers)
  return (
    <>
      <h1>Welcome {params.user}</h1>
      <h3>Cookies</h3>
      {cookieStore.getAll().map((cookie) => (
        <div key={cookie.name}>
          <p>Name: {cookie.name}</p>
          <p>Value: {cookie.value}</p>
        </div>
      ))}
      <h3>Data</h3>
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(headers)}</p>
    </>
  )
}