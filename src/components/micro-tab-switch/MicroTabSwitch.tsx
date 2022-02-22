import React, {ReactElement} from 'react';
import {SMicroTabSwitch} from './styles/SMicroTabSwitch';

export interface IMicroTabSwitch {
  initialTabIndex?: number;
  getCurrentIndex?: (index) => void;
  children: ReactElement[] | ReactElement;
  onTabClick?: () => void;
}

export const MicroTabSwitch: React.FC<IMicroTabSwitch> = ({
                                                            initialTabIndex = 0,
                                                            children,
                                                            onTabClick,
                                                            getCurrentIndex
                                                          }) => {
  
  const [currentTab, setCurrentTab] = React.useState(initialTabIndex);
  
  return (
    <SMicroTabSwitch>
      {React.Children.map(children, (child: ReactElement, index) =>
        React.cloneElement(child, {
          ...child.props,
          active: currentTab === index,
          onClick: () => {
            setCurrentTab(index);
            onTabClick?.();
            getCurrentIndex?.(index);
          },
        })
      )}
    </SMicroTabSwitch>
  )
}
