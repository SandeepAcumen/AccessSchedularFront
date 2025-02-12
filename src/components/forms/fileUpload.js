import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';

const FileUpload = ({ label, name, accept, fontWeight = "font-normal", labelColor, placeholder }) => {
    const [, meta, helpers] = useField(name);
    const [fileName, setFileName] = useState('');

    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            helpers.setValue(file);
        }
    };

    return (
        <div className="mb-3">
            <div className="flex justify-between">
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
            <div className="relative">
                <input
                    id={name}
                    name={name}
                    type="file"
                    accept={accept}
                    className={`w-full px-4 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={handleChange}
                />
                <span
                    className={`absolute left-56 top-3.5 text-gray-500 text-sm pointer-events-none ${fileName ? 'hidden' : 'hidden lg:block'
                        }`}
                >
                    {placeholder ? placeholder : "(. JSON)"}
                </span>
            </div>
        </div>
    );
};

export default FileUpload;
