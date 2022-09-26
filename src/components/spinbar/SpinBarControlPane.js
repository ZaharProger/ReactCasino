import React, { useEffect } from "react";

const SpinBarControlPane = (props) => {
    const doSpin = (isFirstSpin=true) => {
        let barrels = [];
        for (let i = 0; i < props.bar_size; ++i){
            barrels.push(Math.round(Math.random() * props.bar_size));
        }
            
        const barrelSpans = Array.from(document.getElementsByTagName('span'));
        for (let i = 0; i < props.bar_size; ++i){
            barrelSpans[i].innerText = barrels[i];
        }
        
        const winStatus = document.getElementById('Win-status');
        let areEqual = true;
        if (!isFirstSpin){
            const powerInputField = document.getElementById('Power-input-field');
            const powerInputData = powerInputField.value;
            let power = powerInputData == ''? 20 : parseInt(powerInputData);
            power = power <= 0? 20 : power;
            powerInputField.value = power;
        
            for (let i = 0; i < props.bar_size; ++i){
                barrels[i] += Math.round(power * (i / 2 + 1));
                if (barrelSpans[0].innerText != barrelSpans[i].innerText){
                    areEqual = false;
                    break;
                }
            }
        
            winStatus.style.display = areEqual? 'flex' : 'none';
        }
        else{
            winStatus.style.display = 'none';
        }
        
        return areEqual;
    }

    useEffect(() => {
        document.getElementById('spin-button').onclick = () => doSpin(false);
        doSpin();
    })

    return(
        <div id="Spinbar-control-pane" className="d-flex align-items-center justify-content-around rounded mt-4">
            <button id="spin-button" type="button" className="d-flex justify-content-center flex-grow-1 rounded">SPIN</button>
            <input type="number" id="Power-input-field" className="d-flex flex-grow-3 rounded" />
        </div>
    )
}

export default SpinBarControlPane;