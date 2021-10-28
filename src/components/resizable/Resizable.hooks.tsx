import {useRef, useCallback} from 'react';

export const useResize = ops => {
    const shared = useRef({});

    const onBeginResize = useCallback(e => {
        ops.forEach(({onBeginResize}) => onBeginResize(e, shared.current));
    }, [ops]);

    const onResize = useCallback(e => {
        ops.forEach(({onResize}) => onResize(e, shared.current));
    }, [ops]);

    const onEndResize = useCallback(e => {
        ops.forEach(({onEndResize}) => onEndResize(e, shared.current));
    }, [ops]);

    return {onBeginResize, onResize, onEndResize};
};