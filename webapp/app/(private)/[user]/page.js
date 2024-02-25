import UserOverview from '@/components/UserOverview/UserOverview'
import UserRepositories from '@/components/UserRepositories/UserRepositories'

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
      {/* <p>{JSON.stringify(headers)}</p> */}
      <UserOverview name={data.name} login={data.login} avatar_url={data.avatar_url} />
      <UserRepositories repositories={data.repositories}/>
      {/* <p>{JSON.stringify(data)}</p> */}
    </>
  )
}