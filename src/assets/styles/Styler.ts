import styled from 'styled-components';

export const Styler = {
  Flex: styled.div<{ gutter?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${(props) => props.gutter || 0};
    width: 100%;
  `,
  FlexJustifyStart: styled.div<{ gutter?: string }>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: ${(props) => props.gutter || props.theme.spacings.l};
    width: 100%;
  `,
  FlexJustifyEnd: styled.div<{ gutter?: string }>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: ${(props) => props.gutter || props.theme.spacings.l} 0;
  `,
  FlexColAlignStart: styled.div<{ gutter?: string; width?: string }>`
    width: ${(props) => props.width || 'auto'};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin: ${(props) => props.gutter || `0 ${props.theme.spacings.l} 0 0`};
  `,
};
