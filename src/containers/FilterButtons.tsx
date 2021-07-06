import Button from 'components/Button/Button';
import styled, { css } from 'styled-components';
import { isMobile } from 'utils/device';

const FilterButtons = () => {
  return (
    <Styled.Flex isMobile={isMobile}>
      <Styled.Button isMobile={isMobile}>New project ⇧⌘P</Styled.Button>
      <Styled.Button isMobile={isMobile} variant="milky">
        Expand all
      </Styled.Button>
      <Styled.Button isMobile={isMobile} variant="milky">
        Collapse All
      </Styled.Button>
    </Styled.Flex>
  );
};

const Styled = {
  Flex: styled.div<{ isMobile: boolean }>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: ${(props) => props.theme.spacings.xl} 0;
    ${(props) =>
      props.isMobile &&
      css`
        flex-wrap: wrap;
        justify-content: center;
      `}
  `,
  Button: styled(Button)<{ isMobile: boolean }>`
    margin-right: ${(props) => props.theme.spacings.s};
    ${(props) =>
      props.isMobile &&
      css`
        margin-bottom: 10px;
        min-width: 150px;
      `}
  `,
};

export default FilterButtons;
