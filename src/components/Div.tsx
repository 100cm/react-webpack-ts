import * as React from "react";
import {ComponentHelper}  from "./ComponentHelper"
export  interface DivProperties {
    grid: string;
    css: any;
    events: string;
    position: string;
    childComponent: string[];
    value :string;
};
export  class Div  extends  React.Component<DivProperties,{}>{
    private component:any;

    constructor(props:any){
        super(props)
        this.component = new ComponentHelper();
    }
    render(){
        return <div style={this.props.css}>
            {this.props.childComponent.map((v:any,k:any)=>{
                return this.component.render_component(v,k)
            })}

            <div className="clear-both"></div>
        </div>
    }


}