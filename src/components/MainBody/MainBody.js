import React from 'react'
import "./MainBody.css"
import FirstBody from '../FirstBody'
import SecondBody from '../SecondBody'
import ThirdBody from '../ThirdBody'


const MainBody = () => {
  return (
    <div className='mainbodyDiv'>
      <nav className='bodyHeader'>
        <div className='bodyHeaderText'>
          <h1>hello, Puneet Dhiman</h1>
          <p>following is your organization’s performance summary</p>
        </div>
      </nav>

      <section className='bottombody'>
        <FirstBody />
        <SecondBody />
        <ThirdBody />
      </section>

    </div>
  )
}

export default MainBody
