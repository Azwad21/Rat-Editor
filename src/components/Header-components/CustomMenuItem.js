import React from 'react'

const CustomMenuItem = (props) => {
    const rootStyling = {
        display: "flex",
        justifyContent: "space-between",
        minWidth: "220px"
    }

    const labelStyling = {
        // marginRight: "7.5rem"
    }

    const keyStyling = {
        fontWeight: "bold"
    }

    return (
        <div style={rootStyling}>
            <span style={labelStyling}>
                {props.label}
            </span>
            {
                props.labelKey ? 
                    <span style={keyStyling}>
                        {props.labelKey}
                    </span>
                : ""
            }
        </div>
    )
}

export default CustomMenuItem
