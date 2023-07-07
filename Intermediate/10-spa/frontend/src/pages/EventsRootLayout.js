import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";
const EventsRouteLayout = () => {
    return <>
        <EventsNavigation/>
        <main>
            <Outlet/>
        </main>
    </>
}

export default EventsRouteLayout;