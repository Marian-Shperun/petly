import { useState } from 'react';
// import { useRef } from 'react';

import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/operations';
import styles from './UserData.styled';
// import ButtonChange from './ButtonChange';
// import ButtonSubmit from './ButtonSubmit';
const {
  InputWrapp,
  UserDataItemWrapp,
  UserDataItemLabel,
  UserDataItemInput,
  ButtonWrapp,
  InfoSubmitIcon,
  InfoChangeIcon,
  UserDataItemForm,
} = styles;

const { updateUserData } = userOperations;

const UserDataItem = ({
  name,
  label,
  type,
  defaultValue,
  active,
  setActive,
}) => {
  //   const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(defaultValue);
  //   const inputRef = useRef(null);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setInputValue(value);
    }
    if (name === 'email') {
      setInputValue(value);
    } else if (name === 'birthday') {
      setInputValue(value);
    } else if (name === 'phone') {
      setInputValue(value);
    } else if (name === 'city') {
      setInputValue(value);
    }
  };

  //   function handleFocus() {
  //     inputRef.current.focus();
  //   }

  const activeHandleClick = name => {
    setActive(name);
    // handleFocus();
  };

  const handleSubmit = name => {
    setActive('');
    // handleFocus();

    //   dispatch(updateUserData({ [name]: inputValue }));
  };

  return (
    <UserDataItemWrapp>
      <UserDataItemForm>
        <UserDataItemLabel htmlFor={name}>{label}</UserDataItemLabel>
        <InputWrapp>
          <UserDataItemInput
            onChangeCapture={() => handleChange()}
            value={inputValue}
            active={active === name}
            disabled={active !== name}
            type={type}
            name={name}
            id={name}
            //   ref={inputRef}
          />
          {active === name ? (
            <ButtonWrapp type="button" onClick={() => handleSubmit(name)}>
              <InfoSubmitIcon />
            </ButtonWrapp>
          ) : (
            <ButtonWrapp type="button" onClick={() => activeHandleClick(name)}>
              <InfoChangeIcon />
            </ButtonWrapp>
          )}
        </InputWrapp>
      </UserDataItemForm>
    </UserDataItemWrapp>
  );
};

export default UserDataItem;
