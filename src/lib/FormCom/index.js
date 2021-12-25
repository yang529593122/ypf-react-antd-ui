import React from "react" ;
import { Form, Input, Button, Space } from 'antd';

const FormCom = ({ formData,onFinishFunc,initialValues }) => {
    const { formWarp,formList }  = formData

    const renderButton = (data) => {
        return (
            <Space>
                {
                    data.list && data.list.length && data.list.map((item)=>{
                        return <Button  {...item}>{item.text}</Button>
                    })
                }
            </Space>
        )
    }

    const renderItem = (data) => {
        switch (data.type) {
            case 'text':
                return <Input {...data } />
                break;
            case 'password':
                return <Input.Password {...data } />
                break;
            case 'button':
                return renderButton(data)
                break;
            default:
                return <Input {...data} />
        }
    }

    return (
        <Form
            {...formWarp}
            initialValues={initialValues}
            onFinish = {onFinishFunc}
        >
            { formList && formList.length && formList.map((item,index)=>{
                return (
                    <Form.Item
                        key = { item.formItem && item.formItem.name || index }
                        {...item.formItem}
                    >
                        { renderItem(item.formContent) }
                    </Form.Item>
                )
            })}
        </Form>
    )
}

export default FormCom;