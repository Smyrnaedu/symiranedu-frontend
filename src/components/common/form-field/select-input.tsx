import React from "react";
import { FormControl, FormFloating, FormGroup, FormLabel, FormSelect } from "react-bootstrap";

type SelectInputProps = {
  label: string;
  error?: string;
  options: any[];
  optionValue: string;
  optionLabel: string;
  className?: string;
  [key: string]: any;
}
export const SelectInput: React.FC<SelectInputProps> = (props) => {
  const {
    label,
    error,
    options,
    optionValue,
    optionLabel,
    className = "mb-3",
    ...rest
  } = props;

  return (
    <FormGroup className={className} controlId={rest.name}>
    
      <FormFloating>
        <FormSelect isInvalid={!!error} size="lg" {...rest}>
          {options.map((option) => (
            <option key={option[optionValue]} value={option[optionValue]}>
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

