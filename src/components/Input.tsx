import * as React from "react";
import {InputProperties} from "./ElementProperties";
import {ComponentHelper} from "./ComponentHelper";

export class Input extends React.Component<InputProperties,{}>{
    private component:any;
    private classes:any[];

    constructor(props:any){
        super(props)
        this.component = new ComponentHelper
        this.state ={
        }
        this.classes = []

    }
    render(){
        return <input style={this.props.css} maxLength={this.props.validations.max_length}
                      required={this.props.validations.required==true ? true :false}
                      name={this.props.name} className={ `${this.props.validations.rules.map((v:any)=>v+" ")} col-xs-${this.props.grid}`}>

        </input>
    }



}