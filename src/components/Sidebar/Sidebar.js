import React from 'react'
// import Tippy from '@tippyjs/react';
import Tooltip from "../Tooltip"
import { BsBraces, BsSearch } from "react-icons/bs"


const Sidebar = () => {
    return (
        <div className="rat-editor-sidebar">
            <Tooltip content="Project Explorer" placement='right' delay={100}>
                <button className="rat-editor-sidebar-button rat-editor-sidebar-button-project-explorer">
                    <BsBraces />
                </button>
            </Tooltip>
            <Tooltip content="Search" placement='right' delay={100}>
                <button className="rat-editor-sidebar-button rat-editor-sidebar-button-search">
                    <BsSearch />
                </button>
            </Tooltip>
        </div>
    )
}

export default Sidebar
