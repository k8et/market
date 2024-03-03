import React from 'react';
import Paragraph from "./Paragraph";

const Checkbox = ({ options, setOptions }) => {
    const handleCheckboxChange = (id) => {
        const updatedOptions = options.map((option) => {
            if (option.id === id) {
                return { ...option, checked: !option.checked };
            }
            return option;
        });
        setOptions(updatedOptions);
    };

    return (
        <div>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg">
                {options.map((option) => (
                    <li key={option.id} className="w-full">
                        <div className="flex items-center">
                            <input
                                id={`checkbox-${option.id}`}
                                type="checkbox"
                                value={option.value}
                                checked={option.checked}
                                className="appearance-none w-4 h-4 border border-gray-300 rounded cursor-pointer focus:ring-teal-500 focus:ring-2"
                                hidden
                                onChange={() => handleCheckboxChange(option.id)}
                            />
                            <label htmlFor={`checkbox-${option.id}`} className="flex items-center cursor-pointer w-full py-1  text-sm font-medium text-gray-900">
                                <div className={`w-4 h-4 flex items-center justify-center border border-gray-300 rounded mr-2 ${option.checked ? 'bg-gray-300' : 'bg-white'}`}>
                                    {option.checked && (
                                        <svg className="w-3 h-3 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                                <Paragraph>{option.label}</Paragraph>
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Checkbox;
