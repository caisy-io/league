import React, { FC } from "react";
import { ErrorScreen, IErrorScreen } from "./SuspendedOrg";
import { Button } from "../button/Button";
import { Img } from "../../base-components/img/Img";

export default {
  title: `Components/ErrorScreen`,
  component: ErrorScreen,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/XrUkpZwlWi2swxzvpte03J/Screens-%26-Flows?type=design&node-id=18052-520438&t=DdAmlHzcHtAgLy08-4",
    },
  },
};

const ErrorScreenDemo: FC<IErrorScreen> = ({ ...props }) => (
  <div style={{ padding: "10px" }}>
    <ErrorScreen {...props} />
  </div>
);

export const Suspended = ErrorScreenDemo.bind({});
Suspended.args = {
  headline: "Your access to the Metacarbon organisation has been suspended",
  callToAction: (
    <>
      <Button type="primary">Go back to dashboard</Button>
      <Button type="secondary">Contact support</Button>
    </>
  ),
  preview: <Img resolution={72} src="https://i.ibb.co/c1FVYjg/user.png" alt="metacarbon" />,
  description: <p>Go back to your dashboard or contact support</p>,
};

export const NotFound = ErrorScreenDemo.bind({});
NotFound.args = {
  headline: "Page not found",
  callToAction: <Button type="primary">Back to home</Button>,
  preview: <h1>404</h1>,
  description: (
    <p>
      The page you’re looking for is not found or never existed. If you think it should be there contact us by
      email:&nbsp;
      <span>
        <a href="mailto:help@caisy.io">help@caisy.io</a>
      </span>
    </p>
  ),
};

export const InternalServerError = ErrorScreenDemo.bind({});
InternalServerError.args = {
  headline: "Internal server error",
  callToAction: <Button type="primary">Back to home</Button>,
  preview: <h1>500</h1>,
  description: (
    <p>
      Something went wrong. Please, try again later or contact us if the problem persists:&nbsp;
      <span>
        <a href="mailto:help@caisy.io">help@caisy.io</a>
      </span>
    </p>
  ),
};
