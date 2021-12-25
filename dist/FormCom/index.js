import React from "react";
import { Form, Input, Button, Space } from 'antd';

var FormCom = function FormCom(_ref) {
    var formData = _ref.formData,
        onFinishFunc = _ref.onFinishFunc,
        initialValues = _ref.initialValues;
    var formWarp = formData.formWarp,
        formList = formData.formList;

    //

    var renderButton = function renderButton(data) {
        return React.createElement(
            Space,
            null,
            data.list && data.list.length && data.list.map(function (item) {
                return React.createElement(
                    Button,
                    item,
                    item.text
                );
            })
        );
    };

    var renderItem = function renderItem(data) {
        console.log(data, 222);
        switch (data.type) {
            case 'text':
                return React.createElement(Input, data);
                break;
            case 'password':
                return React.createElement(Input.Password, data);
                break;
            case 'button':
                return renderButton(data);
                break;
            default:
                return React.createElement(Input, data);
        }
    };

    return React.createElement(
        Form,
        Object.assign({}, formWarp, {
            initialValues: initialValues,
            onFinish: onFinishFunc
        }),
        formList && formList.length && formList.map(function (item, index) {
            return React.createElement(
                Form.Item,
                Object.assign({
                    key: item.formItem && item.formItem.name || index
                }, item.formItem),
                renderItem(item.formContent)
            );
        })
    );
};

export default FormCom;