import React, { useEffect, useState, useRef, useMemo } from "react";
import { JustifiedImageGrid } from "./JustifiedImageGrid";
import { generateUuid, getImages } from "./testdata";
import { Slider } from "../slider/Slider";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { useDimensions } from "../../utils";
import { dynamicConfig } from "./dynamicConfig";
import debounce from "lodash/debounce";

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
  const [windowWidth, setWindowWidth] = useState(width);
  const debouncedWindowWith = useMemo(() => debounce(setWindowWidth, 300), [width]);


  const [sliderValue, setSliderValue] = useState(5);
  const [indexValue, setIndexValue] = useState("");
  const [scrollToIndex, setScrollToIndex] = useState<number | undefined>(undefined);
  const [imagesToDisplay, setImagesToDisplay] = useState(images.slice(0, Math.min(pageSize, totalCount)));
  const [selectedImages, setSelectedImages] = useState<string[]>([]);


  useEffect(() => {
    debouncedWindowWith(width)
  }, [windowWidth]);

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

  const onSliderValueChange = (value: number) => {
    setSliderValue(value);
  };

  const appliedConfig = dynamicConfig({
    overwriteConfig: {
      groupSize: pageSize,
      scrollViewHeight: height,
      paddingAroundGrid: 16,
    },
    skaling: sliderValue / 10,
    totalWidthOfView: width - 32 - 140,
  });

  return (
    <>
      <div ref={ref} style={{ height: "calc(100vh - 64px)", display: "flex" }}>
        <div style={{ width: "140px", display: "flex", flexDirection: "column", gap: "1rem", padding: "12px" }}>
          <Button type="primary" onClick={() => addOneOnStart()}>
            UNSHIFT ONE
          </Button>
          <Button type="primary" onClick={() => shuffle()}>
            SHUFFLE ALL
          </Button>
          <Input value={indexValue} type="number" onChange={(e) => setIndexValue(e.target.value)}></Input>
          <Button type="primary" onClick={() => indexValue != "" && setScrollToIndex(parseInt(indexValue))}>
            SCROLL TO
          </Button>
          <Slider initialValue={sliderValue} min={0} max={10} onValueChange={onSliderValueChange} />
          <div> Skaling: {(sliderValue / 10).toFixed(2)} </div>
          <div> Width: {width - 32 - 140}px </div>
          <div style={{ width: "116px", overflow: "hidden" }}>
            {JSON.stringify(
              {
                minWidthOfImage: appliedConfig.minWidthOfImage,
                maxWidthOfImage: appliedConfig.maxWidthOfImage,
                maxImagesPerRow: appliedConfig.maxImagesPerRow,
                minImagesPerRow: appliedConfig.minImagesPerRow,
                avgRowHeight: appliedConfig.avgRowHeight,
              },
              null,
              2,
            )}
          </div>
        </div>
        <JustifiedImageGrid
          images={imagesToDisplay.map((i) => (selectedImages.includes(i.id) ? { ...i, selected: true } : i)) as any}
          config={appliedConfig}
          totalCount={totalCount}
          scrollToRowIndex={scrollToIndex}
          loadNextPage={loadNextPage}
          onImageClick={({ id, rowIndex }) => console.log(`id=${id} rowIndex=${rowIndex} `)}
          onImageSelection={({ id }) =>
            setSelectedImages((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
          }
        />
      </div>
    </>
  );
};

export const Controls: any = JustifiedImageGridDemo.bind({});
Controls.args = {
  totalCount: 197,
  pageSize: 30,
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
