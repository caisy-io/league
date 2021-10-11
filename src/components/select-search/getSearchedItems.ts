import fuzzysearch from "fuzzysearch";

export const getSearchedItems = (e, dataSource) => {
  const newItems = dataSource.map((i) => {
    let visibleCategory = false;
    const items = i.items.map((j) => {
      const visible = fuzzysearch(e.target.value.toLowerCase(), j.label.toLowerCase());
      if (visible) {
        visibleCategory = true;
      }

      return {
        ...j,
        visible,
      };
    });

    return {
      ...i,
      items,
      visible: visibleCategory,
    };
  });

  return newItems;
};
