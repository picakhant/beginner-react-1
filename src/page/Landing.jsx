import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='text-3xl'>Landing Page</div>
      <button className='btn btn-primary' onClick={() => navigate("/about")}>Go to About</button>
    </>
  )
}

export default Landing