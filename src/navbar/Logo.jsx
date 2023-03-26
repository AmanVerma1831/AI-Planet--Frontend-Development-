import React from 'react'
import { ReactComponent as Icon } from '../images/Icon.svg'

function Logo() {
    return (
        <div className="flex">
            <div >
                <Icon className="w-[36px] h-[36px]" />
            </div>
            <div className="flex flex-col">
                <div className="text-xl">
                    <p className="font-extrabold">planet</p>
                </div>
                <div className="flex text-base text-gray-500">
                    <p>formerly</p>
                    <p className="text-[#0FA958]">DPhi</p>
                </div>

            </div>
        </div>
    )
}

export default Logo
