import React from 'react'
import Nav from './views/Nav'
import Menu from './views/Menu'


export const App = () => {
  return (
    <div className='home-box'>
      <Nav/>
      <Menu/>
      <div className="box">
        我是内容
      </div>
    </div>
  )
}
