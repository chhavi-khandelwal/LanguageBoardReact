import { Styler } from 'assets/styles/Styler';
import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  color?: string;
  gutter?: string;
  label: string;
  score: string | number;
} & React.HTMLAttributes<HTMLElement>;

const ScoreBoard: React.FC<Props> = (props: Props) => {
  const { color, gutter, label, score } = props;

  return (
    <Styler.FlexColAlignStart gutter={gutter}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Score color={color}>{score}</Styled.Score>
    </Styler.FlexColAlignStart>
  );
};

const Styled = {
  Score: styled.span<{ color?: string }>`
    font-size: 19px;
    line-height: 20px;
    color: ${(props) => props.color || props.theme.colors.blue1};
  `,
  Label: styled.span`
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    color: rgba(136, 136, 136, 0.95);
    text-transform: uppercase;
    margin-bottom: 2px;
    white-space: nowrap;
  `,
};

export default ScoreBoard;
