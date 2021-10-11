import React, { useState } from "react";
import { STextArea } from "./styles/STextArea";
interface ITextArea {
  onChange: (event: React.ChangeEvent<EventTarget>) => void;
  value: string;
  placeholder?: string;
  minRows?: number;
  maxRows?: number;
}

export const TextArea: React.FC<ITextArea> = ({ value, onChange, placeholder, maxRows, minRows }) => {
  const [rows, setRows] = useState(minRows || 3);

  const handleChange = (event) => {
    const textareaLineHeight = 24;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    onChange(event);

    if (maxRows) {
      if (currentRows >= maxRows) {
        event.target.rows = maxRows;
        event.target.scrollTop = event.target.scrollHeight;
      }
      setRows(currentRows < maxRows ? currentRows : maxRows);
    } else {
      setRows(currentRows);
    }
  };

  return (
    <STextArea>
      <textarea rows={rows} value={value} placeholder={placeholder} onChange={handleChange} />
    </STextArea>
  );
};
