import React, { useEffect, useRef } from "react";
import { JustifiedImageGrid } from "./JustifiedImageGrid";
import { generateUuid, getImages } from "./testdata";
import { getDefaultConfig } from "./defaultConfig";
import { useDimensions } from "../../utils";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const JustifiedImageGridDemo: React.FC<{
  totalCount: number;
  pageSize: number;
  initalLoadingDelay: number;
  loadingMultiplier: number;
}> = ({ totalCount, pageSize, initalLoadingDelay, loadingMultiplier }) => {

  const ref = useRef(null);
  const { width, height } = useDimensions(ref);

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

  
  return (
    <div ref={ref} style={{height: "calc(100vh - 64px)"}}>
      <JustifiedImageGrid
        images={imagesToDisplay as any}
        config={getDefaultConfig({groupSize: pageSize, scrollViewHeight: height, paddingAroundGrid: 16, totalWidthOfView: width - 32 })}
        totalCount={totalCount}
        loadNextPage={loadNextPage}
      />
    </div>
  );
};

export const Default: any = JustifiedImageGridDemo.bind({});
Default.args = {
  totalCount: 187,
  pageSize: 30,
  initalLoadingDelay: 2000,
  loadingMultiplier: 1,
};

export default {
  title: `Components/JustifiedImageGrid/Default`,
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
