import * as React from 'react';
import styled from 'styled-components';

export type FillerProps = {
  fillerColor: string;
  fillerWidth: string;
};
type Props = FillerProps & React.HTMLAttributes<HTMLElement>;

const ProgressBar: React.FC<Props> = (props: Props) => {
  const { fillerColor, fillerWidth } = props;

  return (
    <Styled.Container>
      <Styled.Filler fillerColor={fillerColor} fillerWidth={fillerWidth} />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.gray1};
  `,
  Filler: styled.div<FillerProps>`
    background-color: ${(props) => props.fillerColor};
    width: ${(props) => props.fillerWidth};
    height: 100%;
  `,
};

export default ProgressBar;
