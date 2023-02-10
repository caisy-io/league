export interface IUsageChartCardI18n {
  used: React.ReactNode;
  totalAvailable: React.ReactNode;
}
export interface IUsageChartCardChartData {
  date: React.ReactNode;
  percentageUsed: number;
}

export interface IUsageChartCardChart {
  totalAvailable: number;
  data: IUsageChartCardChartData[];
}

export interface IUsageChartCard {
  used: number;
  max: number;
  title: React.ReactNode;
  usage: React.ReactNode;
  children?: React.ReactNode;
  i18n: IUsageChartCardI18n;
  identifier: string;
  chartData: IUsageChartCardChartData[];
  locale?: string;
}
