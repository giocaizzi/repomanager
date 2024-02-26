import RepositoriesTable from "@/components/Repositories/RepositoriesTable/RepositoriesTable"

import { fetchData } from "@/lib/fetch"

export default async function UserRepo({ params }) {
    const data = await fetchData("/" + params.user + "/repositories", "GET")
    return (
        <div>
            <h1>Repositories</h1>
            <RepositoriesTable repositories={data}/>
        </div>
    )
}