import { default as React, useCallback, useEffect, useRef } from "react";
import { Img } from "../../base-components/img/Img";
import { IconWarning } from '../../icons';
import { IconCheckmarkOutlined } from '../../icons/IconCheckmarkOutlined';
import { IconCross } from '../../icons/IconCross';
import { IconDocuments } from '../../icons/IconDocuments';
import { Preview } from '../preview';
import { AssetListItem } from './AssetListItem';
import { AssetListItemTextWrapper } from './AssetListItemTextWrapper';
import { SAssetListItemDescription } from './styles/SAssetListItemDescription';
import { SAssetListItemIconWrapper } from './styles/SAssetListItemIconWrapper';
import { SAssetListItemTitle } from './styles/SAssetListItemTitle';
import { SFlexListItem } from './styles/SFlexListItem';
import { SImagePlaceholder } from './styles/SImagePlaceholder';

export default {
  title: `Components/List items/AssetListItem`,
  component: AssetListItemDemo,
  argTypes: {
    error: {
      description: "Changes the state of the component to error",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    recent: {
      description: "Changes the state of the component to recent",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    title: {
      description: "Changes the title of the component",
      control: { type: "text" },
    },
    description: {
      description: "Changes the description of the component",
      control: { type: "text" },
    },
    progressValue: {
      description: "Number for the progress value",
      control: { type: 'range', min: 0, max: 100 },
    },
  },
};

function AssetListItemDemo({ error, title, description, progressValue }) {
  const [iconWidth, setWidth] = React.useState(0);
  const calculatedRef = useCallback(node => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return (<div style={{ width: "320px" }}>
    <AssetListItem error={error}  >
      <SFlexListItem error={error} iconWidth={iconWidth}>
        <Preview size={40} image={<Img lazyload={false} src={"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!} resolution={48} />} />
        <AssetListItemTextWrapper progressValue={progressValue}>
          <SAssetListItemTitle error={error}>{title}</SAssetListItemTitle>
          <SAssetListItemDescription progressValue={progressValue} error={error}>{description}</SAssetListItemDescription>
        </AssetListItemTextWrapper>
      </SFlexListItem>
      <SAssetListItemIconWrapper error={error} ref={calculatedRef}>
        <IconCheckmarkOutlined size={20}></IconCheckmarkOutlined>
        <IconWarning size={20}></IconWarning>
        <IconCross variant={'close'} size={20}></IconCross>
      </SAssetListItemIconWrapper>
    </AssetListItem>
  </div>)
};

const Template = (args) => < AssetListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  recent: false,
  error: false,
  title: "Default",
  description: "Description",
  progressValue: undefined,
};

// With icon
export const WithIcon = ({ recent, error, title, icon, description, progressValue, iconWidth }) => (
  <div style={{ width: "320px" }}>
    <AssetListItem error={error} >
      <SFlexListItem recent={recent} error={error} iconWidth={iconWidth}>
        <SImagePlaceholder icon={icon} error={error}>
          <IconDocuments></IconDocuments>        </SImagePlaceholder>
        <AssetListItemTextWrapper progressValue={progressValue} >
          <SAssetListItemTitle error={error}>{title}</SAssetListItemTitle>
          <SAssetListItemDescription progressValue={progressValue} error={error}>{description}</SAssetListItemDescription>
        </AssetListItemTextWrapper>
      </SFlexListItem>
      <SAssetListItemIconWrapper recent={recent} error={error}>
        <IconCheckmarkOutlined size={16}></IconCheckmarkOutlined>
        <IconWarning size={16}></IconWarning>
        <IconCross variant={'close'} size={16}></IconCross>
      </SAssetListItemIconWrapper>
    </AssetListItem>
  </div>
);

WithIcon.args = {
  recent: false,
  error: false,
  title: "Default",
  description: "Description",
  progressValue: undefined,
};
