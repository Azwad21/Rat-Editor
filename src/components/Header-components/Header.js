import React from 'react';
import WindowControls from "./WindowControls";
import WindowNavigations from "./WindowNavigations";

const Header = () => {

    return (
        <header className="no-select-region">
            <span className="rat-editor-app-title rat-editor-draggable-region">rat Editor</span>
            <WindowNavigations/>
            <div className="rat-editor-draggable-region" style={{flexGrow: 1}}></div>
            <WindowControls/>
        </header>
    )
}

export default Header
