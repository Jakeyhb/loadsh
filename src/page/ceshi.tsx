import React, { useState } from 'react';

export const RadioButtonGroup = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleOptionClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {options.map((option) => (
        <div
          key={option.value}
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '430px',
            height: '118px',
            margin: '10px',
            border: `2px solid ${selectedValue === option.value ? '#000' : '#ccc'}`,
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
          }}
          onClick={() => handleOptionClick(option.value)}
        >
          <div style={{ flex: 1 }}>{option.label}
          
           <p style={{ fontSize: '12px', marginTop: '5px' }}>{option.description}</p></div>
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: '1px solid #000',
              backgroundColor: selectedValue === option.value ? '#000' : 'transparent',
              marginLeft: '10px',
            }}
          />
        </div>
      ))}
    </div>
  );
};


