import React, { useEffect, useRef } from "react";
import { JustifiedImageGrid } from "./JustifiedImageGrid";
import { generateUuid, getImages } from "./testdata";
import { Slider } from "../slider/Slider";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const JustifiedImageGridDemo: React.FC<{
  totalCount: number;
  pageSize: number;
  initalLoadingDelay: number;
  loadingMultiplier: number;
}> = ({ totalCount, pageSize, initalLoadingDelay, loadingMultiplier }) => {
  const images = getImages();
  const multiplier = useRef(loadingMultiplier || 1);

  const [imagesToDisplay, setImagesToDisplay] = React.useState(images.slice(0, Math.min(pageSize, totalCount)));

  useEffect(() => {
    setImagesToDisplay(images.slice(0, Math.min(pageSize, totalCount)));
  }, [totalCount, pageSize]);

  useEffect(() => {
    multiplier.current = loadingMultiplier;
    setImagesToDisplay(images.slice(0, Math.min(pageSize, totalCount)));
  }, [loadingMultiplier]);

  const loadNextPage = async () => {
    await sleep(initalLoadingDelay * multiplier.current);
    // await sleep(2000)
    if (imagesToDisplay.length < totalCount) {
      return setImagesToDisplay((prev) => [
        ...prev,
        ...images
          .sort(() => 0.5 - Math.random())
          .slice(0, Math.min(pageSize, totalCount - prev.length))
          .map((i) => ({ ...i, id: generateUuid() })),
      ]);
    }
  };

  const shuffle = async () => {
    // await sleep(2000)
    return setImagesToDisplay((prev) => [
      ...images
        .sort(() => 0.5 - Math.random())
        .slice(0, prev.length)
        .map((i) => ({ ...i, id: generateUuid() })),
    ]);
  };
  const addOneOnStart = async () => {
    // await sleep(2000)
    return setImagesToDisplay((prev) => [
      ...images
        .sort(() => 0.5 - Math.random())
        .slice(0, 1)
        .map((i) => ({ ...i, id: generateUuid() })),
      ...prev,
    ]);
  };
  // console.log(` images`, JSON.stringify(images, ));
  const onSliderValueChange = (value: number) => {
    console.log(` value`, value);
  };
  console.log(` imagesToDisplay`, imagesToDisplay);
  return (
    <>
      <div>
        <button onClick={() => addOneOnStart()}> addOneOnStart </button>
        <button onClick={() => shuffle()}> shuffle </button>
        <button onClick={() => loadNextPage()}> INC </button>
        <Slider initialValue={5} min={1} max={10} onValueChange={onSliderValueChange} />
      </div>
      <div style={{ border: "1px black solid", margin: "32px" }}>
        <JustifiedImageGrid
          images={imagesToDisplay as any}
          config={{ groupSize: pageSize }}
          totalCount={totalCount}
          scrollToIndex={undefined}
          loadNextPage={loadNextPage}
        />
      </div>
    </>
  );
};

export const Default: any = JustifiedImageGridDemo.bind({});
Default.args = {
  totalCount: 67,
  pageSize: 20,
  initalLoadingDelay: 2000,
  loadingMultiplier: 1,
};

export default {
  title: `Components/JustifiedImageGrid/Controls`,
  component: JustifiedImageGridDemo,
  argTypes: {
    totalCount: {
      description: "totalCount of images",
    },
    pageSize: {
      description: "pageSize defines how may load at a time",
    },
    initalLoadingDelay: {
      description: "how load to wait for the page load (fake request)",
    },
    loadingMultiplier: {
      description: "multiplier for the loading delay to debug loading",
    },
  },
};
