import React from 'react';
class D2ass8 extends React.Component
{
    state={
        msg:'welcome visitor'
    }
    handleClick=()=>
    {
        alert('button click');
    this.setState({
        msg:"thank you for visiting"
    })}
    render()
    {
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.handleClick}>subscribe</button>
            </div>
        )
    }
}
    export default D2ass8;
    