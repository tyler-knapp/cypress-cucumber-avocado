import React from 'react';
import Button from './Button';
import logo from '../images/logo.png'

class FirstHeader extends React.Component {
    render(){
        return(
            <div>
                <img src={logo} style={{width: 150}} alt="philo delight logo"/>
                <h1>PHILO DELIGHT</h1>
                <Button/>
            </div>
        )
    }
}

export default FirstHeader;