import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { ListItemLegacy, SelectableListItemLegacy } from "../list-item-legacy";
import { List } from "../list";
import { IconTrashDelete } from "../../icons";

const ListFooter = styled.div`
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--ui-01);
`;

const ListFooterSelectedCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(--primary-500-opacity-8);
  font-family: Inter;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.45;
  color: var(--interactional-primary-01);
`;

const ListFooterButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const initialDate = new Array(10).fill(true).map((__, idx) => ({
  avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  title: "List Item " + idx,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in venenatis orci condimentum amet.",
  id: idx,
}));
function ListDemo() {
  const header = "List Header";
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

  // Are there more items to load?
  // (This information comes from the most recent API request.)
  const [hasNextPage, setHasNextPage] = React.useState(true);

  // Are we currently loading a page of items?
  // (This may be an in-flight flag in your Redux store for example.)
  const [isNextPageLoading, setIsNextPageLoading] = React.useState(false);

  // Array of items loaded so far.
  const [data, setData] = React.useState(initialDate);

  const loadNextPage = (...args) => {
    console.log(args);
    setIsNextPageLoading(true);
    return new Promise((resolve) =>
      setTimeout(() => {
        setHasNextPage(data.length < 100);
        setIsNextPageLoading(false);
        setData(
          [...data].concat(
            new Array(10).fill(true).map((__, idx) => ({
              avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
              title: "List Item " + (data.length + idx),
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in venenatis orci condimentum amet.",
              id: data.length + idx,
            })),
          ),
        );
        resolve();
      }, 2500),
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ width: 374 }}>
        <List
          height={323}
          dataSource={data}
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          loadNextPage={loadNextPage}
          itemSize={66}
          renderItem={(item) => <ListItemLegacy key={item.id} title={item.title} description={item.description} />}
          header={header}
        />
      </div>
      <div style={{ width: 702 }}>
        <List
          height={389}
          dataSource={data}
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          loadNextPage={loadNextPage}
          itemSize={66}
          renderItem={(item) => (
            <SelectableListItemLegacy
              selected={selectedItems.some((itm) => itm === item.id)}
              onSelect={() => onSelect(item.id)}
              onUnselect={() => onUnselect(item.id)}
              key={item.id}
              avatar={item.avatar}
              title={item.title}
              description={item.description}
            />
          )}
          header={header}
        />
        <ListFooter>
          <ListFooterSelectedCounter>{selectedItems.length} items selected</ListFooterSelectedCounter>
          <ListFooterButtonsContainer>
            <Button size="small">
              <IconTrashDelete /> Share
            </Button>
            <Button size="small">
              <IconTrashDelete /> Delete
            </Button>
          </ListFooterButtonsContainer>
        </ListFooter>
      </div>
    </div>
  );
}

export default {
  title: "Components/Legacy/List",
  component: ListDemo,
};
const Template = (args) => <ListDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
