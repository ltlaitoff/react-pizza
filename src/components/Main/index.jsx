import React from 'react'

import styles from './Main.scss'

const Main = props => {
  return (
    <main className="main" style={styles}>
      {props.children}
    </main>
  )
}

export default Main
