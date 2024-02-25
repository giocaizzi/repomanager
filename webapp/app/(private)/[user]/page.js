import UserOverview from '@/components/UserOverview/UserOverview'
import UserRepositories from '@/components/UserRepositories/UserRepositories'

import { set_headers } from '@/lib/cookies'
import { fetchData } from '@/lib/fetch'

export default async function User({ params }) {
  const headers = await set_headers()
  const data = await fetchData("/" + params.user, "GET", headers)
  return (
    <>
      <h1>Welcome {params.user}</h1>
      <p>{JSON.stringify(headers)}</p>
      <UserOverview name={data.name} login={data.login} avatar_url={data.avatar_url} />
      <UserRepositories repositories={data.repositories}/>
      {/* <p>{JSON.stringify(data)}</p> */}
    </>
  )
}