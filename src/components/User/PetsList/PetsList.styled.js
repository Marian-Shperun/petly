import styled from 'styled-components';
import { Delete20Filled } from '@fluentui/react-icons';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 22px;
  }
`;

const Item = styled.li`
  outline: 1px solid red;

  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 20px 40px 20px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.cardsShadowUser};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
    padding: 20px;
    border-radius: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 20px 30px 20px 20px;
  }
`;

const PetInfoFoto = styled.img`
  display: block;
  width: 240px;
  height: 240px;
  background-color: green;
  border-radius: 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 161px;
    height: 161px;
    border-radius: 40px;
  }
`;

const PetInfoWrapp = styled.div`
  flex-shrink: 2;
  position: relative;
`;

const PetDeleteButton = styled.button`
  position: absolute;
  top: -5px;
  right: 0;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 0;
  }

  &:hover {
    background-color: ${props => props.theme.colors.commonBackground};
  }
`;

const PetDeleteIcon = styled(Delete20Filled)`
  width: 25px;
  height: 25px;
  color: ${props => props.theme.colors.placeholderText};
`;

const PetInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.text.s};
  line-height: 1.36;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.text.m};
    line-height: ${props => props.theme.lineHeights.m};
  }
`;

const PetInfoName = styled.span`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.m};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.text.m};
    line-height: ${props => props.theme.lineHeights.m};
  }
`;

const styles = {
  List,
  Item,
  PetInfo,
  PetInfoName,

  PetInfoFoto,
  PetInfoWrapp,
  PetDeleteButton,
  PetDeleteIcon,
};

export default styles;
