import DebugComponent from "@/components/Utils/DebugComponent";
import Repository from "@/components/Repository/Repository";
import { fetchData } from "@/lib/fetch";

export default async function RepositoryPage({params})  {
    const data = await fetchData("/" + params.user + "/repositories/" + params.repo_name, "GET");

    return (
        <div>
            <h1>{params.repo_name}</h1>
            {/* <DebugComponent data={data} /> */}
            <Repository props={data} />
        </div>
    );
}