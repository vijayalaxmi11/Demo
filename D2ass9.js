import React from 'react';
class D2ass9 extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            cnt:4
        }
    }
    render()
    {
        return(
            <div>
                <h1>
                    {this.state.cnt}
                </h1>
                <button onClick={()=>this.setState({cnt:this.state.cnt+1})}>increment</button>
            </div>
        )
    }
}
export default D2ass9;