/**
 * Created by icepoint1999 on 05/12/2016.
 */


export  interface ButtonProperties {
    category:string;
    grid:string;
    css: string;
    events: any;
    position: string;
    childComponent: any[];
    value :string;
    callback_functions:any[]
    off_set:any;

};

export interface InputProperties{
    validations:any;
    grid: string;
    css: any;
    events: string;
    position: string;
    childComponent: any[];
    name:string;
    value :string;
};

export interface LabelProperties{
    grid: string;
    css: string;
    events: string;
    position: string;
    childComponent: any[];
    value :string;
};

export  interface FormProperties{
    id:string;
    grid: string;
    css:string;
    method:string;
    url:string;
    childComponent:any[];
}