import { cookies } from 'next/headers'

export default function User({params}){
    // return (
    //     <div>
    //         <h1>Welcome {params.user}</h1>
    //     </div>
    // )
    const cookieStore = cookies()
    return cookieStore.getAll().map((cookie) => (
      <div key={cookie.name}>
        <p>Name: {cookie.name}</p>
        <p>Value: {cookie.value}</p>
      </div>
    ))
}