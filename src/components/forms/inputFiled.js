import { Field, ErrorMessage } from "formik";
import React from "react";

const InputField = ({
    label,
    name,
    type = "text",
    placeholder = "",
    value,
    color = "",
    labelColor = "",
    fontWeight = "font-normal",
    maxLength,
    disabled = false,
    ...props
}) => {
    return (
        <div className={`${color} flex flex-col mb-3`}  {...props}>
            <div className={`${label ? "flex justify-between" : ""}`}>
                {label && (
                    <label
                        htmlFor={name}
                        className={`${fontWeight} ${labelColor} text-sm mb-2`}
                    >
                        {label}
                    </label>
                )}
                <ErrorMessage
                    name={name}
                    component="div"
                    className="text-sm text-red-500 mt-1"
                />
            </div>

            <Field name={name}>
                {({ field, meta }) => (
                    <div className="relative">
                        <input
                            type={type}
                            {...field}
                            id={name}
                            placeholder={placeholder}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${meta.touched && meta.error ? "border-red-500" : "border-gray-300"
                                }`}
                            maxLength={maxLength}
                            value={value}
                            disabled={disabled}
                            {...props}
                        />
                        {/* Formik's ErrorMessage Component for Error Display */}
                    </div>
                )}
            </Field>
        </div>
    );
};

export default InputField;