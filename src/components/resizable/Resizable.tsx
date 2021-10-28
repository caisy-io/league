
import React, { memo } from 'react';
import { SResizable } from './styles/SResizable';
import { defaultProps } from './Resizable.props';

export const Resizable = ({onBeginResize, onResize, onEndResize, children}) => (
    <SResizable>
        {
            React.Children.toArray(children).map(child => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child, {onBeginResize, onResize, onEndResize})
                }
            })
        }
    </SResizable>
);

Resizable.displayName = 'Resizable';
Resizable.defaultProps = defaultProps;

export default memo(Resizable);