import {Div} from "./Div";
import * as React from 'react'
import {Label} from "./Label";
import {Input} from "./Input";
import {Button} from "./Button";
import {Form} from "./Form";
/**
 * Created by icepoint1999 on 05/12/2016.
 */

export class ComponentHelper {

    render_component(ui_component: any, key: any) {
        switch (ui_component.type) {
            case 'button':
                return <Button  off_set={ui_component.off_set} category={ui_component.category} callback_functions={ui_component.callback_functions} grid={ui_component.grid} key={key} css="" events={ui_component.event} position="" childComponent={ui_component.ui_components|| []} value={ui_component.value}/>
            case 'label':
                return <Label grid={ui_component.grid} key={key} css="" events="" position="" childComponent={ui_component.ui_components|| []} value={ui_component.value}/>
            case 'form':
                return <Form id={ui_component.ui_component_id} grid={ui_component.grid} key={key} css="" method={ui_component.method} url={ui_component.action} childComponent={ui_component.ui_components|| []}/>
            case 'input':
                return <Input validations={ui_component.validations} name={ui_component.ui_component_name} grid={ui_component.grid || 12} key={key} css={ui_component.style} events="" position="" childComponent={ui_component.ui_components|| []} value=""/>
            case 'div':
                return  <Div key={key} css={ui_component.style} grid={ui_component.grid || 12} events="" position="" childComponent={ui_component.ui_components} value=""/>
            default:
                return <Div grid={ui_component.grid || 12} key={key} css={ui_component.style} events="" position="" childComponent={ui_component.ui_components} value=""/>

        }
    }

    redirect(params:any){
        window.location.href= params.url
    }


}