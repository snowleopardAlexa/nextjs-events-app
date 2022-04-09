import { Fragment } from 'react'

const Layout = (props) => {
  return (
    <Fragment>
        <header></header>
        <main>
            {props.children}
        </main>
    </Fragment>
  )
}

export default Layout