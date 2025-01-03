import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import _ from "lodash";
import "./pagination.scss";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = itemsCount / pageSize;
  if (pagesCount <= 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination pagination-lg">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <Link
              className="page-link"
              to="#"
              onClick={() => onPageChange(page)}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
