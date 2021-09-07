import React from 'react';
import CustomMenuItem from "./CustomMenuItem"
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu,
    MenuDivider
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const WindowNavigations = () => {

    return (
        <div className="rat-editor-appbar-navigations">
            <Menu
                menuButton={<MenuButton className="rat-editor-appbar-navigation-button">File</MenuButton>}
                // transition
                menuClassName="rat-editor-appbar-navigation-menu"
                offsetY={2}
            // boundingBoxPadding={`20 20`}
            >
                <MenuItem>
                    <CustomMenuItem label="New File" labelKey="Ctrl + N" />
                </MenuItem>
                <MenuItem>
                    <CustomMenuItem label="New Window" labelKey="Ctrl + Shift + N" />
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                    <CustomMenuItem label="Open File" labelKey="Ctrl + Shift + N" />
                </MenuItem>
                <MenuItem>
                    Open Folder
                </MenuItem>
                <MenuDivider />
                <MenuItem>Close Folder</MenuItem>
                <MenuItem>Close Editor</MenuItem>
                <MenuItem>Close Window</MenuItem>
                <MenuDivider />
                <MenuItem>
                    <CustomMenuItem label="Exit" labelKey="Ctrl + Q" />
                </MenuItem>
                {/* <SubMenu label="Styles" offsetX={2} menuClassName="rat-editor-appbar-navigation-menu">
                    <MenuItem>about.css</MenuItem>
                    <MenuItem>home.css</MenuItem>
                    <MenuItem>index.css</MenuItem>
                </SubMenu> */}
            </Menu>
            <Menu
                menuButton={<MenuButton className="rat-editor-appbar-navigation-button">Help</MenuButton>}
                // transition={{open: true, close: false, item: true}}
                menuClassName="rat-editor-appbar-navigation-menu"
                offsetY={2}
                // boundingBoxPadding={`20 20`}
            >
                <MenuItem>Documentation</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuDivider/>
                <MenuItem>Help</MenuItem>
            </Menu>
        </div>
    )
}

export default WindowNavigations


/*

    <button
                className="rat-editor-window-navigation-button"
                ref={fileButtonRef}
                onClick={handleFileButtonClick}
            >
                File
            </button>

            <PopperDropdown
                name="File"
                ref={fileButtonRef}
                visibility={fileButtonVisibility}
                handleAllClicks={handleAllClicks}
            >

            </PopperDropdown>

*/