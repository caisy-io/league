import {func, node} from 'prop-types';

export const propTypes = {
    onBeginResize: func,
    onResize: func,
    onEndResize: func,
    children: node,
};

export const defaultProps = {
    onBeginResize: () => null,
    onResize: () => null,
    onEndResize: () => null,
    children: null,
};