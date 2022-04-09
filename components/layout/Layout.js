import { Fragment } from 'react'
import MainHeader from './MainHeader'

const Layout = (props) => {
  return (
    <MainHeader>
    <Fragment>
        <header></header>
        <main>
            {props.children}
        </main>
    </Fragment>
    </MainHeader>
  )
}

export default Layout