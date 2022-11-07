import React, { useState } from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';

export const PaginationSimple = ({size, current, total, pageSize}) => {

  // Default 10 items par page
  const itemsPerPage = (pageSize?pageSize:10);
  const [currentPage, setCurrent] = useState(current);

  const handlePageClick = (page) => {
    setCurrent(parseInt(page));
  };

  return (
    <>
      <Pagination
        bordered
        current={currentPage}
        size={size}
        total={total}
        pageSize={itemsPerPage}
        onChange={handlePageClick}
      />
    </>
  );
}

PaginationSimple.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  size: PropTypes.oneOf(["default","small"]),
};






