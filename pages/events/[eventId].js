import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'

const EventDetailPage = () => {

  const router = useRouter()

  const eventId = router.query.eventId
  const event = getEventById(eventId)

  // if event is falsey 
  if (!event) {
    return <p>No event found</p>
  }

  return (
   <div>
     event detail page
  </div>
  )
}

export default EventDetailPage