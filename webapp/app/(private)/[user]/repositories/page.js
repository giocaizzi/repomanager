import RepositoriesTable from "@/components/Repositories/Table/RepositoriesTable/RepositoriesTable"
import DebugComponent from "@/components/Utils/DebugComponent"
import { fetchData } from "@/lib/fetch"

export default async function UserRepo({ params }) {
    const data = await fetchData("/" + params.user + "/repositories", "GET")
    return (
        <div>
            <h1>Repositories</h1>
            {/* <DebugComponent data={data} /> */}
            <RepositoriesTable repositories={data}/>
        </div>
    )
}