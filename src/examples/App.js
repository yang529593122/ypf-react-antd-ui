import React from "react";
import { FormCom } from "../lib";
const  initialValues={
    username:'杨鹏飞',
    password:'123456',
}
const App = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const resetFunc = (e) =>{
        console.log('重置')
    }
    const formData = {
        formWarp:{
            name: "basic",
            labelCol: {
                span: 8
            },
            wrapperCol: {
                span: 16,
            },
        },
        formList:[
            {
                formItem : {
                    label:'text_area',
                    name:'text_area',
                },
                formContent:{
                    type:'text_area',
                    placeholder:'请输入用户名',
                }
            },
            {
                formItem : {
                    label:'date_picker',
                    name:'date_picker',
                },
                formContent:{
                    type:'date_picker',
                }
            },
            {
                formItem : {
                    label:'Switch',
                    name:'Switch',
                    valuePropName:"checked"
                },
                formContent:{
                    type:'switch',
                }
            },
            {
                formItem : {
                    label:'radio',
                    name:'radio',
                },
                formContent:{
                    type:'radio',
                    placeholder:'请输入用户名',
                    attrs:{
                        key:'id',
                        value:'value'
                    },
                    list:[
                        {id:1,value:'测试用例 => 1',disabled:true},
                        {id:2,value:'测试用例 => 2'},
                        {id:3,value:'测试用例 => 3'},
                        {id:4,value:'测试用例 => 4'}
                    ]
                }

            },
            {
                formItem : {
                    label:'select',
                    name:'select_list',
                },
                formContent:{
                    type:'select',
                    placeholder:'请输入用户名',
                    allowClear:true,
                    attrs:{
                        key:'id',
                        value:'value'
                    },
                    list:[
                        {id:1,value:'测试用例 => 1',disabled:true},
                        {id:2,value:'测试用例 => 2'},
                        {id:3,value:'测试用例 => 3'},
                        {id:4,value:'测试用例 => 4'}
                    ]
                }

            },
            {
                formItem : {
                    label:'用户',
                    name:'username',
                    rules : [
                        {
                            required: true,
                            message: 'Please input your username!',
                        }
                    ]
                },
                formContent:{
                    type:'text',
                    placeholder:'请输入用户名'
                }

            },
            {
                formItem: {
                    label:'年龄',
                    name:'password',
                },
                formContent:{
                    type:'password',
                    placeholder:'请输入密码'
                }
            },
            {
                formItem:{
                    wrapperCol:{ offset: 8, span: 16 },
                },
                formContent:{
                    type:'button',
                    list:[
                        {
                            key:1,
                            text:'提交',
                            type:"primary",
                            htmlType:"submit"
                        },
                        {
                            key:2,
                            text:'重置',
                            onClick:resetFunc
                        }
                    ]
                }
            },
        ]
    }
    return (
        <div>
            <FormCom
                initialValues={initialValues}
                formData={formData}
                onFinishFunc={onFinish}/>
        </div>
        )

}

export default App;