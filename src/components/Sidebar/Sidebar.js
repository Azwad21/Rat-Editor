import React from 'react'
import SidebarPane from "./SidebarPaneContents";
// import Tippy from '@tippyjs/react';
import Tooltip from "../Tooltip"
import { BsFillFolderFill } from "react-icons/bs"
import { RiSearchFill } from "react-icons/ri"
// import { AiOutlineSnippets } from "react-icons/ai";
var classNames = require('classnames');


const Sidebar = (props) => {
    /* window.ipcRenderer.on("path:data", (data) => {
        console.log(data)
    }) */

    const ref = React.createRef();

    const [activeTab, setActiveTab] = React.useState(0);

    const [sidebarTabsData] = React.useState([
        {
            tooltipContent: "Project Explorer",
            placement: "right",
            delay: 100,
            classNames: ["rat-editor-sidebar-button", "rat-editor-sidebar-button-project-explorer"],
            value: 0,
            buttonIcon: <BsFillFolderFill />
        },
        {
            tooltipContent: "Search",
            placement: "right",
            delay: 100,
            classNames: ["rat-editor-sidebar-button", "rat-editor-sidebar-button-search"],
            value: 1,
            buttonIcon: <RiSearchFill />
        },
    ]);

    /* IMPLEMENTING RESIZING SIDEBAR PANE */

    const [XPosition, setXPosition] = React.useState(0);
    const [sidebarPaneWidth, setSidebarPaneWidth] = React.useState(0);
    const [isResizing, setIsResizing] = React.useState(false);
    const [isSidebarPaneClosed, setIsSidebarPaneClosed] = React.useState(false);

    const sidebarPaneRef = React.useRef();
    const sidebarPaneResizerRef = React.useRef();

    const handleSidebarPaneResiszerMouseDownEvent = (e) => {
        document.body.style.cursor = "col-resize";
        setIsResizing(true);
        setXPosition(e.clientX);
        const styles = window.getComputedStyle(sidebarPaneRef.current);
        setSidebarPaneWidth(parseInt(styles.width, 10));

        document.addEventListener('mousemove', mouseMoveHandler__sidebarpane);
        document.addEventListener('mouseup', mouseUpHandler__sidebarpane);
    }

    const mouseMoveHandler__sidebarpane = (e) => {
        const dx = e.clientX - XPosition;
        let dWidth = sidebarPaneWidth + dx;
        if (dWidth <= 50) {
            dWidth = 0;
            setIsSidebarPaneClosed(true);
        } else if (dWidth > 50) {
            setIsSidebarPaneClosed(false);
        };
        // console.log("offset: ", dx, "width: ", sidebarPaneWidth, "DWidth: ", sidebarPaneWidth + dx)
        sidebarPaneRef.current.style.width = `${dWidth}px`;
    }

    const mouseUpHandler__sidebarpane = () => {
        document.body.style.cursor = "auto";
        setIsResizing(false);
        document.removeEventListener('mousemove', mouseMoveHandler__sidebarpane);
        document.removeEventListener('mouseup', mouseUpHandler__sidebarpane);
    }

    // const [sidebarPanes] = React.useState(null);

    return (
        <div className="rat-editor-sidebar-container">
            <div className="rat-editor-sidebar-tabs" ref={ref}>
                {
                    sidebarTabsData.map(data => {
                        return (
                            <Tooltip
                                content={data.tooltipContent}
                                placement={data.placement}
                                delay={data.delay}
                                key={data.value}
                            >
                                <button
                                    className={classNames(data.classNames, {
                                        "rat-editor-sidebar-button-active": activeTab === data.value
                                    })}
                                    data-value={data.value}
                                    onClick={(e) => setActiveTab(parseInt(e.currentTarget.dataset.value))}
                                >
                                    {data.buttonIcon}
                                </button>
                            </Tooltip>
                        )
                    })
                }
            </div>
            <div className={`rat-editor-sidebar-pane ${isResizing ? "no-select-region" : ""}`} ref={sidebarPaneRef}>
                <div
                    className="rat-editor-sidebar-pane-resizer"
                    ref={sidebarPaneResizerRef}
                    onMouseDown={handleSidebarPaneResiszerMouseDownEvent}
                ></div>
                <SidebarPane isSidebarPaneClosed={isSidebarPaneClosed} activeTab={activeTab}/>
            </div>
        </div>
    )
}

/* 

<Tooltip content="Project Explorer" placement='right' delay={100}>
                <button className="rat-editor-sidebar-button rat-editor-sidebar-button-project-explorer">
                    <BsFillFolderFill />
                </button>
            </Tooltip>
            <Tooltip content="Search" placement='right' delay={100}>
                <button className="rat-editor-sidebar-button rat-editor-sidebar-button-search">
                    <RiSearchFill />
                </button>
            </Tooltip>
*/

/* 

const [sidebarTabs] = React.useState([
        <Tooltip content="Project Explorer" placement='right' delay={100} >
            <button
                className={classNames("rat-editor-sidebar-button", "rat-editor-sidebar-button-project-explorer", {
                    "rat-editor-sidebar-button-active": activeTab === 0
                })}
                data-value={0}
                onClick={(e) => setActiveTab(parseInt(e.currentTarget.dataset.value))}
            >
                <BsFillFolderFill />
            </button>
        </Tooltip>,
        <Tooltip content="Search" placement='right' delay={100} >
            <button
                className={classNames("rat-editor-sidebar-button", "rat-editor-sidebar-button-search", {
                    "rat-editor-sidebar-button-active": activeTab === 1
                })}
                data-value={1}
                onClick={(e) => setActiveTab(parseInt(e.currentTarget.dataset.value))}
            >
                <RiSearchFill />
            </button>
        </Tooltip>

    ]);

*/

export default Sidebar
