import React from "react";

import Barrel from './Barrel';

const SpinBar = (props) => {
    const createBarrels = () => {
        const barrels = [];

        for(let i = 0; i < props.bar_size; ++i){
            let extraClass = '';
            if (i == 0){
                extraClass = 'rounded-start';
            }
            else if (i == props.bar_size - 1){
                extraClass = 'rounded-end';
            }
            barrels.push(<Barrel key={ `barrel_${i}` } extra_class={ extraClass } />);
        }

        return barrels;
    }
    return(
        <div id="Spinbar" className="d-flex flex-row align-items-center w-100 rounded">
            {
                createBarrels()
            }
        </div>
    )
}

export default SpinBar;