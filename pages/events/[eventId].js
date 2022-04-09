import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

const EventDetailPage = () => {

  const router = useRouter()

  const eventId = router.query.eventId
  const event = getEventById(eventId)

  // if event is falsey 
  if (!event) {
    return <p>No event found</p>
  }

  return (
   <Fragment>
     <EventSummary />
     <EventLogistics />
     <EventContent>
       <p>{event.description}</p> 
     </EventContent>
   </Fragment>
  )
}

export default EventDetailPage