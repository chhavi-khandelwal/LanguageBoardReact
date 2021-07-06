import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  height: number;
  width: number;
  onClick?: ((event: any) => void) & Function;
  source: any;
  alt?: string;
} & React.HTMLAttributes<HTMLElement>;

const Icon: React.FC<Props> = (props: Props) => {
  const { width, height, source, alt, ...rest } = props;
  return (
    <IconTag width={width} height={height} {...rest}>
      <img src={source} width={width} height={height} alt={alt} />
    </IconTag>
  );
};

const IconTag = styled.div<{ width: number; height: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
`;

export default Icon;
