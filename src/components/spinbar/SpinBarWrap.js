import React from "react";

import SpinBar from './SpinBar';
import SpinBarControlPane from './SpinBarControlPane';
import WinStatus from './WinStatus';
import '../../styles/spinbar.css';

const SpinBarWrap = () => {
    const barSize = 6;
    return(
        <div id="Spinbar-wrap" className="d-flex flex-column align-items-center justify-content-center p-2">
            <SpinBar bar_size={ barSize } />
            <SpinBarControlPane bar_size={ barSize } />
            <WinStatus />
        </div>
    )
}

export default SpinBarWrap;