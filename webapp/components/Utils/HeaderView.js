import { get_headers } from '@/lib/cookies'


export default function HeaderView({}) {
    const headers = await get_headers()
    return (
        <>
            <h2>headers</h2>
            <p>{JSON.stringify(headers)}</p>
        </>
    );
}