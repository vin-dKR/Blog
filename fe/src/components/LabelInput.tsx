import React from 'react'

interface LabelInputProps {
    label: string;
    id: string;
    name?: string;
    value?: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelInput({
    label,
    id,
    name,
    value,
    type,
    required,
    onChange
}: LabelInputProps) {
    return (
        <div className="relative mb-4 group">
            <input 
                type={type || 'text'}
                id={id} 
                name={name}
                value={value}
                placeholder=" "
                required={required}
                onChange={onChange}
                className="block w-full px-4 py-3 text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-lg appearance-none peer dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 transition-all duration-300 ease-in-out" 
            />
            <label 
                htmlFor={id}
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
            >
                {label}
            </label>
        </div>
    )
}

export default LabelInput