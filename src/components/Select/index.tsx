import React from 'react';
import { withTheme } from 'styled-components';
import Select, {
  components,
  IndicatorProps,
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import Cross from 'assets/images/cross.png';
import Icon from 'components/Icon';

interface Props extends SelectProps<OptionTypeBase> {
  error?: string;
  hideSelectedOptions?: boolean;
  theme: any;
}

const SelectBox = React.forwardRef<any, Props>((props: Props, ref) => {
  const {
    options,
    placeholder = 'Select...',
    isSearchable = false,
    error,
    defaultValue,
    hideSelectedOptions,
    theme: {
      colors: { gray1, gray4, gray5, white, gray6, pinkDark },
    },
    ...rest
  } = props;
  const [value, setValue] = React.useState(defaultValue);

  const selectOption = (
    selectedOption: React.SetStateAction<OptionTypeBase | null | undefined>
  ) => {
    setValue(selectedOption);
  };

  const ClearIndicator = (props: IndicatorProps<any, any>) => {
    return (
      <components.ClearIndicator {...props}>
        <Icon width={10} height={10} source={Cross} alt="cross" />
      </components.ClearIndicator>
    );
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderColor: error ? pinkDark : gray1,
      ':before': {
        content: `"${error || ''}"`,
        fontSize: 8,
        position: 'absolute',
        top: 0,
        left: 5,
        color: error ? pinkDark : '',
      },
    }),
    option: (provided: any, state: any) => {
      return {
        ...provided,
        color: state.isDisabled ? gray6 : state.isSelected ? white : gray4,
        display: 'flex',
        height: 33,
        fontSize: 14,
        ...(state.isDisabled && {
          '&:hover': {
            color: gray6,
            cursor: state.isDisabled ? 'not-allowed' : 'pointer',
          },
        }),
      };
    },
    menu: (provided: any) => ({
      ...provided,
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
      border: '1px solid #CCCCCC',
      padding: '4px 0 10px 0',
      borderRadius: 5,
    }),
    menuList: (provided: any) => ({
      ...provided,
      maxHeight: 150,
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: gray5,
      fontSize: 14,
      padding: 0,
    }),
    multiValue: (provided: any) => ({
      ...provided,
      borderRadius: 5,
      height: 25,
      padding: '4px 8px',
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: 4,
    }),
    dropdownIndicator: (styles: any) => ({
      ...styles,
      paddingLeft: 12,
      paddingRight: 12,
      '&:hover': {
        '& path, & use': {
          color: gray5,
          fill: gray5,
        },
      },
    }),
  };

  return (
    <Select
      styles={customStyles}
      ref={ref}
      value={value}
      onChange={selectOption}
      options={options}
      placeholder={placeholder}
      isSearchable={isSearchable}
      hideSelectedOptions={hideSelectedOptions}
      data-testid="select"
      components={{
        ClearIndicator,
      }}
      {...rest}
    />
  );
});

SelectBox.defaultProps = {
  error: '',
  hideSelectedOptions: false,
};

//@ts-ignore
export default withTheme(SelectBox);
