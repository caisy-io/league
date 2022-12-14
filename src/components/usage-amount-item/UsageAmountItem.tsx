import { FC, useMemo } from "react";
import { RichTextRenderer } from "../../base-components";
import { SUsageAmountItem } from "./styles/SUsageAmountItem";
import { SUsageAmountItemDescription } from "./styles/SUsageAmountItemDescription";
import { SUsageAmountItemTitle } from "./styles/SUsageAmountItemTitle";
import { SUsageAmountItemUsage } from "./styles/SUsageAmountItemUsage";
import { SUsageAmountItemUsageBody } from "./styles/SUsageAmountItemUsageBody";
import { SUsageAmountItemUsageGraphContainer } from "./styles/SUsageAmountItemUsageGraphContainer";
import UsageAmountItemUsageGraph from "./UsageAmountItemUsageGraph";

interface IUsageAmountItem {
  used: number;
  max: number;
  title: React.ReactNode;
  usage: React.ReactNode;
  description: React.ReactNode;
}

const UsageAmountItem: FC<IUsageAmountItem> = ({ title, usage, description, used, max }) => {
  const usagePercentage = useMemo(() => {
    return (used * 100) / max;
  }, [used, max]);

  return (
    <SUsageAmountItem>
      <SUsageAmountItemTitle>{title}</SUsageAmountItemTitle>
      <SUsageAmountItemUsage>
        <SUsageAmountItemUsageGraphContainer>
          <UsageAmountItemUsageGraph percentage={usagePercentage} />
          {used}
        </SUsageAmountItemUsageGraphContainer>
        <SUsageAmountItemUsageBody>{usage}</SUsageAmountItemUsageBody>
      </SUsageAmountItemUsage>
      <SUsageAmountItemDescription>
        <RichTextRenderer node={description} />
      </SUsageAmountItemDescription>
    </SUsageAmountItem>
  );
};

export default UsageAmountItem;
