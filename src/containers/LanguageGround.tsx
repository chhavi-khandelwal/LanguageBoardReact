import Button from 'components/Button/Button';
import LanguageBox from 'components/LanguageBox';
import { useState } from 'react';
import { useStore } from 'store/store';
import styled, { css } from 'styled-components';
import { isMobile } from 'utils/device';
import Form from './Form';

export const LanguageGround = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const languages = useStore((state) => state.languages);
  const languageData = useStore((state) => state.languageData);

  return (
    <>
      <Styled.Container isMobile={isMobile}>
        {languages.map((l) => (
          <div key={l.id}>
            <LanguageBox language={l} />
          </div>
        ))}
        <Styled.Button
          variant="milky"
          onClick={() => setShowModal(true)}
          disabled={!languageData.length}
          isMobile={isMobile}
          data-testid="add-language"
        >
          Add language
        </Styled.Button>
      </Styled.Container>
      {showModal && <Form onClose={() => setShowModal(false)} />}
    </>
  );
};

const Styled = {
  Button: styled(Button)<{ isMobile: boolean }>`
    width: 60%;
    ${(props) =>
      props.isMobile &&
      css`
        margin: ${props.theme.spacings.l} auto;
      `}
  `,
  Container: styled.aside<{ isMobile: boolean }>`
    width: ${(props) => (props.isMobile ? '100%' : 'calc(100% - 200px)')};
    margin: ${(props) => (props.isMobile ? props.theme.spacings.ml : 0)} 0
      ${(props) => props.theme.spacings.ml};
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      ${(props) => (props.isMobile ? '100%' : '205px')}
    );
    gap: ${(props) => props.theme.spacings.xl};
    grid-template-rows: 100px;
  `,
};
