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
            layout:'inline'
        },
        formList:[
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