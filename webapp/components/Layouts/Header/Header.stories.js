import Header from "./Header";
import { Suspense } from 'react';


export default {
    title: "Layouts/Header",
    component: Header,
};

export const Default = {
    render : () => (
        <Suspense>
            <Header />
        </Suspense>
    )
};

// export const Private = {
//     render : () => (
//         <Suspense>
//             <Header isPublic={false} />
//         </Suspense>
//     )
// };