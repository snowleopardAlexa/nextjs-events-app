import Image from 'next/image'
import styles from './event-item.module.css'
import Button from '../../ui/Button'
import ArrowRightIcon from '../icons/arrow-right-icon'
import AddressIcon from '../icons/address-icon'
import DateIcon from '../icons/date-icon'

function EventItem(props) {

const { title, image, date, location, id } = props

// human readable date
const humanReadableDate = new Date(date).toLocaleDateString( 'en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }
)
const formattedAddress = location.replace(', ', '\n')
const exploreLink = `/events/${id}`

    return (
      <li className={styles.item}>
       <Image src={'/' + image} alt="event" width="400px" height="350px" />
       <div className={styles.content}>
           <div className={styles.summary}>
               <h2>{title}</h2>
            </div>
           <div className={styles.date}>
            <DateIcon />
               <time>{humanReadableDate}</time>
           </div>
           <div className={styles.address}>
            <AddressIcon />
               <address>{formattedAddress}</address>
           </div>
       </div>
       <div className={styles.actions}>
        <Button link={exploreLink}>
           <span>Explore</span> 
           <span className={styles.icon}>
               <ArrowRightIcon />
           </span>
        </Button>
       </div>
      </li>
    )
}

export default EventItem