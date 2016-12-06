
import * as React from "react";
import {LabelProperties, ButtonProperties, FormProperties} from "./ElementProperties";
import {ComponentHelper} from "./ComponentHelper";
var $ = require('jquery')
require('jquery-validation')
export class Form extends React.Component<FormProperties,{}>{
    private component:any;
    private component_id:any;

    constructor(props:any){
        super(props)
        this.component = new ComponentHelper
        this.component_id = Math.random()*10
    }
    render() {
        return <form id={this.props.id} className={`col-xs-${this.props.grid}`} method={this.props.method} action={this.props.url}>
            {this.props.childComponent.map((v: any, k: any)=> {
                return this.component.render_component(v, k)
            })}

            <div className="clearfix"></div>
        </form>
    }

    componentDidMount() {
      let url = this.props.url
        let method = this.props.method
        $(`#${this.props.id}`).validate({
            submitHandler: function (form:any) {
                $.ajax({
                    type: method,
                    url: url,
                    data: $(form).serialize(),
                    success: function () {
                        $(form).html("<div id='message'></div>");
                        $('#message').html("<h2>Your request is on the way!</h2>")
                            .append("<p>someone</p>")
                            .hide()
                            .fadeIn(1500, function () {
                                $('#message').append("<img id='checkmark' src='images/ok.png' />");
                            });
                    },
                    error(e:any){
                        console.log(e)
                    }
                });
                return false; // required to block normal submit since you used ajax
            },
            errorElement : 'div',
            errorLabelContainer: '.errorTxt'
        })
    }

}