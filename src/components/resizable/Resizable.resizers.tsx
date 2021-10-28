import React, {useCallback, memo} from 'react';
import { Movable } from 'webrix/components';

const INITIAL = {top: 0, left: 0, width: 0, height: 0};

const Resizer = ({direction, onBeginResize, onResize, onEndResize}: {direction?: string, onBeginResize?: any, onResize?: any, onEndResize?: any}) => (
    <Movable
        className={`resizable ${direction}-resizer`}
        onBeginMove={onBeginResize}
        onMove={onResize}
        onEndMove={onEndResize}/>
);

const Left = memo(props => {
    const { onResize } = props;
    const handleOnResize = useCallback(({dx, cx}) => (
        onResize({
            delta: {...INITIAL, left: dx, width: -dx},
            change: {...INITIAL, left: cx, width: -cx},
        })
    ), [onResize]);
    return (
        <Resizer {...props} onResize={handleOnResize} direction='left'/>
    );
});

Left.displayName = 'Resizable.Resizer.Left';

const Right = memo(props => {
    const { onResize } = props;
    const handleOnResize = useCallback(({dx, cx}) => (
        onResize({
            delta: {...INITIAL, width: dx},
            change: {...INITIAL, width: cx},
        })
    ), [onResize]);
    return (
        <Resizer {...props} onResize={handleOnResize} direction='right'/>
    );
});

Right.displayName = 'Resizable.Resizer.Right';

export {Left, Right};