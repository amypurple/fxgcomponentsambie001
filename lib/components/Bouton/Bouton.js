import React, { useState } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

export const Bouton = ({type, size, shape, text, link, disabled}) => {
  const [block, setBlock] = useState("");

  return (
    <>
      <Button 
        type={type}
        size={size}
        shape={shape}
        href={link}
        disabled={disabled}
        block={block}
        onClick={() => setBlock("block")}
      >{text}
      </Button>
    </>
  );
}

Bouton.propTypes = {
  type: PropTypes.oneOf(["default","primary","ghost","dashed","link","text"]),
  size: PropTypes.oneOf(["large","middle","small"]),
  shape: PropTypes.oneOf(["default","circle","round"]),
  text: PropTypes.string,
  link: PropTypes.string,
  disabled: PropTypes.bool
};






