import * as React from "react";


var html = require('./hello.html')

export interface HelloProps { compiler: string; framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return   <div  dangerouslySetInnerHTML={ {__html: html} } />

    };

}