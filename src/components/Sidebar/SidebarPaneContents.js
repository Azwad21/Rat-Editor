import React from 'react'
import Explorer from "./Explorer/Explorer"

const SidebarPane = (props) => {
    // console.log("render")
    return (
        <div 
            className={`
                rat-editor-sidebar-pane-contents
                ${props.isSidebarPaneClosed ? "rat-editor-sidebar-pane-contents-closed" : ""}
            `}
        >
            <Explorer/>
        </div>
    )
}

export default SidebarPane
