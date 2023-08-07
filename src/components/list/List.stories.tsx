import React, { useRef } from "react";
import { List } from ".";
import { ListItem } from "../list-item";
import { RadioButtonListItem } from "../radio-button-list-item";
import { ListItemContent } from "../list-item-content";
import { IconChevronRight, IconStarOutlined } from "../../icons";

const initialDate = new Array(1000).fill(true).map((__, idx) => ({
  avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  title: "List Item " + idx,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in venenatis orci condimentum amet.",
  id: idx,
}));

const Template = (args) => {
  // Are there more items to load?
  // (This information comes from the most recent API request.)
  const [hasNextPage, setHasNextPage] = React.useState(true);
  const [selectedItems, setSelectedItems] = React.useState([]);

  const onSelect = (id) => {
    if (!selectedItems.some((item) => item === id)) {
      const newSelectedItems = selectedItems.slice();
      newSelectedItems.push(id);
      setSelectedItems(newSelectedItems);
    }
  };

  const onUnselect = (id) => {
    const index = selectedItems.indexOf(id);
    if (index !== undefined) {
      const newSelectedItems = selectedItems.slice();
      newSelectedItems.splice(index, 1);
      setSelectedItems(newSelectedItems);
    }
  };
  // Are we currently loading a page of items?
  // (This may be an in-flight flag in your Redux store for example.)
  const [isNextPageLoading, setIsNextPageLoading] = React.useState(false);

  // Array of items loaded so far.
  const [data, setData] = React.useState(initialDate);

  const loadNextPage = (...args) => {
    console.log(args);
    setIsNextPageLoading(true);
    return new Promise<void>((resolve) =>
      setTimeout(() => {
        setHasNextPage(data.length < 10000);
        setIsNextPageLoading(false);
        setData(
          [...data].concat(
            new Array(100).fill(true).map((__, idx) => ({
              avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              title: "List Item " + (data.length + idx),
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in venenatis orci condimentum amet.",
              id: data.length + idx,
            })),
          ),
        );
        resolve();
      }, 500),
    );
  };

  const ref = useRef();

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ width: 374 }}>
        <List
          ref={ref}
          height={323}
          dataSource={data}
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          loadNextPage={loadNextPage}
          renderLoadingItem={() => <div>{"loading ..."}</div>}
          itemSize={45}
          renderItem={(item) => (
            <ListItem onClick={() => {}}>
              <IconStarOutlined size={16} />
              <ListItemContent>{item.title}</ListItemContent>
              <IconChevronRight size={16} />
            </ListItem>
          )}
        />
      </div>
      <div style={{ width: 702 }}>
        <List
          height={389}
          dataSource={data}
          hasNextPage={hasNextPage}
          renderLoadingItem={() => <div>{"loading ..."}</div>}
          isNextPageLoading={isNextPageLoading}
          loadNextPage={loadNextPage}
          itemSize={45}
          renderItem={(item) => (
            <RadioButtonListItem
              activated={selectedItems.includes(item.id)}
              onChange={() => {
                selectedItems.includes(item.id) ? onUnselect(item.id) : onSelect(item.id);
              }}
            >
              <ListItemContent>{item.title}</ListItemContent>
            </RadioButtonListItem>
          )}
        />
        <div style={{ padding: "24px 0px" }}>{`You got ${selectedItems.length} items selected`}</div>
      </div>
    </div>
  );
};

export default {
  title: "Components/List",
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
