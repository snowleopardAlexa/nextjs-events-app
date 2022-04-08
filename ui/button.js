import Link from 'next/link'

import styles from './button.module.css'

const Button = (props) => {
  return (
    <Link>
      <a className={styles.btn}>{props.children}</a>
    </Link>
  )
}

export default Button