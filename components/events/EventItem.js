import Link from 'next/link'
import Image from 'next/image'

function EventItem(props) {

const { title, image, data, location, id } = props

// human readable date
const humanReadableDate = new Date(date).toLocaleDateString(
    en-US, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }
)



    return (
      <li>
       <Image src="" alt="event" />
       <div>
           <div><h2>{title}</h2></div>
           <div>
               <time>DATA</time>
           </div>
           <div>
               <address>ADDRESS</address>
           </div>
       </div>
       <div>
           <Link href="/">Explore Event</Link>
       </div>
      </li>
    )
}

export default EventItem