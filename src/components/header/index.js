import React from 'react'
import logo from "../../assets/images/bdg_header.gif"

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={logo} className='w-1/4 block mx-auto' alt="" />
            </div>
        </div>
    )
}

export default Header