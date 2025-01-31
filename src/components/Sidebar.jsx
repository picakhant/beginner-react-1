import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const links = [
        { name: "Go To About", path: "/about" },
        { name: "Go To Contact", path: "/contact" },
        { name: "Go To Dev Contact", path: "/contact/dev" },
        { name: "Go To Company Contact", path: "/contact/company" },
    ]

    return (
        <div className='flex'>
            {
                links.map(
                    (item) => {
                        return <button key={item.name} 
                        className={`btn btn-link ${pathname === item.path && "link-error"}`}
                            onClick={() => navigate(item.path)}
                        >{item.name}</button>
                    }
                )
            }
        </div>
    )
}

export default Sidebar