import Header from "./Header";
import { Suspense } from 'react';


export default {
    title: "Layouts/Header",
    component: Header,
};

export const Default = () => (
    <Suspense>
        <Header />
    </Suspense>
);