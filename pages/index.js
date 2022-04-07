import { getFeaturedEvents } from "../data/dummy-data"
import EventList from "../components/events/EventList"

const HomePage = () => {

// featured events function
const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default HomePage