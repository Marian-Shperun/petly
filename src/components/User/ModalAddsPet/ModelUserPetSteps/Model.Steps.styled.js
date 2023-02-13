import { styled } from '@mui/system';
import { Form, Field } from 'formik';
import { Add28Regular } from '@fluentui/react-icons';

const FormWrapp = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FotoWrap = styled('div')`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 208px;
  margin-bottom: 13px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.commonBackground};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 40px;
    width: 182px;
    height: 182px;
  }
`;

const PetFoto = styled('img')`
  width: 208px;
  height: 208px;

  border-radius: 20px;
  object-fit: cover;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 182px;
    height: 182px;
  }
`;

const PetFotoInputLabel = styled('label')``;

const PetFotoIcon = styled(Add28Regular)`
  width: 52px;
  height: 52px;
  cursor: pointer;
  color: ${props => props.theme.colors.placeholderText};
  scale: 1;

  transition: ${props => props.theme.transitions.normal};

  &:hover,
  &:focus {
    scale: 1.3;
  }
`;

const FormInputWrapp = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 28px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
  }
`;

const FormInputWrappSecond = styled('div')`
  display: flex;
  flex-direction: column;
`;

const LabelWrapp = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 12px;
  }

  label {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.text.l};
    line-height: 1.44;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSizes.headers.xs};
      line-height: 1.08;
    }
  }
`;

const InputValue = styled(Field)`
  padding: 12px 14px;
  border-radius: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: ${props => props.theme.colors.commonBackground};

  &:focus {
    outline: 2px solid rgba(245, 146, 86, 0.5);
  }
  &::placeholder {
    color: ${props => props.theme.colors.placeholderText};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.text.s};
    line-height: 1.86;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-weight: ${props => props.theme.fontWeights.normal};
      font-size: ${props => props.theme.fontSizes.text.m};
      line-height: 1.63;
    }
  }
`;

const FormText = styled('p')`
  margin-bottom: 20px;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.text.m};
  line-height: ${props => props.theme.lineHeights.m};
  letter-spacing: -0.01em;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.text.xl};
    line-height: 1.2;
  }
`;

const CommentWrapp = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 12px;
  }

  label {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.text.l};
    line-height: 1.44;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSizes.headers.xs};
      line-height: 1.08;
    }
  }
`;

const InputCommentValue = styled(Field)`
  padding: 12px 14px;
  height: 100px;
  border-radius: 20px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: ${props => props.theme.colors.commonBackground};
  resize: none;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 116px;
    padding: 16px;
  }

  &:focus {
    outline: 2px solid rgba(245, 146, 86, 0.5);
  }
  &::placeholder {
    margin-top: 0;
    color: ${props => props.theme.colors.placeholderText};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.text.s};
    line-height: 1.86;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-weight: ${props => props.theme.fontWeights.normal};
      font-size: ${props => props.theme.fontSizes.text.m};
      line-height: 1.63;
    }
  }
`;

const ButtonsGroup = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.m};
  line-height: ${props => props.theme.lineHeights.m};
  letter-spacing: 0.04em;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 20px;
    font-size: ${props => props.theme.fontSizes.text.xl};
    line-height: 1.35;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 24px;
  }
`;

const ButtonAccent = styled('button')`
  width: 240px;
  padding: 9px;
  border-radius: 40px;
  border: 2px solid ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 180px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
  }
`;

const ButtonWhite = styled('button')`
  width: 240px;
  padding: 9px;
  border-radius: 40px;
  border: 2px solid ${props => props.theme.colors.accent};
  background-color: transparent;
  cursor: pointer;

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 180px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
  }
`;

const styles = {
  FormWrapp,
  FormInputWrapp,
  FormInputWrappSecond,
  ButtonsGroup,
  ButtonWhite,
  ButtonAccent,
  LabelWrapp,
  InputValue,
  FormText,
  PetFoto,
  PetFotoInputLabel,
  PetFotoIcon,
  FotoWrap,
  CommentWrapp,
  InputCommentValue,
};

export default styles;
