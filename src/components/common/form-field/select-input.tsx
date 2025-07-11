"use client";
import React, { SelectHTMLAttributes } from "react";
import {
  FormControl,
  FormFloating,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";

type SelectOption = {
  [key: string]: string | number | boolean | undefined;
};
type SelectInputProps = {
  label: string;
  name: string;
  error?: string;
  options: SelectOption[];
  optionValue: string;
  optionLabel: string;
  className?: string;
  size?: "sm" | "lg"; // ✅ sadece kabul edilen değerler
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "name" | "size">;

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  error,
  options,
  optionValue,
  optionLabel,
  className = "mb-3",
  size = "lg",
  ...rest
}) => {
  return (
    <FormGroup className={className} controlId={name}>
      <FormFloating>
        <FormSelect
          isInvalid={!!error}
          name={name}
          size={size} // ✅ tip güvenli şekilde
          {...rest}
        >
          {options.map((option) => (
            <option
              key={String(option[optionValue])}
              value={String(option[optionValue] ?? "")}
            >
              {option[optionLabel]}
            </option>
          ))}
        </FormSelect>
        <FormLabel>{label}</FormLabel>
        <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
      </FormFloating>
    </FormGroup>
  );
};
