import { Styler } from 'assets/styles/Styler';
import Icon from 'components/Icon';
import ProgressBar from 'components/ProgressBar';
import ScoreBoard from 'components/ScoreBoard';
import { SCORE_BOARD_LABEL } from 'constants/enum';
import * as React from 'react';
import styled, { withTheme } from 'styled-components';
import { isMobile } from 'utils/device';
import ArrowUp from 'assets/images/arrow-up.png';
import ArrowDown from 'assets/images/arrow-down.png';
import Tick from 'assets/images/tick.png';
import Avatar from 'assets/images/avatar.png';
import Ecg from 'assets/images/ecg.png';
import Camera from 'assets/images/camera.png';
import Manual from 'assets/images/manual.png';
import Tag from 'components/Tag';
import { sideBar } from 'store/sideBar';

export type Props = {
  theme?: any;
} & React.HTMLAttributes<HTMLElement>;

const SideBar = (props: Props) => {
  const { theme } = props;

  return (
    <Styled.Container isMobile={isMobile}>
      <Styled.SideBar>
        <Styled.Heading>Roamer App (Android SDK test)</Styled.Heading>
        <ProgressBar
          fillerColor={sideBar.progressBar.color}
          fillerWidth={sideBar.progressBar.width}
        />
        <Styled.Grid>
          <ScoreBoard
            color={theme.colors.gray3}
            gutter={`0 0 ${theme.spacings.l}`}
            label={SCORE_BOARD_LABEL.DONE}
            score="23"
          />
          <ScoreBoard
            gutter={`0 0 ${theme.spacings.l}`}
            label={SCORE_BOARD_LABEL.TEAM}
            score="23"
          />
          <ScoreBoard
            color={theme.colors.gray3}
            gutter={`0 0 ${theme.spacings.l}`}
            label={SCORE_BOARD_LABEL.BASE_WORDS}
            score="23"
          />
          <ScoreBoard
            gutter={`0 0 ${theme.spacings.l}`}
            label={SCORE_BOARD_LABEL.KEYS}
            score="23"
          />
          <ScoreBoard
            gutter={`0 0 ${theme.spacings.l}`}
            label={SCORE_BOARD_LABEL.QA_ISSUES}
            score="23"
          />
        </Styled.Grid>
        <Styled.SymboldGrid>
          <Icon width={30} height={30} source={ArrowUp} alt="arrowUp" />
          <Icon width={30} height={30} source={ArrowDown} alt="arrowDown" />
          <Icon width={30} height={30} source={Tick} alt="tick" />
          <Icon width={30} height={30} source={Avatar} alt="avatar" />
          <Icon width={30} height={30} source={Ecg} alt="ecg" />
          <Icon width={30} height={30} source={Camera} alt="camera" />
          <Icon width={30} height={30} source={Manual} alt="manual" />
        </Styled.SymboldGrid>
        <Styler.FlexJustifyStart gutter="0">
          <Tag color={theme.colors.orange} label="Roamer" />
          <Tag color={theme.colors.green1} label="iOS" />
        </Styler.FlexJustifyStart>
      </Styled.SideBar>
    </Styled.Container>
  );
};

const Styled = {
  SideBar: styled.div`
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  `,
  SymboldGrid: styled.div`
    width: calc(100% - 30px);
    margin: 0 0 ${(props) => props.theme.spacings.ml};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    gap: ${(props) => props.theme.spacings.s};
    grid-template-rows: 30px;
  `,
  Grid: styled.div`
    width: 100%;
    margin: ${(props) => props.theme.spacings.ml} auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: auto;
  `,
  Container: styled.section<{ isMobile: boolean }>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;
    margin-right: ${(props) => props.theme.spacings.ml};
    min-width: ${(props) => (props.isMobile ? '100%' : '200px')};
  `,
  Heading: styled.h2`
    margin-top: 0;
    font-size: 21px;
    color: ${(props) => props.theme.colors.blue1};
    word-wrap: break-word;
    line-height: 27px;
    letter-spacing: -0.01em;
  `,
};

export default withTheme(SideBar);
