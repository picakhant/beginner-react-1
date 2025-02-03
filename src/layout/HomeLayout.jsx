import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const HomeLayout = () => {
    return (
        <div className="container mx-auto">
            <div className='grid grid-cols-12 h-screen'>
                <div className=" col-span-4 p-3 border-x-2 border-base-300">
                    <Sidebar />
                </div>
                <div className=" col-span-8 p-3 border-e-2 border-base-300">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default HomeLayout