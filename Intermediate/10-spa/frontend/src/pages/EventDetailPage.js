import { useParams } from "react-router-dom";

const EventDetailPage = () => {
    const param = useParams();
    return <>
        <h1>Event {param.eventId}</h1>
    </>
}

export default EventDetailPage;