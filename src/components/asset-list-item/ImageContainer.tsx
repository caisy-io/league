import React from 'react';
import { SImagePlaceholder } from './styles/SImagePlaceholder';

interface IAssetListItem {

}

export const ImageContainer: React.FC<IAssetListItem> = ({ ...props }) => {
    return (
        <SImagePlaceholder>
            {props.children}
        </SImagePlaceholder>
    )
}
