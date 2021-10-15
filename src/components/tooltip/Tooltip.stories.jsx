import React from "react";
import { Tooltip, Button } from "../..";

function TooltipDemo() {
    const buttonContainerStyle = {
        gap: 32,
        display: "flex",
      };
    
      const tooltipContent = (
        <span
          style={{
            padding: 16,
            width: 386,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: 21, fontWeight: "bold", textAlign: "left" }}>Tooltip Title</h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: "24px",
              textAlign: "left",
              fontWeight: "lighter",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ligula vivamus mi, at.
          </p>
        </span>
      );
    
      const linkContent = (
        <a
          href="https://google.com"
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "none", color: "white", margin: "0 8px" }}
        >
          https://google.com
        </a>
      );
    
      const buttonContent = <Button onClick={(e) => console.log(e)}>You can interact with me!</Button>;
    
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: 32,
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 32,
                textAlign: "center",
              }}
            >
              Tooltips
            </h1>
            <div
              style={{
                border: "1px solid grey",
                padding: "1rem",
                display: "flex",
                gap: 32,
                justifyContent: "space-between",
                margin: 32,
              }}
            >
              <Tooltip content={linkContent} supressArrow>
                Hover me to show a link
              </Tooltip>
              <Tooltip content={buttonContent} supressArrow>
                Hover me to show a button
              </Tooltip>
            </div>
          </div>
    
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 32,
              height: 300,
              width: 450,
              border: "1px solid grey",
              padding: "1rem",
            }}
          >
            <div
              style={{
                bottom: "1rem",
                position: "absolute",
                ...buttonContainerStyle,
              }}
            >
              <Tooltip placement="top" content={tooltipContent}>
                Top
              </Tooltip>
            </div>
            <div
              style={{
                right: "1rem",
                flexDirection: "column",
                textAlign: "right",
                position: "absolute",
                ...buttonContainerStyle,
              }}
            >
              <Tooltip placement="left" content={tooltipContent}>
                Left
              </Tooltip>
            </div>
            <div
              style={{
                left: "1rem",
                flexDirection: "column",
                position: "absolute",
                ...buttonContainerStyle,
              }}
            >
              <Tooltip placement="right" content={tooltipContent}>
                Right
              </Tooltip>
            </div>
            <div
              style={{
                top: "1rem",
                position: "absolute",
                ...buttonContainerStyle,
              }}
            >
              <Tooltip placement="bottom" content={tooltipContent}>
                Bottom
              </Tooltip>
            </div>
          </div>
        </div>
      );
}

export default {
  title: 'Components/Tooltip',
  component: TooltipDemo,
};
const Template = (args) => <TooltipDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
