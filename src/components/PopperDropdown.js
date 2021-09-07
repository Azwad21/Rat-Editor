import React from 'react'
import { usePopper } from 'react-popper';


const PopperDropdown = React.forwardRef((props, ref) => {
    // console.log(props, ref)

    const [popperElement, setPopperElement] = React.useState(null);
    const { styles, attributes } = usePopper(ref.current, popperElement)


    return (
        <div
            className={props.visibility ? "rat-editor-popper-dropdown" : "rat-editor-popper-dropdown-hidden"}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
        >
            {props.name}
        </div>
    )
})

export default PopperDropdown
