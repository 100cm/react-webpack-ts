import * as React from "react";
import * as ReactDOM from "react-dom";
var $ = require('jquery')
require('jquery-validation')
import {Div} from "./components/Div";
import define = require("core-js/fn/object/define");
import {equal} from "assert";
import {Code} from "./components/Code";
import {Button} from "./components/Button";


var container: any = {
    "ui_components": [
        {
            "name": "用户表单",
            "id": "user_form",
            "default_value": "",
            "placeholder": "请输入用户名",
            "value": "xml",
            "grid": 8,
            "seq": 1,
            "eanble": true,
            "editable": true,
            "presence": true,
            "method": "post",
            "action": "/user/new.json",
            "style": {
                "marginRight": "12em"
            },
            "type": "form",
            "ui_component_id": "user_form",
            "ui_component_name": "",
            "validations": [],
            "ui_components": [
                {
                    "name": "账号",
                    "default_value": "3",
                    "grid": 3,
                    "seq": 6,
                    "eanble": true,
                    "editable": true,
                    "presence": true,
                    "value": "账号",
                    "style": {
                        "visibility": true
                    },
                    "type": "label",
                    "ui_component_id": "user_max_fail_count",
                    "ui_component_name": "user[max_fail_count]"
                },
                {
                    "name": "账号输入",
                    "default_value": "3",
                    "grid": 7,
                    "presence": true,
                    "style": {
                        "lineHeight": "20px"
                    },
                    "type": "input",
                    "ui_component_id": "user_max_fail_count",
                    "ui_component_name": "user[name]",
                    "validations": {
                        "max_length": 12,
                        "required": "false",
                        "rules": [
                            "validate_bug"
                        ]
                    },
                    "ui_components": []
                },
                {
                    "name": "创建时间",
                    "grid": 3,
                    "seq": 7,
                    "value": "创建时间",
                    "eanble": false,
                    "editable": false,
                    "presence": false,
                    "style": {
                        "visibility": true
                    },
                    "type": "label",
                    "ui_component_id": "user_created_at",
                    "ui_component_name": "user[created_at]",
                    "ui_components": []
                },
                {
                    "label": "创建时间",
                    "name": "密码",
                    "form_name": "create_at",
                    "grid": 7,
                    "seq": 7,
                    "value": "创建时间",
                    "eanble": false,
                    "editable": false,
                    "presence": false,
                    "style": {
                        "visibility": true,
                        "lineHeight": "20px"
                    },
                    "validations": {
                        "max_length": 12,
                        "required": false,
                        "rules": [
                            "validate_bug"
                        ]
                    },
                    "type": "input",
                    "ui_component_id": "user_created_at",
                    "ui_component_name": "user[created_at]",
                    "ui_components": []
                },
                {
                    "name": "提交按钮",
                    "type": "button",
                    "category": "submit",
                    "form": "user_form",
                    "value": "登陆",
                    "grid": "3",
                    "off_set": "3",
                    "event": "1",
                    "callback_functions": [
                        {
                            "function_name": "redirect",
                            "function_params": {
                                "url": "http: //www.baidu.com"
                            }
                        }
                    ],
                    "ui_components": []
                },

                {
                    "name": "提交按钮",
                    "type": "button",
                    "category": "button",
                    "form": "user_form",
                    "value": "注册",
                    "grid": "3",
                    "left": "3",
                    "event": "1",
                    "callback_functions": [
                        {
                            "function_name": "redirect",
                            "function_params": {
                                "url": "http: //www.baidu.com"
                            }
                        }
                    ],
                    "ui_components": []
                }
            ]
        }
    ]
}




// this one requires the text "buga", we define a default message, too
    $.validator.addMethod("equal", function (value: any, e: Element, params: any) {
        return value == params;
    }, `请输入正确的字符`);

$.validator.addMethod("required", function (value: any, e: any, params: any) {
    return value != ""
}, `请输入字符`);


$.validator.addClassRules({
    validate_bug: {
        required: true,
        equal: 11
    },
    zip: {
        required: true,
        digits: true,
        minlength: 5,
        maxlength: 5
    }
});

var code_value = container

function change() {
    console.log(code_value)
    ReactDOM.render(<Div grid="12" css={{width: 600+'px',border: '1xp solid red'}} events="" position=""
                         childComponent={code_value.ui_components} value=""/>
        , document.getElementById("hello"))
}


function changeText(e:any) {
    code_value = JSON.parse(e.target.value)
    console.log(code_value)
}


ReactDOM.render(<textarea style={{width: '500px',height:'500px'}} onChange={changeText}
                          defaultValue={JSON.stringify(container,null,"\t")}/>, document.getElementById("code"))

ReactDOM.render(<button onClick={change.bind(this)}>改变 </button>, document.getElementById('changeCode'))


