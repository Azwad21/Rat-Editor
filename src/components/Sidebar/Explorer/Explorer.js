import React from 'react'
import Tree from "./ExplorerTree/Tree";

const Explorer = React.memo(props => {
    const [paths, setPaths] = React.useState(null);

    window.ipcRenderer.on("path:data", (paths) => setPaths(paths));
    window.test = () => {
        window.ipcRenderer.send("test:path:data:request", "please")
    }

    return (
        <div className="rat-editor-explorer">
            <div className="rat-editor-explorer-header">
                <h4>Explorer</h4>
            </div>
            <Tree paths={paths}/>
        </div>
    )
});

export default Explorer
