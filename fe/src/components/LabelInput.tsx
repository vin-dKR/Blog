import React from 'react'

interface LabelInputProps {
    label: string;
    id: string;
    name?: string;
    value?: string;
    type: string;
    placeholder: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelInput({
    label,
    id,
    name,
    value,
    type,
    placeholder,
    required,
    onChange
}: LabelInputProps) {
    return (
        <div className='flex flex-col'>
            <div className="py-3">
                <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-100 dark:text-black">
                    {label}
                </label>

                <input 
                    type={type || 'text'}
                    id={id} 
                    name={name}
                    // value={value}
                    placeholder={placeholder}
                    required={required}
                    onChange={onChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                />

            </div>
        </div>
    )
}

export default LabelInput