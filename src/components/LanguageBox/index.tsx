import { Styler } from 'assets/styles/Styler';
import Icon from 'components/Icon';
import ProgressBar from 'components/ProgressBar';
import ScoreBoard from 'components/ScoreBoard';
import { SCORE_BOARD_LABEL } from 'constants/enum';
import * as React from 'react';
import { Language } from 'store/language.types';
import styled, { ThemeProps, withTheme } from 'styled-components';
import Delete from 'assets/images/delete.svg';
import { useStore } from 'store/store';

export type Props = {
  language: Language;
} & React.HTMLAttributes<HTMLElement> &
  ThemeProps<any>;

const LanguageBox: React.FC<Props> = (props: Props) => {
  const { id, score, label, color, flag } = props.language;
  const { theme } = props;
  const { done, todo, unverified } = score;
  const removeLanguage = useStore((state) => state.removeLanguage);

  return (
    <Styled.LanguageBox data-testid={`box-${id}`}>
      <Icon
        source={Delete}
        width={16}
        height={16}
        className="language"
        onClick={() => removeLanguage(id)}
        title="Remove Language"
        alt="remove"
        data-testid={`language-${id}`}
      />
      <Styler.FlexColAlignStart width="100%">
        <Styler.FlexJustifyStart gutter={`0 0 ${theme.spacings.m} 0`}>
          <Styled.Flag>
            <img src={flag} alt={label} width={14} height={10} />
          </Styled.Flag>
          <Styled.Language>{label}</Styled.Language>
        </Styler.FlexJustifyStart>
        <Styler.Flex gutter={`0 0 ${theme.spacings.m} 0`}>
          <ProgressBar fillerColor={color} fillerWidth={done} />
        </Styler.Flex>
        <Styler.FlexJustifyStart gutter="0">
          <ScoreBoard
            label={SCORE_BOARD_LABEL.DONE}
            color={theme.colors.gray3}
            score={done}
          />
          <ScoreBoard
            label={SCORE_BOARD_LABEL.WORDS_TO_DO}
            color={theme.colors.blue1}
            score={todo}
          />
          <ScoreBoard
            label={SCORE_BOARD_LABEL.UNVERIFIED}
            color={theme.colors.blue1}
            score={unverified}
          />
        </Styler.FlexJustifyStart>
      </Styler.FlexColAlignStart>
    </Styled.LanguageBox>
  );
};

const Styled = {
  Flag: styled.div`
    margin-right: ${(props) => props.theme.spacings.s};
  `,
  Language: styled.span`
    font-size: 13px;
    line-height: 15px;
    text-transform: capitalize;
  `,
  LanguageBox: styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    .language {
      display: none;
    }

    &:hover .language {
      display: block;
      position: absolute;
      top: 0px;
      right: 5px;
      transition: all 0.5s;
    }
  `,
};

export default withTheme(LanguageBox);
