import React from 'react'
import "./SideBar.css"

const SideBar = () => {
  return (
    <aside className='sideBar desktop'>
      <div className='logo'>
        <img src="../assests/img/Logo.png" alt="" />
      </div>

      <div className='dashBoardTextDiv'>
        <div className='dashBoardText'>
          <img src="../assests/icons/Category.png" className='icon' alt="" />
          <p >DashBoard</p>
        </div>
      </div>

      <div className='otherOption'>
        <ul>
          <li>
            <img src="../assests/icons/game.png" className='icon' alt="" />
            <p>trainings</p>
          </li>
          <li>
            <img src="../assests/icons/TicketStar.png" className='icon' alt="" />
            <p>users</p>
          </li>
          <li>
            <img src="../assests/icons/location.png" className='iconLocation' alt="" />
            <p>analytics</p>
          </li>
          <li>
            <img src="../assests/icons/location.png" className='iconLocation' alt="" />
            <p>my account</p>
          </li>
          <li>
            <img src="../assests/icons/location.png" className='iconLocation' alt="" />
            <p>support</p>
          </li>

        </ul>
      </div>
    </aside>
  )
}

export default SideBar
