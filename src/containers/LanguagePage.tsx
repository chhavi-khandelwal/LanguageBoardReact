import { LanguageGround } from 'containers/LanguageGround';
import SideBar from 'containers/SideBar';
import styled, { css } from 'styled-components';
import { isMobile } from 'utils/device';
import FilterButtons from './FilterButtons';

const LanguagePage = () => {
  return (
    <Styled.FlexCol isMobile={isMobile}>
      <FilterButtons />
      <Styled.Flex isMobile={isMobile}>
        <SideBar />
        <LanguageGround />
      </Styled.Flex>
    </Styled.FlexCol>
  );
};

const Styled = {
  Flex: styled.div<{ isMobile: boolean }>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    ${(props) =>
      props.isMobile &&
      css`
        flex-direction: column;
      `}
  `,
  FlexCol: styled.div<{ isMobile: boolean }>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px;
    width: ${(props) => (props.isMobile ? '100%' : '80%')};
  `,
};

export default LanguagePage;
