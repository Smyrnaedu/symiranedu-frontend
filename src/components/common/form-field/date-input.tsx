"use client";
import { Calendar } from "primereact/calendar";
import React, { useEffect, useState } from "react";
import { FormGroup, FormLabel } from "react-bootstrap";

type DateInputProps = {
  label: string;
  error?: string;
  defaultValue?: string | Date;
  className?: string;
  name: string;
  dateFormat?: string;
  required?: boolean;
};

export const DateInput: React.FC<DateInputProps> = (props) => {
  const {
    label,
    error,
    defaultValue,
    className = "mb-3",
    name,
    dateFormat = "yy-mm-dd",
    required = false,
    ...rest
  } = props;

  const [val, setVal] = useState<Date | null>(null);

  useEffect(() => {
    if (defaultValue) {
      const parsedDate = new Date(defaultValue);
      if (!isNaN(parsedDate.getTime())) {
        setVal(parsedDate);
      }
    }
  }, [defaultValue]);

  return (
    <FormGroup className={className} controlId={name}>
      <FormLabel>{label}</FormLabel>
      <Calendar
        id={name}
        name={name}
        value={val}
        onChange={(e) => setVal(e.value as Date)}
        dateFormat={dateFormat}
        showIcon
        className={`w-100 p-inputtext-lg ${error ? "p-invalid" : ""}`}
        required={required}
        {...rest}
      />
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </FormGroup>
  );
};
