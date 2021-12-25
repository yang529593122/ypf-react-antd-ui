import React from "react";
import "./index.css";

var TextInput = function TextInput(_ref) {
    var _ref$type = _ref.type,
        type = _ref$type === undefined ? "text" : _ref$type,
        label = _ref.label,
        value = _ref.value,
        _onChange = _ref.onChange,
        placeholder = _ref.placeholder;
    return React.createElement(
        "div",
        { className: "simple-form-group" },
        label && React.createElement(
            "label",
            { className: "simple-text-label" },
            label
        ),
        React.createElement("input", {
            type: type,
            className: "simple-text-input",
            value: value,
            placeholder: placeholder,
            onChange: function onChange(e) {
                return _onChange && _onChange(e.target.value);
            }
        })
    );
};

export default TextInput;