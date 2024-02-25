import UserOverview from '@/components/UserOverview/UserOverview'

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
      <UserOverview props={data} />
      <p>{JSON.stringify(data)}</p>
    </>
  )
}