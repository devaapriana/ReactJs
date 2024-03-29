import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
    const data = useRouteLoaderData('event-detail');
    return <>
        <EventItem event={data.event}/>
    </>
}

export default EventDetailPage;

export async function loader({request, params}){
    let id = params.eventId;
    const response = await fetch('http://localhost:8080/events/'+id);

    if (!response.ok) {

        throw json(
          {message: 'Could not fetch the event'}, 
          {
              status: 500
          }
        )
      }

      return response;
}

export async function action({request, params}){
    let id = params.eventId;
    const response = await fetch('http://localhost:8080/events/'+id, {
        method:request.method
    });



    if (!response.ok) {

        throw json(
          {message: 'Could not fetch the event'}, 
          {
              status: 500
          }
        )
      }


    return redirect('/events')

}