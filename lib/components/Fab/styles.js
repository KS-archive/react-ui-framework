import styled from 'styled-components';
import { Tooltip } from 'react-tippy';

export const Container = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 56px;
  height: 56px;
  z-index: 110;

  & > div:first-child > div > div:first-child {
    transition: all 0.3s;
    opacity: ${props => props.open ? 0 : 1};
    transform: scale(${props => props.open ? 0 : 1});
  }

  & > div:first-child > div > div:last-child {
    transition: all 0.3s;
    opacity: ${props => props.open ? 1 : 0};
    transform: scale(${props => props.open ? 1 : 0});
  }

  @media (max-width: 580px) {
    right: 20px;
    bottom: 20px;
  }
`;

export const Badge = styled.div`
  position: relative;

  ${({ count }) => count !== null && `
    &::after {
    content: '${count}';
    z-index: 112;
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: -4px;
    right: -6px;
    height: var(--space-lg);
    min-height: var(--space-lg);
    min-width: var(--space-lg);
    padding: 0 var(--space-xs);
    border-radius: calc(var(--space-lg) / 2);
    background-color: var(--accent1);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: var(--font-xs);
    font-weight: var(--bold);
  }
  `}
`;

export const BigFab = styled(Tooltip)`
  position: relative;
  z-index: 111;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  background-color: var(--primary2);
  transition: all 0.3s;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 3px var(--grey1);
  display: flex !important;
  cursor: pointer;

  &:hover {
    background-color: var(--primary2-hover);
  }

  &:active {
    background-color: var(--primary2-active);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
  }

  > div {
    position: absolute;
    top: 18px;
    bottom: 18px;
    left: 18px;
    right: 18px;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }

  path,
  use {
    fill: #fff;
  }
`;

export const SmallFab = styled(Tooltip)`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  align-items: center;
  display: flex !important;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: var(--primary2-hover);
  }

  &:active {
    background-color: var(--primary2-active);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }

  path,
  use {
    fill: #fff;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: ${({ pos }) => pos ? `${(pos * 64) + 16}px` : '8px'};
  left: 8px;
  z-index: 110;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: var(--primary2);
  transition: all 0.3s;
  align-items: center;
  display: flex !important;
  justify-content: center;
  box-shadow: 1px 1px 3px var(--grey1);
  opacity: ${({ pos }) => pos ? 1 : 0};
`;

