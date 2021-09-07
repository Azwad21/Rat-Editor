import React from 'react'
import { FaRegWindowMaximize , FaWindowMinimize , FaTimes } from "react-icons/fa"

const WindowControls = () => {
    return (
        <div className="window-controls">
            <button className="window-control-button window-control-button-minimize">
                <FaWindowMinimize/>
            </button>
            <button className="window-control-button window-control-button-maximize">
                <FaRegWindowMaximize/>
            </button>
            <button className="window-control-button window-control-button-close">
                <FaTimes/>
            </button>
        </div>
    )
}

export default WindowControls
