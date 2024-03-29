import React, { useRef } from "react";
import { Table } from "../table";
import { Input } from "../input";
import { IconEdit, IconTrashDelete } from "../../icons";
import { Button } from "../button";
const PAGE_SIZE = 30;

function TableDemo() {
  const [dataSource, setDataSource] = React.useState([
    {
      name: "testName",
      lastName: "testLastNameas,mdnasmdnas,mdnas,mdn,masdn,masdajhsdasdgasd",
      id: 0,
      test: { test: 1 },
      actions: {
        id: 0,
      },
    },
    ...new Array(PAGE_SIZE).fill(true).map((__, idx) => ({
      name: `testName ${1 + idx}`,
      lastName: `testLastName ${1 + idx}`,
      id: 1 + idx,
      actions: { id: 1 + idx },
    })),
  ]);
  const columns = [
    {
      header: <div>Name</div>,
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
      header: <div>Actions</div>,
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

  const loadNextPage = () => {
    console.log("loadNextPage");
    setIsNextPageLoading(true);
    return new Promise((resolve) =>
      setTimeout(() => {
        setHasNextPage(dataSource.length < 100);
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
      }, 800),
    );
  };

  console.log(` dataSource.length`, dataSource.length);
  console.log(` hasNextPage `, hasNextPage);
  const ref = useRef();
  return (
    <div style={{ height: "calc(100vh - 42px - 24px)", position: "relative" }}>
      <Input
        placeholder="Filter globally"
        wrapperStyle={{ border: "1px solid #f0f0f0", marginTop: 8, marginBottom: 16 }}
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <Table
        // containerWidth={1200}
        // tableWidth={1400}
        useConditionalItemSize
        renderAsFirstRow={
          <div
            style={{
              height: 40,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              background: "darkgray",
            }}
          >
            Use this to render a custom component on the first row
          </div>
        }
        ref={ref}
        loadNextPage={loadNextPage}
        isNextPageLoading={isNextPageLoading}
        hasNextPage={hasNextPage}
        itemSize={(item) => {
          return 57;
        }}
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
