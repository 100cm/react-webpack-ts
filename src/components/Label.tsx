import * as React from "react";
import {LabelProperties} from "./ElementProperties";
import {ComponentHelper} from "./ComponentHelper";
export class Label extends React.Component<LabelProperties,{}>{
    private component:any;

    constructor(props:any){
        super(props)
        this.component = new ComponentHelper
    }
    render(){
        return <label className={`col-xs-${this.props.grid}`}>
            {this.props.value}
            {this.props.childComponent.map((v:any,k:any)=>{
                this.component.render_component(v,k)
            })}

        </label>
    }

}