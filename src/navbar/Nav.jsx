import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from './Logo'

function Nav() {

    const navigate = useNavigate();

    const onLogoClick = () => {
        navigate("/");
    }

    return (
        <div onClick={onLogoClick} className="pl-40 h-[60px] w-full flex items-center">
            <Logo />
        </div>
    )
}

export default Nav
