

import * as React from "react";
export  class Code extends React.Component<{state:any},{}>{
    constructor(props:any){
        super(props)
        this.state={code: ''}
        this.handleChange = this.handleChange.bind(this)
    }
    render(){
     return <textarea onChange={this.handleChange}  style={{width:300+'px',height: 300+'px'}}></textarea>
    }


    handleChange(e:any){

        this.setState({code: e.target.value})

    }

}