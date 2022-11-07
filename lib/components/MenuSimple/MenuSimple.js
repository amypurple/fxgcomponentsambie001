import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';

export const MenuSimple = ({size, mode, items}) => {
  return (
    <>
      <Menu
        size={size}
        items={items}
        mode={mode}
        renderItem={(item) => <Menu.Item>{item}</Menu.Item>}
      />
    </>
  );
}

MenuSimple.propTypes = {
  size: PropTypes.oneOf(["large","default","small"]),
  mode: PropTypes.oneOf(['vertical','horizontal','inline']),
  items: PropTypes.array,
};






