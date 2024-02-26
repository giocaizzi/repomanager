import UserOverview from '@/components/User/UserOverview/UserOverview'
import UserRepositories from '@/components/User/UserRepositories/UserRepositories'

import { fetchData } from '@/lib/fetch'

export default async function User({ params }) {
  const data = await fetchData("/" + params.user, "GET")
  return (
    <>
      <h1>Welcome {params.user}</h1>
      <UserOverview name={data.name} login={data.login} avatar_url={data.avatar_url} />
      <UserRepositories repositories={data.repositories}/>
    </>
  )
}