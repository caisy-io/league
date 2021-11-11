import React from "react";
import { Button, IconEdit, IconTrashDelete, Input, Table } from "../..";

function TableDemo() {
  const [dataSource, setDataSource] = React.useState([
    {
      name: "testName",
      lastName: "testLastNameas,mdnasmdnas,mdnas,mdn,masdn,masdajhsdasdgasd",
      id: 0,
      actions: { id: 0 },
    },
    {
      name: "testName 1",
      lastName: "testLastName 1",
      id: 1,
      actions: { id: 1 },
    },
    {
      name: "testName 2",
      lastName: "testLastName 2",
      id: 2,
      actions: { id: 2 },
    },
    {
      name: "testName 3",
      lastName: "testLastName 3",
      id: 3,
      actions: { id: 3 },
    },
    {
      name: "testName 4",
      lastName: "testLastName 4",
      id: 4,
      actions: { id: 4 },
    },
    {
      name: "testName 5",
      lastName: "testLastName 5",
      id: 5,
      actions: { id: 5 },
    },
    {
      name: "testName 6",
      lastName: "testLastName 6",
      id: 6,
      actions: { id: 6 },
    },
    {
      name: "testName 7",
      lastName: "testLastName 7",
      id: 7,
      actions: { id: 7 },
    },
    {
      name: "testName 8",
      lastName: "testLastName 8",
      id: 8,
      actions: { id: 8 },
    },
    {
      name: "testName 9",
      lastName: "testLastName 9",
      id: 9,
      actions: { id: 9 },
    },
  ]);
  const columns = [
    {
      header: "Name",
      key: "name", // key is the "key" in the data
    },
    {
      header: "Last Name",
      key: "lastName",
    },
    {
      header: "ID",
      key: "id",
    },
    {
      header: "Actions",
      key: "actions",
      renderItem: (data) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Button onClick={() => alert(`Deleted item with ID: ${data.id}`)}>
            <IconTrashDelete />
          </Button>
          <Button onClick={() => alert(`Editing item with ID: ${data.id}`)}>
            <IconEdit />
          </Button>
        </div>
      ),
    },
  ];

  const [globalFilter, setGlobalFilter] = React.useState("");
  const [isNextPageLoading, setIsNextPageLoading] = React.useState(false);
  const [hasNextPage, setHasNextPage] = React.useState(true);

  const PAGE_SIZE = 10;

  const loadNextPage = () => {
    setIsNextPageLoading(true);
    console.log("loading");
    return new Promise((resolve) =>
      setTimeout(() => {
        // setHasNextPage(dataSource.length < 100);
        setIsNextPageLoading(false);
        setDataSource((prev) => [
          ...prev,
          ...new Array(PAGE_SIZE).fill(true).map((__, idx) => ({
            name: `testName ${dataSource.length + idx}`,
            lastName: `testLastName ${dataSource.length + idx}`,
            actions: { id: dataSource.length + idx },
            id: dataSource.length + idx,
          })),
        ]);
        console.log(`hasNextPage: ${hasNextPage}`, `isNextPageLoading: ${isNextPageLoading}`);
        resolve();
      }, 1500),
    );
  };

  console.log(` dataSource.length`, dataSource.length);
  console.log(` hasNextPage `, hasNextPage);
  return (
    <div style={{ height: "300px", position: "relative" }}>
      <Input
        placeholder="Filter globally"
        wrapperStyle={{ border: "1px solid #f0f0f0", marginTop: 8, marginBottom: 16 }}
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <Table
        loadNextPage={loadNextPage}
        isNextPageLoading={isNextPageLoading}
        hasNextPage={hasNextPage}
        itemSize={57}
        globalFilter={globalFilter}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
}

export default {
  title: "Components/Table",
  component: TableDemo,
};
const Template = (args) => <TableDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
