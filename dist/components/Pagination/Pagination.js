import React from 'react';
import { usePagination, DOTS } from '../../hooks/usePagination.js';
import classNames from 'classnames';
import modules_a3d40e77 from './Pagination.module.css.js';
function Pagination(props) {
  var _a;
  var onPageChange = props.onPageChange,
    totalCount = props.totalCount,
    _b = props.siblingCount,
    siblingCount = _b === void 0 ? 1 : _b,
    currentPage = props.currentPage,
    pageSize = props.pageSize,
    _c = props.className,
    className = _c === void 0 ? '' : _c;
  var paginationRange = usePagination({
    currentPage: currentPage,
    totalCount: totalCount,
    siblingCount: siblingCount,
    pageSize: pageSize
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  var lastPage = paginationRange[paginationRange.length - 1];
  var onNext = function () {
    var totalPages = Math.ceil(totalCount / pageSize);
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };
  var onPrevious = function () {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };
  return React.createElement("ul", {
    className: classNames(modules_a3d40e77['pagination-container'], 'mx-auto p-3', (_a = {}, _a[className] = className, _a))
  }, React.createElement("li", {
    className: classNames(modules_a3d40e77['pagination-item'], modules_a3d40e77.arrow, modules_a3d40e77['arrow-left-one'], {
      disabled: currentPage === 1
    }),
    onClick: function () {
      return onPageChange(1);
    }
  }), React.createElement("li", {
    className: classNames(modules_a3d40e77['pagination-item'], modules_a3d40e77.arrow, modules_a3d40e77['arrow-left-two'], {
      disabled: currentPage === 1
    }),
    onClick: onPrevious
  }), paginationRange.map(function (pageNumber, index) {
    var _a;
    if (pageNumber === DOTS) {
      return React.createElement("li", {
        className: modules_a3d40e77['pagination-item']
      }, "\u2026");
    }
    return React.createElement("li", {
      className: classNames(modules_a3d40e77['pagination-item'], (_a = {}, _a[modules_a3d40e77.selected] = pageNumber === currentPage, _a)),
      onClick: function () {
        return onPageChange(pageNumber);
      },
      key: index
    }, pageNumber);
  }), React.createElement("li", {
    className: classNames(modules_a3d40e77['pagination-item'], modules_a3d40e77.arrow, modules_a3d40e77['arrow-right-one'], {
      disabled: currentPage === lastPage
    }),
    onClick: onNext
  }), React.createElement("li", {
    className: classNames(modules_a3d40e77['pagination-item'], modules_a3d40e77.arrow, modules_a3d40e77['arrow-right-two'], {
      disabled: currentPage === lastPage
    }),
    onClick: function () {
      return onPageChange(Math.ceil(totalCount / pageSize));
    }
  }));
}
export { Pagination as default };
//# sourceMappingURL=Pagination.js.map
