import React from 'react'

import styles from './main.scss'

const Main = props => {
  return (
    <main className="main" style={styles}>
      {props.children}
    </main>
  )
}

export default Main
