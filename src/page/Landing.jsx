import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineStart } from "react-icons/md";

const Landing = () => {

  const navigate = useNavigate()

  return (
    <div className="h-screen flex gap-2 flex-col items-center justify-center">
      <img src="https://cdn-icons-png.flaticon.com/256/10431/10431308.png"
        className='w-[100px]' alt="logo" />
      <div className="text-3xl">Welcome Form Book Store</div>
      <div className="text-lg w-1/2 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit
        . Doloribus, voluptate nulla, vel quaerat facere impedit!
      </div>
      <button className="btn btn-lg btn-primary"
        onClick={() => { navigate("/home") }}
      >Get Start <MdOutlineStart />
      </button>
    </div>
  )
}

export default Landing