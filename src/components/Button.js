import React from 'react';

class Button extends React.Component {
    render(){
        const handleClick = () => {
            document.getElementById("demo").innerHTML = "Tyler Was Here"
        }         
        return(
            <div>
                <button onClick={handleClick}> Click Me!!!</button>
                <p id="demo"></p>
            </div>
        )
    }
}

export default Button;