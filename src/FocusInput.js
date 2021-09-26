import React from 'react'
import Input from './Input';

class FocusInput extends React.Component {
    constructor(props){
        super(props)
        this.componentRef = React.createRef();
    }
    handleClick = () => {
        this.componentRef.current.focusInput();
    }
    render(){
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default FocusInput;
