import * as React from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextFieldComponent from '../TextField/index';
import BoxComponent from '../Box/index';
import TypographyComponent from '../Typography/index';
import CheckboxComponent from '../Checkbox/index';
import AvatarComponent from '../Avatar/index';
import { Close } from '@mui/icons-material';
import { Chip } from '@mui/material';

export interface OptionType {
  inputValue: string;
  name: string;
  email: string;
  id?: string;
}
type AutoCompleProps = {
  options: OptionType[];
  value: OptionType[];
  setValue: (val: OptionType[]) => void; 
  textVal: string;
  setTextValue: (val: string) => void;
};

export default function AutoCompleteComponent({
  options,
  value,
  setValue,
  textVal,
  setTextValue,
}: AutoCompleProps) {
  const filter = createFilterOptions<OptionType>();

  const [message, setMessage] = React.useState<boolean>(false);

  function isValidEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
  }

  const onClickOption = (option: OptionType) => {
    setMessage(false);
    let copy = [...value];

    let isExist = copy.findIndex(val => val.name === option.name);
    if (isExist === -1) {
      const isValid = isValidEmail(option.email);
      if (isValid) {
        copy.push(option);
      } else {
        setMessage(true);
      }
    } else {
      copy = copy.filter(val => val.name !== option.name);
    }

    setValue(copy);
  };

  const getCheckedValue = (option: OptionType) => {
    let isExist = value.findIndex(val => val.name === option.name);
    if (isExist === -1) return false;
    else return true;
  };

  const close = document.getElementsByClassName(
    'MuiAutocomplete-clearIndicator'
  )[0];

  close?.addEventListener('click', () => {
    setValue([]);
  });
  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={options}
      value={value}
      getOptionLabel={option => option?.name}
      limitTags={3}
      renderOption={(props, option) => {
        return (
          <BoxComponent
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px',
            }}
            onClick={() => onClickOption(option)}
          >
            <BoxComponent
              sx={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <CheckboxComponent
                checked={getCheckedValue(option)}
                onChange={() => onClickOption(option)}
                formControlLabelStyle={{ margin: '0px' }}
              />
              <AvatarComponent
                sx={{ height: '32px', width: '32px', fontSize: '14px' }}
              >
                {option?.name
                  ? option.name
                      .split(' ')
                      .map(part => part.charAt(0))
                      .join('')
                      .toUpperCase()
                      .slice(0, 2) 
                  : ''}
              </AvatarComponent>
              <TypographyComponent
                variant="Body_Content_M"
                component="span"
                sx={{ color: '#121C2B' }}
              >
                {option?.name}
              </TypographyComponent>
            </BoxComponent>
            <TypographyComponent
              variant="LabelOSI"
              component="span"
              sx={{ color: '#7A7E8B' }}
            >
              {option.email}
            </TypographyComponent>
          </BoxComponent>
        );
      }}
      renderTags={tags =>
        tags.map((item, index) => {
          return (
            <Chip
              key={index}
              sx={{
                height: '22px',
                '& .MuiChip-deleteIcon': {
                  height: '12px',
                  width: '12px',
                },
                backgroundColor: '#ECEEF0',
                color: '#323E4D',
              }}
              variant="filled"
              onDelete={() => onClickOption(item)}
              deleteIcon={<Close />}
              label={item.name}
            />
          );
        })
      }
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const { inputValue } = params;
        const isExisting = options.some(option => inputValue === option.name);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            name: inputValue,
            email: inputValue,
          });
        }

        return filtered;
      }}
      renderInput={params => (
        <TextFieldComponent
          {...params}
          label="Email"
          placeholder="Enter Email"
          helperText={message ? 'Please Enter Valid Email' : ''}
          value={textVal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTextValue(e.target.value)
          }
          height="100%"
        />
      )}
    />
  );
}
