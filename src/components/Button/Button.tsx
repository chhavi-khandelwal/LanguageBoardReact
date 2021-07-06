import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: string;
  disabled?: boolean;
  testId?: string;
  variant?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = (props: Props) => {
  const {
    children,
    onClick = () => {},
    disabled,
    type = 'button',
    ...rest
  } = props;

  return (
    <ButtonTag type={type} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </ButtonTag>
  );
};

Button.defaultProps = {
  variant: 'primary',
};

const ButtonTag = styled.button<Props>`
  height: 43px;
  padding: ${(props) => `${props.theme.spacings.m} ${props.theme.spacings.l}`};
  border-radius: 5px;
  font-size: 13px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.theme.buttonTheme[`${props.variant}`].border};
  background: ${(props) =>
    props.theme.buttonTheme[`${props.variant}`].background};
  color: ${(props) => props.theme.buttonTheme[`${props.variant}`].color};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s;

  &:hover,
  &:active {
    border-color: ${(props) =>
      props.theme.buttonTheme[`${props.variant}`].hover.border};
    background: ${(props) =>
      props.theme.buttonTheme[`${props.variant}`].hover.background};
    color: ${(props) =>
      props.theme.buttonTheme[`${props.variant}`].hover.color};
  }

  &:disabled {
    border-color: ${(props) =>
      props.theme.buttonTheme[`${props.variant}`].disabled.border};
    background: ${(props) =>
      props.theme.buttonTheme[`${props.variant}`].disabled.background};
    color: ${(props) =>
      props.theme.buttonTheme[`${props.variant}`].disabled.color};
    cursor: not-allowed;
  }
`;

export default Button;
