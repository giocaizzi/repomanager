import DebugComponent from "@/components/Utils/DebugComponent";

import { fetchData } from "@/lib/fetch";

export default async function Repository({params})  {
    const data = await fetchData("/" + params.user + "/repositories/" + params.repo_name, "GET");

    return (
        <div>
            <DebugComponent data={data} />
        </div>
    );
}