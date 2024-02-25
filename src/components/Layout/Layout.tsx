import { Suspense } from "react";
import { Header } from "../Header/Header"
import { Outlet } from "react-router";

export const Layout = () => {
    return <>
        <Header />
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    </>
};