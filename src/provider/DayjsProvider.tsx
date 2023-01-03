import React, { useContext } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import isToday from "dayjs/plugin/isToday";

import "dayjs/locale/es";
import "dayjs/locale/de";

dayjs.extend(relativeTime);
dayjs.extend(isToday);

const DayjsProviderContext = React.createContext<IDayjsProviderValue>({ localeString: "en" });

interface IDayjsProviderValue {
  localeString: string;
}

interface IDayjsProvider {
  localeString?: string;
  children?: React.ReactNode;
}

export const useDayjs = () => {
  const c = useContext(DayjsProviderContext);
  dayjs.locale(c.localeString);
  return dayjs;
};

export const setDateTo = (date: string) => dayjs().to(dayjs(date));

export const isTodayDate = (date?: string) => dayjs(date).isToday();

export const dateFormat = (date?: string, formatDate?: string) => dayjs(date).format(formatDate);

export const DayjsProvider: React.FC<IDayjsProvider> = ({ localeString = "en", children }) => {
  dayjs.locale(localeString);
  const value = { localeString };
  return <DayjsProviderContext.Provider value={value}>{children}</DayjsProviderContext.Provider>;
};
