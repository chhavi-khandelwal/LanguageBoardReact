import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  label: string;
  color: string;
} & React.HTMLAttributes<HTMLElement>;

const Tag: React.FC<Props> = ({ label, color }: Props) => (
  <Styled.TagContainer title={label} color={color}>
    <Styled.Value ellipsize>{label}</Styled.Value>
  </Styled.TagContainer>
);

const Styled = {
  TagContainer: styled.div<{ color: string }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    background-color: ${(props) => props.color};
    padding: ${(props) =>
      `${props.theme.spacings.s} ${props.theme.spacings.m}`};
    border-radius: 22px;
    margin-right: ${(props) => props.theme.spacings.s};
  `,
  Value: styled.div<{ ellipsize?: boolean }>`
    font-size: 12px;
    color: ${(props) => props.theme.colors.white};
    max-width: ${(props) => (props.ellipsize ? '100px' : '140px')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
};

export default Tag;
