import React, { Fragment, useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');

  const onChange = (event) => {
    if (/\s/.test(event.target.value)) {
      // It has any kind of whitespace
      // göra error
      return;
    }
    const pattern = /[^A-Za-z0-9]/;
    if (pattern.test(event.target.value)) {
      return;
    }

    /*         this.checkIfPartOfOrg(event.target.value); */

    // ({ [event.target.name]: event.target.value });
    // checkUsernameTaken(event.target.value);
  };

  const onChangeEmail = (event) => {
    // console.log(event.target.value)
    setEmail(event.target.value);
  };
  return (
    <Fragment>
      <h3>Create your account</h3>
      <form /* onSubmit={onSubmit} */>
        <label>
          Username
          <input
            name='username'
            value={username}
            onChange={onChange}
            type='text'
            placeholder='Username'
          />
        </label>
        <label>
          E-mail
          <input
            name='email'
            value={email}
            onChange={onChangeEmail}
            type='email'
            placeholder='E-mail address'
          />
        </label>
        <label>
          Password
          <input
            name='passwordOne'
            value={passwordOne}
            onChange={onChange}
            type='password'
            placeholder='Password'
          />
        </label>
        <label>
          Confirm password
          <input
            name='passwordTwo'
            value={passwordTwo}
            onChange={onChange}
            type='password'
            placeholder='Confirm password'
          />
        </label>
      </form>
    </Fragment>
  );
};

export default Signup;
