import React from 'react';

const MySelect = ({options, defaultvalue}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <select>
                <option disabled value="">{defaultvalue}</option>
                {
                    options.map(option =>
                        <option key={option.value} value={option.value}>{option.name}</option>
                    )
                }
            </select>
        </div>
    );
};

export default MySelect;