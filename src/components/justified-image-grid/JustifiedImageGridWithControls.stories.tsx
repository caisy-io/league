import React, { useEffect,useState, useRef } from "react";
import { JustifiedImageGrid } from "./JustifiedImageGrid";
import { generateUuid, getImages } from "./testdata";
import { Slider } from "../slider/Slider";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { useDimensions } from "../../utils";
import { getDefaultConfig } from "./defaultConfig";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const JustifiedImageGridDemo: React.FC<{
  totalCount: number;
  pageSize: number;
  initalLoadingDelay: number;
  loadingMultiplier: number;
}> = ({ totalCount, pageSize, initalLoadingDelay, loadingMultiplier }) => {
  const images = getImages();
  const multiplier = useRef(loadingMultiplier || 1);
  const ref = useRef(null);
  const { width, height } = useDimensions(ref);

  const [indexValue, setIndexValue] = useState("");
  const [scrollToIndex, setScrollToIndex] = useState<number | undefined>(undefined);
  const [imagesToDisplay, setImagesToDisplay] = useState(images.slice(0, Math.min(pageSize, totalCount)));
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  useEffect(() => {
    setImagesToDisplay(images.slice(0, Math.min(pageSize, totalCount)));
  }, [totalCount, pageSize]);

  useEffect(() => {
    multiplier.current = loadingMultiplier;
    setImagesToDisplay(images.slice(0, Math.min(pageSize, totalCount)));
  }, [loadingMultiplier]);

  const loadNextPage = async () => {
    console.log(` loadNextPage`, );
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

  return (
    <>
      <div ref={ref} style={{ height: "calc(100vh - 64px)", display: "flex" }}>
        <div style={{ width: "140px", display: "flex", flexDirection: "column", gap: "1rem", padding: "12px" }}>
          <Button type="primary" onClick={() => addOneOnStart()}> UNSHIFT ONE </Button>
          <Button type="primary" onClick={() => shuffle()}> SHUFFLE ALL </Button>
          <Input value={indexValue} type="number" onChange={(e) => setIndexValue(e.target.value)}></Input>
          <Button type="primary" onClick={() => (indexValue != "") && setScrollToIndex(parseInt(indexValue))}> SCROLL TO </Button>
          <Slider initialValue={5} min={1} max={10} onValueChange={onSliderValueChange} />
        </div>
        <JustifiedImageGrid
          images={imagesToDisplay.map(i => selectedImages.includes(i.id) ? {...i, selected: true} : i) as any}
          config={getDefaultConfig({ groupSize: pageSize, scrollViewHeight: height, paddingAroundGrid: 16, totalWidthOfView: width - 32 - 140, resizeHeight: 300  })}
          totalCount={totalCount}
          scrollToRowIndex={scrollToIndex}
          loadNextPage={async() => console.log("a")}
          onImageClick={({id, rowIndex}) => console.log(`id=${id} rowIndex=${rowIndex} `, )}
          onImageSelection={({id, rowIndex}) => setSelectedImages(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])}
        />
      </div>
    </>
  );
};

export const Controls: any = JustifiedImageGridDemo.bind({});
Controls.args = {
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
