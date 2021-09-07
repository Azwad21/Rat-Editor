import React from 'react'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

const Tooltip = (props) => {
    return (
        <Tippy
            delay={[1000, 100]}
            // duration={[null, 100]}
            render={attrs => (
                <div className="tippyTooltip" tabIndex="-1" {...attrs}>{props.content}</div>
                )}
            {...props}
        >
            {props.children}
        </Tippy>
    )
}

export default Tooltip
