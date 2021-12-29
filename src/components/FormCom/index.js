import React from "react" ;
import { Form, Input, Button, Space, Select, Radio, Switch, DatePicker } from 'antd';

const FormCom = ({ formData,onFinishFunc,initialValues }) => {
    const { formWarp,formList }  = formData
    // 渲染Button
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
    // 渲染Select
    const renderSelect = (data) => {
        return (
            <Select {...data}>
                {
                    data.list && data.list.length && data.list.map((item)=>{
                        return <Select.Option disabled={item.disabled} key={item[data.attrs.key]} value={item[data.attrs.key]}>{item[data.attrs.value]}</Select.Option>
                    })
                }
            </Select>
        )
    }
    // 渲染单选
    const renderRadio = (data) => {
        return (
            <Radio.Group {...data}>
                {
                    data.list && data.list.length && data.list.map((item)=>{
                        return <Radio  key={item[data.attrs.key]} value={item[data.attrs.key]}>{item[data.attrs.value]}</Radio>
                    })
                }
            </Radio.Group>
        )
    }
    const renderItem = (data) => {
        switch (data.type) {
            case 'text':
                return <Input {...data } />
                break;
            case 'text_area':
                return <Input.TextArea {...data } />
                break;
            case 'password':
                return <Input.Password {...data } />
                break;
            case 'select':
                return renderSelect(data)
                break;
            case 'radio':
                return renderRadio(data)
                break;
            case 'switch':
                return <Switch />
                break;
            case 'date_picker':
                return <DatePicker />
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