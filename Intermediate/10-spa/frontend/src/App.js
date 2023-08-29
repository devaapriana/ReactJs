import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import EventsPage, {loader as EventLoader} from './pages/EventsPage';
import EventDetailPage, {loader as EventDetailLoader, action as ActionDeleteEvent} from './pages/EventDetailPage';
import NewEventPage, {action as ActionNewEventPage} from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RouteLayout from "./pages/RootLayout";
import EventsRouteLayout from "./pages/EventsRootLayout";
import ErrorPage from "./pages/ErrorPage";
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// Done
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// Done
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// Done
// 4. Add properly working links to the MainNavigation
// Done
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// Done
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// Done
// 7. Output the ID of the selected event on the EventDetailPage
// Done
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  const router = createBrowserRouter([
    { path: '/', 
      element: <RouteLayout/>,
      errorElement: <ErrorPage/>, 
      children: [
      {index: true, element: <HomePage/>},
      { path: 'events/', element: <EventsRouteLayout/>, children: [
        { index: true,  element: <EventsPage/>, loader: EventLoader},
        { 
          path: ':eventId',
          id: 'event-detail',
          loader: EventDetailLoader,
          children: [
            {index: true, element: <EventDetailPage/>, action: ActionDeleteEvent},
            {path: 'edit', element: <EditEventPage/> }
          ] 
        },
        { path: 'new', element: <NewEventPage/>, action: ActionNewEventPage },
      ] },
      
    ] },
  ])
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
