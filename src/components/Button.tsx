import * as React from "react";
var $ = require('jquery')
import {LabelProperties, ButtonProperties} from "./ElementProperties";
import {ComponentHelper} from "./ComponentHelper";
export class Button extends React.Component<ButtonProperties,{}>{
    private component:any;

    constructor(props:any){
        super(props)
        this.component = new ComponentHelper
    }
    render(){
        return <button className={`col-xs-${this.props.grid} col-xs-offset-${this.props.off_set}`} type={this.props.category} >
            {this.props.value}
        </button>
    }


}