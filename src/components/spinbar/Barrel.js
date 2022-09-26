import React from "react";

const Barrel = (props) => {
    return(
        <div className={ `Barrel flex-grow-1 d-flex align-items-center p-2 ${props.extra_class}` }>
            <span className="rounded p-2"></span>
        </div>
    )
}

export default Barrel;