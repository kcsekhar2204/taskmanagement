import React, { useEffect, useState } from 'react';

const InputDropDown = ({ label, options, selectedValue, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isDisable, setDisable] = useState(null)

    useEffect(() => {
        setSelectedOption(selectedValue)
        if(selectedValue)setDisable({disabled:true}) 
        else setDisable(null)
    }, [selectedValue])

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className="dropdown">
            {label && <div>{label}</div>}
            <select
                value={selectedOption}
                onChange={(e) => handleSelect(e.target.value)}
                className='border focus:outline-none focus:border-blue-500 focus:border-2 border-gray-500'
            >
                <option value="" {...isDisable}>Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default InputDropDown;
