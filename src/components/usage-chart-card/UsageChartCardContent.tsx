import { FC } from "react";
import { SUsageAmountItemDescription } from "../usage-amount-item/styles/SUsageAmountItemDescription";
import { SUsageAmountItemTitle } from "../usage-amount-item/styles/SUsageAmountItemTitle";
import { SUsageAmountItemUsage } from "../usage-amount-item/styles/SUsageAmountItemUsage";
import { SUsageAmountItemUsageBody } from "../usage-amount-item/styles/SUsageAmountItemUsageBody";
import { SUsageAmountItemUsageGraphContainer } from "../usage-amount-item/styles/SUsageAmountItemUsageGraphContainer";
import UsageAmountItemUsageGraph from "../usage-amount-item/UsageAmountItemUsageGraph";
import { averageNumber } from "./helper";
import { SUsageChartCardContent } from "./styles/SUsageChartCardContent";

interface IUsageChartCardContent {
  used: number;
  max: number;
  title: React.ReactNode;
  usage: React.ReactNode;
  children?: React.ReactNode;
  usagePercentage: number;
}

export const UsageChartCardContent: FC<IUsageChartCardContent> = ({
  title,
  usagePercentage,
  used,
  usage,
  children,
}) => {
  return (
    <SUsageChartCardContent>
      <SUsageAmountItemTitle>{title}</SUsageAmountItemTitle>
      <SUsageAmountItemUsage>
        <SUsageAmountItemUsageGraphContainer>
          <UsageAmountItemUsageGraph percentage={usagePercentage} />
          {averageNumber(used)}
        </SUsageAmountItemUsageGraphContainer>
        <SUsageAmountItemUsageBody>{usage}</SUsageAmountItemUsageBody>
      </SUsageAmountItemUsage>
      <SUsageAmountItemDescription>{children}</SUsageAmountItemDescription>
    </SUsageChartCardContent>
  );
};
