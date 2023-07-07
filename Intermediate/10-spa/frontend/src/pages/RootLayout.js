import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
const RouteLayout = () => {
    return <>
        <MainNavigation/>
        <main>
            <Outlet/>
        </main>
    </>
}

export default RouteLayout;