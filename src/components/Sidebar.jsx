import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()

    const { pathname } = useLocation()

    const pages = [
        { name: "Home", path: "/home" },
        { name: "Create Book", path: "/home/create-book" },
        { name: "Test", path: "/home/test" },
    ]

    return (
        <div className="">
            <div onClick={() => { navigate("/") }} className="flex items-center gap-2 border-b-2 border-base-300 pb-5">
                <img src="https://cdn-icons-png.flaticon.com/256/10431/10431308.png"
                    className='w-[100px]' alt="logo" />
                <div className="text-4xl select-none">Book Store</div>
            </div>
            <div className='flex flex-col gap-2 mt-3'>
                {
                    pages.map((menu) => {
                        return <div
                            onClick={() => { navigate(menu.path) }}
                            className={`p-3 
                        text-lg hover:bg-base-300 rounded-lg cursor-pointer 
                        ${pathname === menu.path && "bg-base-300"}`} key={menu.name}>
                            {menu.name}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar