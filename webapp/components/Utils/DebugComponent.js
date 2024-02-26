import { get_headers } from '@/lib/cookies'


export default async function DebugComponent({data=null}) {
    const headers = await get_headers()
    return (
        <>
            <h1>DebugComponent</h1>
            <h2>Headers</h2>
            <p>{JSON.stringify(headers)}</p>
            <h2>Data</h2>
            {data === null ? <p>No data</p> : <p>{JSON.stringify(data)}</p>}
        </>
    );
}