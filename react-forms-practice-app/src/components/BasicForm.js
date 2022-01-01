import useInput from "../store/inputHook";

const BasicForm = () => {
  const validate = value => value.trim() !== ''
  const validateEmail = value => validate(value) && value.includes('@')
  const {
    inputValue: firstnameValue,
    isValidInput: isValidFirstname,
    inputBlurHandler: firstnameBlurHandler,
    inputHandler: firstnameInputHandler,
    isError: firstnameError,
    reset: firstnameReset,
    isInvalidClass: isInvalidFirstnameClass
  } = useInput(validate)
  const {
    inputValue: lastnameValue,
    isValidInput: isValidLastname,
    inputBlurHandler: lastnameBlurHandler,
    inputHandler: lastnameInputHandler,
    isError: lastnameError,
    reset: lastnameReset,
    isInvalidClass: isInvalidLastnameClass
  } = useInput(validate)
  const {
    inputValue: emailValue,
    isValidInput: isValidEmail,
    inputBlurHandler: emailBlurHandler,
    inputHandler: emailInputHandler,
    isError: emailError,
    reset: emailReset,
    isInvalidClass: isInvalidEmailClass
  } = useInput(validateEmail)

  let isValidForm = false
  if (isValidFirstname && isValidLastname && isValidEmail) {
    isValidForm = true
  }
  const submitHandler = e => {
    e.preventDefault()
    if (!isValidForm) {
      return;
    }
    console.log(firstnameValue, lastnameValue, emailValue)
    emailReset()
    firstnameReset()
    lastnameReset()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={`form-control ${isInvalidFirstnameClass}`}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
            value={firstnameValue}
            onChange={firstnameInputHandler}
            onBlur={firstnameBlurHandler}
          />
          {firstnameError && <p className="error-text">Invalid Firstname</p>}
        </div>
        <div className={`form-control ${isInvalidLastnameClass}`}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
            value={lastnameValue}
            onChange={lastnameInputHandler}
            onBlur={lastnameBlurHandler}
          />
          {lastnameError && <p className="error-text">Invalid Lastname</p>}

        </div>
      </div>
      <div className={`form-control ${isInvalidEmailClass}`}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
          value={emailValue}
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className="error-text">Invalid Email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isValidForm}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
