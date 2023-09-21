import { __spreadArray } from '../node_modules/tslib/tslib.es6.js';
import { useMemo } from 'react';
var DOTS = '...';
var range = function (start, end) {
  var length = end - start + 1;
  return Array.from({
    length: length
  }, function (_, idx) {
    return idx + start;
  });
};
var usePagination = function (_a) {
  var totalCount = _a.totalCount,
    pageSize = _a.pageSize,
    _b = _a.siblingCount,
    siblingCount = _b === void 0 ? 1 : _b,
    currentPage = _a.currentPage;
  var paginationRange = useMemo(function () {
    var totalPageCount = Math.ceil(totalCount / pageSize);
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    var totalPageNumbers = siblingCount + 5;
    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    /*
        Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    var leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    var rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    var shouldShowLeftDots = leftSiblingIndex > 2;
    var shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    /*
        Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      var leftItemCount = 3 + 2 * siblingCount;
      var leftRange = range(1, leftItemCount);
      return __spreadArray(__spreadArray([], leftRange, true), [DOTS], false);
    }
    /*
        Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      var rightItemCount = 3 + 2 * siblingCount;
      var rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return __spreadArray([DOTS], rightRange, true);
    }
    /*
        Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      var middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return __spreadArray(__spreadArray([DOTS], middleRange, true), [DOTS], false);
    }
    return [];
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};
export { DOTS, usePagination };
//# sourceMappingURL=usePagination.js.map
