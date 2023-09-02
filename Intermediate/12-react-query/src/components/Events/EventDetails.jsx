import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { deleteEvent, fetchEvent, queryClient } from '../../util/Http.js';

import Header from '../Header.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false)

  const params = useParams();
  const navigate = useNavigate();

  const {mutate, isPending: isPendingDeleting, isError: isErrorDeleting, errorDeleting} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['events'], refetchType: 'none'});
      navigate('/events');
    }
  });

  const handleDelete = () => {
    mutate({id:params.id});
  }

  const handleStartDelete = () => {
    setIsDeleting(true);
  }

  const handleStopDelete = () => {
    setIsDeleting(false);
  }

  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({signal}) => fetchEvent({signal, id: params.id})
  })

  let content;

  if(isPending){
    content = <div id='event-details-content' className='center'>
      <p>Fetching data ...</p>
    </div>
  }

  if(isError){
    content = <div id='event-details-content' className='center'>
      <ErrorBlock title="Failed to load event" message={error.info?.message || "Please try again later"}/>
    </div>
  }

  if(data){
    
    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    content = 
    <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>

        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate} @ {data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
    </>
  }

  return (
    <>

     {isDeleting && <Modal onClose={handleStopDelete}>
        <h2>Are you sure?</h2>
        <p>Do you really want to delete this event? This action cannot be undone</p>
        <div className='form-actions'>
          {isPendingDeleting && <p>Deleting, please wait...</p>}
          {!isPendingDeleting && (
            <>
              <button onClick={handleStopDelete} className="button-text">Cancel</button>
              <button onClick={handleDelete} className="button">Delete</button>
            </>
          )}
        </div>
        {isErrorDeleting && <ErrorBlock title="Failed to delete event" message={errorDeleting.info?.message || 'Failed to delete event, please try again later.'}

        />}
      </Modal>
      }
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {content}
      </article>
    </>
  );
}