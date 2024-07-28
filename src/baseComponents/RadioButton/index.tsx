import PropTypes, { InferProps } from 'prop-types';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface Option {
  value: string;
  label: string;
}

interface RadioGroupComponentProps {
  IconComponent?: React.ReactNode;
  direction?: string;
  groupLabel?: React.ReactNode;
  label?: string;
  options?: Option[];
  setValue: (value: string) => void;
  value: string;
  gap?: string;
  formStyle?: object;
  labelStyle?: object;
  FormLabelStyle?: object;
  isOrange?: boolean;
}

export default function RadioGroupComponent({
  options = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
  ],
  IconComponent = <Radio />,
  direction = 'column',
  groupLabel,
  value,
  setValue,
  gap,
  formStyle,
  labelStyle,
  FormLabelStyle,
  isOrange,
  ...otherProps
}: InferProps<RadioGroupComponentProps>) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event);
  };

  return (
    <FormControl {...otherProps} sx={{ ...formStyle }}>
      {groupLabel ? (
        <FormLabel
          id="demo-controlled-radio-buttons-group"
          sx={{ ...FormLabelStyle }}
        >
          {groupLabel}
        </FormLabel>
      ) : null}
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{ flexDirection: direction }}
      >
        {options.map((option: Option, index: number) => (
          <FormControlLabel
            key={index}
            value={option.value}
            control={IconComponent}
            label={option.label}
            sx={{
              gap: gap ? gap : '0px',
              ...labelStyle,
              backgroundColor:
                option.value == value && isOrange
                  ? '#FFF2CC'
                  : option.value == value
                  ? '#F2F6F9'
                  : '#FFFFFF',
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

//backgroundColor: '#FFF2CC',

RadioGroupComponent.propTypes = {
  IconComponent: PropTypes.node,
  direction: PropTypes.string,
  groupLabel: PropTypes.node,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
