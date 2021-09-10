import React from 'react';
import Sidebar from "./Sidebar/Sidebar"
// import { Resizable } from 'react-resizable';

const Main = () => {
    return (
        <div className="rat-editor-main">
            {/* <Sidebar sidebarRef={(ref) => setSidebarRef(ref)}/> */}
            <Sidebar />
        </div>
    )
}

export default Main
