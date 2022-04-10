import { Fragment } from 'react'
import { getAllEvents } from '../../data/dummy-data'
import EventList from '../../components/events/EventList'
import EventsSearch from "../../components/events/EventsSearch"

const AllEventsPage = () => {
  const events = getAllEvents()

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />  
    </Fragment>
  )
}

export default AllEventsPage

