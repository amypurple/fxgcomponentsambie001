import React, { useState } from 'react';
import { Checkbox } from 'antd';
import PropTypes from 'prop-types';

export const CaseCocher = ({label, checked, disabled}) => {
  const [cocher, setChecked] = useState(checked);
  const handleClick = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <Checkbox 
        checked={cocher}
        disabled={disabled}
        onChange={handleClick}
      >{label}
      </Checkbox>
    </>
  );
}

CaseCocher.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};






