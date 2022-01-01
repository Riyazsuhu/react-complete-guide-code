import useInput from '../store/inputHook';

const SimpleInput = () => {
  const {
    inputValue: nameInput,
    isValidInput: isValidName,
    isError: invalidNameInput,
    inputBlurHandler: nameInputBlurHandler,
    inputHandler: nameInputHandler,
    reset: nameInputReset,
  } = useInput(value => value.trim() !== '')
  const {
    inputValue: emailInput,
    isValidInput: isValidEmail,
    isError: invalidEmailInput,
    inputBlurHandler: emailInputBlurHandler,
    inputHandler: emailInputHandler,
    reset: emailInputReset
  } = useInput(value => value.trim() !== '' && value.includes('@'))
  console.log(invalidEmailInput, invalidNameInput)

  let isValidForm = false
  if (isValidName && isValidEmail) {
    isValidForm = true
  }
  const formSubmitHandler = e => {
    e.preventDefault()
    emailInputBlurHandler()
    nameInputBlurHandler()
    if (!isValidForm) {
      return;
    }
    console.log(nameInput)
    nameInputReset()
    emailInputReset()
  }
  const isInvalidNameClass = invalidNameInput ? 'invalid' : ''
  const isInvalidEmailClass = invalidEmailInput ? 'invalid' : ''
  return (
    < form onSubmit={formSubmitHandler} >
      <div className={`form-control ${isInvalidNameClass}`}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={nameInput}
        />
        {invalidNameInput && <p className='error-text'>Name must not to be empty!!</p>}
      </div>
      <div className={`form-control ${isInvalidEmailClass}`}>
        <label htmlFor='name'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={emailInput}
        />
        {invalidEmailInput && <p className='error-text'>Invalid email format</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isValidForm}>Submit</button>
      </div>
    </form >
  );
};

export default SimpleInput;
