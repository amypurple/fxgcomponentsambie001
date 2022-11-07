import React from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';

export const Liste = ({size, header, data, footer}) => {
  // {<div>{header}</div>}
  return (
    <>
      <List
        header={header}
        footer={footer}
        bordered
        size={size}
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  );
}

Liste.propTypes = {
  size: PropTypes.oneOf(["large","default","small"]),
  header: PropTypes.string,
  data: PropTypes.array,
  footer: PropTypes.string,
};






