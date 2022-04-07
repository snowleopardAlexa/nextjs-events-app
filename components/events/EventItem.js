import Link from 'next/link'
import Image from 'next/image'
import styles from './event-item.module.css'

function EventItem(props) {


const { title, image, date, location, id } = props

// human readable date
const humanReadableDate = new Date(date).toLocaleDateString(en-US, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }
)
const formattedAddress = location.replace(', ', '\n')
const exploreLink = `/events/${id}`

    return (
      <li>
       <Image src={'/' + image} alt="event" />
       <div>
           <div><h2>{title}</h2></div>
           <div>
               <time>{humanReadableDate}</time>
           </div>
           <div>
               <address>{formattedAddress}</address>
           </div>
       </div>
       <div>
           <Link href={exploreLink}>Explore Event</Link>
       </div>
      </li>
    )
}

export default EventItem